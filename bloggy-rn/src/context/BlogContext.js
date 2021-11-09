import React, { useState, useReducer } from "react";

const BlogContext = React.createContext();

//reducer
const reducer = (state, action) => {
  //state === { title: 'string'}
  //action(type/post: add || update || delete)
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "update_blogpost":
      return state.map((post) => {
        return post.id === action.payload.id ? action.payload : post;
      });

    case "delete_blogpost":
      //console.log(state);
      return state.filter((state) => state.id !== action.payload);
    case "default":
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(reducer, []);

  //add
  const addBlogPost = (title, content) => {
    dispatch({
      type: "add_blogpost",
      payload: { title: title, content: content },
    });
  };

  //update
  const updateBlogPost = (id, title, content) => {
    console.log(id, title, content);
    dispatch({
      type: "update_blogpost",
      payload: { id: id, title: title, content: content },
    });
  };

  //delete
  const deleteBlogPost = (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };

  return (
    <BlogContext.Provider
      value={{
        state: blogPosts,
        addBlogPost: addBlogPost,
        updateBlogPost: updateBlogPost,
        deleteBlogPost: deleteBlogPost,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;

/* pre-reducer- data pipe to give access to state and action/function to set state
-------
import React, { useState } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = () => {
    setBlogPosts([
      ...blogPosts,
      { title: `Blog Post #${blogPosts.length + 1}` },
    ]);
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
*/
