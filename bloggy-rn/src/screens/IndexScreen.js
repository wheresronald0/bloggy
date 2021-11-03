import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = (props) => {
  const blogPosts = useContext(BlogContext);

  return (
    <>
      <Text>Home Screen</Text>
      <FlatList
        data={blogPosts}
        keyExtractor={(blogPosts) => {
          blogPosts.title;
        }}
        renderItem={({ item }) => {
          return <Text>This is {item.title}</Text>;
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
