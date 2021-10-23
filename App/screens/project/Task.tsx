import React, { createRef, useState } from "react";
import {
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import Swiper from "react-native-swiper";
import { Feather } from "@expo/vector-icons";
import ProgressCircle from "react-native-progress-circle";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Portal, Button } from "react-native-paper";
import AddButton from "../../assets/AddButton.svg";
import Assign from "../../assets/Assign.svg";
import GanttChart from "react-native-gantt-chart";
import { globalStyle, primaryColor, taskStyle } from "../../style/stylesheet";
import FacePile from "react-native-face-pile";
import { useNavigation } from "@react-navigation/native";

const fall = new Animated.Value(1);
const sheetRef = createRef<BottomSheet>();
const WIDTH = Dimensions.get("window").width;

const renderHeader = () => (
  <View style={taskStyle.header}>
    <View style={taskStyle.panelHeader}>
      <TouchableOpacity onPress={() => sheetRef.current.snapTo(1)}>
        <Text>Swipe down to close</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const FACES = [
  {
    id: 0,
    imageUrl: "https://reactnative.dev/img/tiny_logo.png",
  },
];

const tasks = [
  {
    _id: "1",
    name: "Task 1",
    start: new Date(2018, 0, 1),
    end: new Date(2018, 0, 5),
    progress: 0.25,
  },
  {
    _id: "2",
    name: "Task 2",
    start: new Date(2018, 0, 3),
    end: new Date(2018, 0, 4),
    progress: 1,
  },
  {
    _id: "3",
    name: "Task 3",
    start: new Date(2018, 0, 5),
    end: new Date(2018, 0, 8),
    progress: 0.5,
  },
];

const task = [
  {
    name: "Jerico",
  },
];

const TaskView = () => {
  const navigation = useNavigation();
  return (
    <View style={taskStyle.taskContainer}>
      <Portal>
        <BottomSheet
          ref={sheetRef}
          renderHeader={renderHeader}
          renderContent={() => (
            <View style={taskStyle.bottomSheet}>
              <ScrollView
                contentContainerStyle={taskStyle.bottomSheetContainer}
              >
                <TextInput
                  style={globalStyle.textBox}
                  placeholder="Task Name"
                />

                <View style={globalStyle.textBoxDate}>
                  <TextInput value="2020-04-21, 20:00" />
                  <Feather name="calendar" size={23} />
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 5,
                    marginTop: 4,
                    paddingHorizontal: 4,
                  }}
                >
                  <FacePile numFaces={FACES.length} faces={FACES} />
                  <Assign width={25} height={25} />
                </View>

                <TouchableOpacity>
                  <Text style={{ marginBottom: 15, marginTop: 4 }}>
                    + Add CheckList
                  </Text>
                </TouchableOpacity>
                <Button
                  mode="contained"
                  color="white"
                  style={[globalStyle.buttonStyle]}
                  onPress={() => console.log("create")}
                >
                  <Text style={{ color: "black" }}>+ ADD NEW TASK</Text>
                </Button>
              </ScrollView>
            </View>
          )}
          snapPoints={[360, 0]}
          callbackNode={fall}
          initialSnap={1}
          enabledGestureInteraction={true}
          enabledContentGestureInteraction={false}
        />
      </Portal>
      <View style={taskStyle.taskHeader}>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 15,
            flex: 3,
            alignItems: "center",
          }}
        >
          <Text>TASK</Text>
          <Text>1</Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 5,
            backgroundColor: "gray",
          }}
        />
      </View>
      <FlatList
        style={{ width: "100%" }}
        data={task}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("TaskDetails")}
            >
              <View style={taskStyle.task}>
                <View style={taskStyle.taskInfo}>
                  <ProgressCircle
                    percent={90}
                    radius={15}
                    borderWidth={5}
                    color="black"
                    shadowColor="#999"
                    bgColor="gray"
                  >
                    <Text style={{ fontSize: 8, color: "black" }}>{"90%"}</Text>
                  </ProgressCircle>
                  <View style={taskStyle.taskDetails}>
                    <Text>Task 1</Text>
                    <View style={taskStyle.dateContainer}>
                      <View style={taskStyle.date}>
                        <Text style={taskStyle.dateTitleText}>Start</Text>
                        <Text style={taskStyle.dateText}>Jan-20-21</Text>
                      </View>
                      <View style={taskStyle.date}>
                        <Text style={taskStyle.dateTitleText}>End</Text>
                        <Text style={taskStyle.dateText}>Jan-20-21</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <Feather name="user-plus" size={23} />
              </View>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
      <TouchableOpacity
        style={taskStyle.addButton}
        onPress={() => {
          sheetRef.current.snapTo(0);
        }}
      >
        <AddButton />
      </TouchableOpacity>
    </View>
  );
};

//GanttChart
const GanttChartView = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <GanttChart
        data={null}
        numberOfTicks={6}
        onPressTask={(task) => alert(task.name)}
        gridMin={new Date(2018, 0, 1).getTime()}
        gridMax={new Date(2018, 0, 20).getTime()}
        colors={{
          barColorPrimary: "#0c2461",
          barColorSecondary: "#4a69bd",
          textColor: "#fff",
          backgroundColor: "#82ccdd",
        }}
      /> */}
    </View>
  );
};

const Task = () => {
  return (
    <Swiper loop={false} showsPagination={false} bounces={true}>
      <TaskView />
      <GanttChartView />
    </Swiper>
  );
};

export default Task;
