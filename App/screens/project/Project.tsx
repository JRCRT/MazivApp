import React, { createRef, useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { Button, Portal } from "react-native-paper";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import db from "../../database/db";
import { globalStyle, primaryColor } from "../../style/stylesheet";
import AddButton from "../../assets/AddButton.svg";
import ProgressCircle from "react-native-progress-circle";
import { addProject } from "../../API/Query";
import { projectStyle, projectContainerStyle } from "../../style/stylesheet";

const WIDTH = Dimensions.get("window").width;
const numColumn = 2;
const fall = new Animated.Value(1);
const sheetRef = createRef<BottomSheet>();
const props = { WIDTH, numColumn };
const renderHeader = () => (
  <View style={projectStyle.header}>
    <View style={projectStyle.panelHeader}>
      <TouchableOpacity onPress={() => sheetRef.current.snapTo(1)}>
        <Text>Swipe down to close</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const FormatData = (DATA, numColumn) => {
  const totalRows = Math.floor(DATA.length / numColumn);
  let totalLastRow = DATA.length - totalRows * numColumn;
  while (totalLastRow !== 0 && totalLastRow !== numColumn) {
    DATA.push({ id: "blank", empty: true });
    totalLastRow++;
    console.log("hello");
  }
  return DATA;
};

const Project = ({ navigation }) => {
  const project = db.collection("projects");
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [cost, setCost] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePickerVisible1, setDatePickerVisibility1] = useState(false);
  const [date, setDate] = useState("");
  const [date1, setDate1] = useState("");

  function getAccounts() {
    project.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setProjects(items);
    });
  }

  useEffect(() => {
    getAccounts();
  }, []);

  // Project Container
  const renderProjectCard = ({ item }) => {
    const { projectName, dateCreated, completionDate, cost, location } = item;
    if (item.empty) {
      return <View style={projectContainerStyle(props).hiddenItem} />;
    }
    return (
      <TouchableOpacity
        style={projectContainerStyle(props).item}
        onPress={() => navigation.navigate("Task")}
      >
        <View style={projectStyle.itemHeader}>
          <ProgressCircle
            percent={90}
            radius={15}
            borderWidth={5}
            color="black"
            shadowColor="#999"
            bgColor="gray"
          >
            <Text style={projectStyle.progressCircleText}>{"90%"}</Text>
          </ProgressCircle>
          <FontAwesome
            onPress={() => console.log("pencil")}
            name="ellipsis-v"
            size={18}
            color="black"
          />
        </View>
        <View style={projectStyle.itemBody}>
          <Text style={projectStyle.projectNameText}>{projectName}</Text>
          <View style={projectStyle.projectDetailsContainer}>
            <View style={projectStyle.projectDetailsRow}>
              <View style={projectStyle.projectDetails}>
                <FontAwesome5 name="calendar-alt" size={15} color="black" />
                <Text style={projectStyle.textTitle}>{dateCreated}</Text>
              </View>
              <View style={projectStyle.projectDetails}>
                <MaterialCommunityIcons
                  name="currency-php"
                  size={15}
                  color="black"
                />
                <Text style={projectStyle.textTitle}>{cost}</Text>
              </View>
            </View>

            <View style={projectStyle.projectDetailsRow}>
              <View style={projectStyle.projectDetails}>
                <FontAwesome5 name="calendar-alt" size={15} color="black" />
                <Text style={projectStyle.textTitle}>{completionDate}</Text>
              </View>
              <View style={projectStyle.projectDetails}>
                <Ionicons name="location-sharp" size={15} color="black" />
                <Text style={projectStyle.textTitle}>{location}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Portal>
        <BottomSheet
          ref={sheetRef}
          renderContent={() => (
            <ScrollView
              contentContainerStyle={projectStyle.bottomSheetContainer}
            >
              <TextInput
                onChangeText={(text) => setProjectName(text)}
                style={globalStyle.textBox}
                placeholder="Project Name"
              />

              <TextInput
                onChangeText={(text) => setCost(text)}
                style={globalStyle.textBox}
                placeholder="Cost"
              />

              <TouchableOpacity style={globalStyle.textBoxDate}>
                <TextInput
                  placeholder="Date Started"
                  value={date}
                  editable={false}
                  style={{ color: "black" }}
                />
                <Feather
                  onPress={() => {
                    setDatePickerVisibility(true);
                  }}
                  name="calendar"
                  size={23}
                />
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                onConfirm={(date) => {
                  setDatePickerVisibility(false);
                  setDate(date.toString());
                }}
                onCancel={() => setDatePickerVisibility(false)}
              />
              <View style={globalStyle.textBoxDate}>
                <TextInput placeholder="Completion Date" value={date1} />
                <Feather
                  name="calendar"
                  size={23}
                  onPress={() => {
                    setDatePickerVisibility1(true);
                  }}
                />
                <DateTimePickerModal
                  isVisible={isDatePickerVisible1}
                  onConfirm={(date1) => {
                    setDatePickerVisibility1(false);
                    setDate1(date1.toString());
                  }}
                  onCancel={() => setDatePickerVisibility1(false)}
                />
              </View>

              <View style={projectStyle.assigneeContainer}>
                {/* {DATA2.map((l, i) => (
                  <View
                    key={i}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingVertical: 3,
                    }}
                  >
                    <Text>Jerico Rito</Text>
                    <Text>Project Manager</Text>
                    <MaterialCommunityIcons
                      name="delete-forever-outline"
                      size={20}
                      color="red"
                    />
                  </View>
                ))} */}
              </View>
              <TouchableOpacity style={projectStyle.addMemberButton}>
                <Text>+ Add Member</Text>
              </TouchableOpacity>
              <Button
                mode="contained"
                color="white"
                style={[globalStyle.buttonStyle]}
                onPress={() => {
                  const projectDetails = {
                    projectName: projectName,
                    cost: cost,
                    dateCreated: moment(date).format("MM/DD/YYYY"),
                    completionDate: moment(date1).format("MM/DD/YYYY"),
                  };
                  addProject(projectDetails);
                }}
              >
                <Text style={{ color: "black" }}>+ CREATE NEW PROJECT</Text>
              </Button>
            </ScrollView>
          )}
          renderHeader={renderHeader}
          snapPoints={[360, 0]}
          callbackNode={fall}
          initialSnap={1}
          enabledGestureInteraction={true}
          enabledContentGestureInteraction={false}
        />
      </Portal>

      <FlatList
        data={FormatData(projects, numColumn)}
        renderItem={renderProjectCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={projectStyle.cardContainer}
        numColumns={numColumn}
      />

      <TouchableOpacity
        style={projectStyle.addButton}
        onPress={() => {
          sheetRef.current.snapTo(0);
        }}
      >
        <AddButton />
      </TouchableOpacity>
    </View>
  );
};

export default Project;
