import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import BlogContext from "../context/BlogContext";

const ShowScreen = ({ route }) => {
  const { state } = useContext(BlogContext);
  const { id } = route.params;
  const thisBlogPost = state.find((item) => item.id === id);
  console.log(thisBlogPost);
  console.log(id);

  return (
    <View>
      <Text>Show Screen!</Text>
      <Text>This is: {thisBlogPost.title}</Text>
      <Text>{thisBlogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
