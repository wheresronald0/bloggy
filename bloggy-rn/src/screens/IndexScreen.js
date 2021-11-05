import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import BlogContext from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

//deconstructs and gives access to state and setState fuction that was passed down
const IndexScreen = (props) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);

  return (
    <View>
      <TextInput />
      <Button title="Add Blog Post" onPress={addBlogPost} />
      <View>
        <FlatList
          data={state}
          keyExtractor={(blogPost) => {
            blogPost.title;
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate("Show", { id: item.id })
                }
              >
                <View style={styles.container}>
                  <Text style={styles.title}>
                    This is {item.title} - {item.id}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      deleteBlogPost(item.id);
                    }}
                  >
                    <Feather name="trash" style={styles.icon} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 25,
  },
});

export default IndexScreen;
