import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const group = [
  {
    id: 1,
    name: "Project 7",
  },
];

const Inbox = () => {
  const renderGroupChat = ({ item }) => {
    return (
      <TouchableOpacity style={styles.gcContainer}>
        <MaterialCommunityIcons
          style={{ marginRight: 5 }}
          size={28}
          name="account-group-outline"
        />
        <Text style={{ fontSize: 15 }}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatlist}
        data={group}
        renderItem={renderGroupChat}
      />
    </View>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlist: {
    padding: 5,
  },
  gcContainer: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
    borderColor: "gray",
    borderWidth: 1,
    padding: 4,
    borderRadius: 5,
  },
});
