import React, { createRef, useState } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
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
import { globalStyle, primaryColor } from "../../style/stylesheet";
import ProgressCircle from "react-native-progress-circle";
import AddButton from "../../assets/AddButton.svg";

const WIDTH = Dimensions.get("window").width;
const numColumn = 2;
const fall = new Animated.Value(1);
const sheetRef = createRef<BottomSheet>();

const DATA = [
  {
    id: "1",
    title: "First Item",
  },
];

const DATA2 = [
  {
    id: "1",
    title: "First Item",
  },
];

const renderHeader = () => (
  <View style={styles.header}>
    <View style={styles.panelHeader}>
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
  }
  return DATA;
};

const Project = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState("");
  const renderProjectCard = ({ item }) => {
    if (item.empty) {
      return <View style={styles.hiddenItem} />;
    }
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("Task")}
      >
        <View style={styles.itemHeader}>
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
          <FontAwesome
            onPress={() => console.log("pencil")}
            name="ellipsis-v"
            size={18}
            color="black"
          />
        </View>
        <View style={styles.itemBody}>
          <Text style={{ fontSize: 17, color: "black" }}>
            2 STOREY BUILDING
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flex: 3,
              paddingVertical: 5,
              paddingHorizontal: 4,
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <View
              style={{
                justifyContent: "space-evenly",
                height: "100%",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <FontAwesome5 name="calendar-alt" size={15} color="black" />
                <Text style={styles.textTitle}>Mar 10, 2021</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="currency-php"
                  size={15}
                  color="black"
                />
                <Text style={styles.textTitle}>1M</Text>
              </View>
            </View>

            <View
              style={{
                justifyContent: "space-evenly",
                height: "100%",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <FontAwesome5 name="calendar-alt" size={15} color="black" />
                <Text style={styles.textTitle}>Jun 10, 2021</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Ionicons name="location-sharp" size={15} color="black" />
                <Text style={styles.textTitle}>Valenzuela City</Text>
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
              contentContainerStyle={{
                backgroundColor: "white",
                justifyContent: "flex-start",
                paddingHorizontal: 30,
                paddingTop: 10,
                height: 380,
              }}
            >
              <TextInput
                style={globalStyle.textBox}
                placeholder="Project Name"
              />
              <TextInput style={globalStyle.textBox} placeholder="Cost" />

              <TouchableOpacity style={globalStyle.textBoxDate}>
                <TextInput
                  placeholder="Project Name"
                  value={moment(date).format("MMMM Do YYYY")}
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
                <TextInput placeholder="CompletionDate" />
                <Feather name="calendar" size={23} />
              </View>

              <View style={{ paddingHorizontal: 12, paddingVertical: 4 }}>
                {DATA2.map((l, i) => (
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
                ))}
              </View>
              <TouchableOpacity
                style={{ paddingHorizontal: 12, marginBottom: 20 }}
              >
                <Text>+ Add Member</Text>
              </TouchableOpacity>
              <Button
                mode="contained"
                color="white"
                style={[globalStyle.buttonStyle]}
                onPress={() => console.log("create")}
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
        data={FormatData(DATA, numColumn)}
        renderItem={renderProjectCard}
        keyExtractor={(item, index) => item.id}
        contentContainerStyle={styles.cardContainer}
        numColumns={numColumn}
      />

      <TouchableOpacity
        style={styles.addButton}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
  },

  cardContainer: {
    marginTop: 20,
    justifyContent: "space-evenly",
  },

  itemHeader: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 4,
  },

  itemBody: {
    flex: 3,
    alignItems: "center",
    paddingVertical: 4,
    width: "100%",
  },

  item: {
    width: WIDTH / numColumn,
    height: 130,
    padding: 3,
    backgroundColor: "gray",
    borderRadius: 10,
    margin: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    shadowColor: "black",
    shadowOffset: { width: 10, height: 10 },
    elevation: 5,
  },

  ellipsis: {
    right: 10,
  },

  addButton: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },

  hiddenItem: {
    width: WIDTH / numColumn,
    height: 100,
    padding: 3,
    backgroundColor: "transparent",
    borderRadius: 10,
    margin: 3,
    flex: 1,
  },

  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginVertical: 7,
  },
  panelHeader: {
    alignItems: "center",
  },

  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textTitle: {
    fontSize: 9,
    color: "black",
    marginLeft: 2,
  },
});
