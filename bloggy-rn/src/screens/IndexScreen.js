import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TextInput,
} from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = (props) => {
  const { data, addBlogPost } = useContext(BlogContext);

  return (
    <>
      <Text>Home Screen</Text>
      <FlatList
        data={data}
        keyExtractor={(data) => {
          data.title;
        }}
        renderItem={({ item }) => {
          return <Text>This is {item.title}</Text>;
        }}
      />
      <TextInput />
      <Button title="Add Blog Post" onPress={addBlogPost} />
    </>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
