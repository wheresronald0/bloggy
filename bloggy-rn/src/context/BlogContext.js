import React, { useState, useReducer } from "react";

const BlogContext = React.createContext();

//reducer
const reducer = (state, action) => {
  //state === { title: 'string'}
  //action(type/post: add || delete, payload: 'the title + 1' )
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: `The is Blog Post #${state.length + 1}` }];
    case "default":
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(reducer, []);

  const addBlogPost = () => {
    dispatch({ type: "add_blogpost" });
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost }}>
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
