import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import BlogContext from "../context/BlogContext";

const ShowScreen = ({ route, navigation }) => {
  const { state } = useContext(BlogContext);
  const { id } = route.params;
  const thisBlogPost = state.find((item) => item.id === id);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Edit", { id: thisBlogPost.id })}
        >
          <Feather name="edit-2" style={styles.icon} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>Show Screen!</Text>
      <Text>This is: {thisBlogPost.title}</Text>
      <Text>{thisBlogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 25,
    color: "white",
  },
});

export default ShowScreen;
