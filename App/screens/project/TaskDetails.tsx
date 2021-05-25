import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import FacePile from "react-native-face-pile";
import Assign from "../../assets/Assign.svg";
import Upload from "../../assets/Upload.svg";
import { Checkbox } from "react-native-paper";

const task = [
  {
    name: "Jerico",
  },
  {
    name: "Rito",
  },
];

const FACES = [
  {
    id: 0,
    imageUrl: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    id: 1,
    imageUrl: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    id: 4,
    imageUrl: "https://reactnative.dev/img/tiny_logo.png",
  },
];

const TaskDetails = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.detailsContainer}>
          <Text style={styles.titles}>Task Name</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#D9D9D9",
              height: 50,
              borderRadius: 10,
              paddingHorizontal: 10,
            }}
          >
            <TextInput style={{ fontSize: 16 }} value="Task 1" />
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.titles}>Assignees</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#D9D9D9",
              height: 50,
              borderRadius: 10,
              paddingHorizontal: 10,
              justifyContent: "space-between",
            }}
          >
            <FacePile circleSize={16} numFaces={3} faces={FACES} />
            <TouchableOpacity>
              <Assign width={30} height={30} style={{ marginLeft: 20 }} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.titles}>Deadline</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#D9D9D9",
              height: 50,
              borderRadius: 10,
              paddingHorizontal: 10,
              justifyContent: "space-between",
            }}
          >
            <TextInput value="2020-04-21, 20:00" />
            <Feather name="calendar" size={28} />
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.titles}>CheckList</Text>
          <FlatList
            contentContainerStyle={{
              backgroundColor: "#D9D9D9",
              borderRadius: 10,
              paddingHorizontal: 10,
            }}
            data={task}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Checkbox status="unchecked" />
                    <Text>Floor plan</Text>
                  </View>
                  <MaterialCommunityIcons
                    name="delete-forever-outline"
                    size={20}
                    color="red"
                  />
                </View>
              );
            }}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.titles}>Attachments</Text>
          <View
            style={{
              backgroundColor: "#D9D9D9",
              borderRadius: 10,
              paddingHorizontal: 10,
              paddingVertical: 10,
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Upload />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TaskDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: "20%",
    backgroundColor: "gray",
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  body: {
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  detailsContainer: {
    marginBottom: 9,
  },
  checkListContainer: {
    height: 80,
    justifyContent: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    marginVertical: 4,
  },
  titles: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
  },
});
