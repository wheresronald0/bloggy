import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import BlogContext from "../context/BlogContext";

const EditScreen = ({ route, navigation }) => {
  const { state, updateBlogPost } = useContext(BlogContext);
  const { id } = route.params;
  const thisBlogPost = state.find((item) => item.id === id);
  console.log(thisBlogPost);
  console.log(id);

  const [title, setTitle] = useState(thisBlogPost.title);
  const [content, setContent] = useState(thisBlogPost.content);

  //console.log(title);
  //iconsole.log(content);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Title {id}</Text>
      <TextInput
        style={styles.text}
        onChangeText={(text) => setTitle(text)}
        value={title}
      />
      <Text style={styles.title}>Edit Blog Content</Text>
      <TextInput
        style={styles.textContent}
        onChangeText={(text) => setContent(text)}
        value={content}
      />
      <Button
        title="Update"
        onPress={() => {
          //console.log(id, title, content);
          updateBlogPost(id, title, content, () => navigation.pop());
          //navigation.navigate("Home", { id: id });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  text: {
    fontSize: 20,
    borderWidth: 1,
    borderEndColor: "grey",
    borderRadius: 5,
    marginBottom: 15,
  },
  textContent: {
    fontSize: 20,
    borderWidth: 1,
    borderEndColor: "grey",
    borderRadius: 5,
    marginBottom: 15,
  },
});

export default EditScreen;
