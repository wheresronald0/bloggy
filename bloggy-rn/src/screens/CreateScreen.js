import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import BlogContext from "../context/BlogContext";

const CreateScreen = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { state, addBlogPost } = useContext(BlogContext);

  console.log(content);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Title</Text>
      <TextInput
        style={styles.text}
        placeholder="Enter Title"
        onChangeText={(text) => setTitle(text)}
        value={title}
      />
      <Text style={styles.title}>Enter Blog Content</Text>
      <TextInput
        style={styles.textContent}
        placeholder="Enter Content"
        onChangeText={(text) => setContent(text)}
        value={content}
      />
      <Button title="Enter" onPress={() => addBlogPost(title, content)} />
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

export default CreateScreen;
