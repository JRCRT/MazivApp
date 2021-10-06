import React, { createRef, useState, useEffect } from "react";
import { addAccount } from "../../API/Query";
import db from "../../database/db";
import Animated, { Value } from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Avatar, Portal, Button } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import AddButton from "../../assets/AddButton.svg";
import { globalStyle, primaryColor } from "../../style/stylesheet";
import { TextInput } from "react-native-gesture-handler";
import { Dropdown } from "react-native-material-dropdown";
import DropDownPicker from "react-native-dropdown-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const fall = new Animated.Value(1);
const sheetRef = createRef<BottomSheet>();

const group = [
  {
    id: 1,
    avatar: "https://reactnative.dev/img/tiny_logo.png",
    name: "Jerico Rito",
    position: "Manager",
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

const AdminPanel = () => {
  const account = db.collection("accounts");
  const [accounts, setAccount] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Project Manager", value: "Project Manager" },
    { label: "Designer", value: "Designer" },
    { label: "On-site Engineer", value: "On-Site Engineer" },
  ]);

  function getAccounts() {
    account.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setAccount(items);
    });
  }

  useEffect(() => {
    getAccounts();
  }, []);

  const renderUsers = ({ item }) => {
    return (
      <View style={styles.gcContainer}>
        <Avatar.Image
          size={30}
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        />
        <Text style={{ fontSize: 15 }}>{item.fullname}</Text>
        <Text style={{ fontSize: 15 }}>{item.role}</Text>
        <FontAwesome
          onPress={() => console.log()}
          name="ellipsis-v"
          size={18}
          color="black"
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Portal>
        <BottomSheet
          ref={sheetRef}
          renderHeader={renderHeader}
          renderContent={() => (
            <View
              style={{ height: 360, backgroundColor: "white", padding: 10 }}
            >
              <View style={styles.avatar}>
                <Avatar.Image
                  size={90}
                  source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
                />
                <TouchableOpacity style={styles.upload}>
                  <AddButton width={20} />
                </TouchableOpacity>
              </View>
              <TextInput
                onChangeText={(text) => setUsername(text)}
                style={globalStyle.textBox}
                placeholder="Username"
              />
              <TextInput
                onChangeText={(text) => setPassword(text)}
                style={globalStyle.textBox}
                placeholder="Password"
                secureTextEntry={true}
              />
              <TextInput
                onChangeText={(text) => setFullname(text)}
                style={globalStyle.textBox}
                placeholder="Fullname"
              />
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={{ height: 42 }}
              />

              <Button
                mode="contained"
                color="white"
                style={[globalStyle.buttonStyle, { marginTop: 10 }]}
                onPress={() => {
                  const account = {
                    username: username,
                    password: password,
                    fullname: fullname,
                    role: value,
                  };
                  addAccount(account);
                }}
              >
                <Text style={{ color: "black" }}>+ CREATE ACCOUNT</Text>
              </Button>
            </View>
          )}
          snapPoints={[380, 0]}
          callbackNode={fall}
          initialSnap={1}
          enabledGestureInteraction={true}
          enabledContentGestureInteraction={false}
        />
      </Portal>

      <FlatList
        contentContainerStyle={styles.flatlist}
        data={accounts}
        renderItem={renderUsers}
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

export default AdminPanel;

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
    padding: 10,
    borderRadius: 5,
    justifyContent: "space-between",
  },

  addButton: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },

  panelHeader: {
    alignItems: "center",
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

  avatar: {
    alignItems: "center",
    marginBottom: 5,
  },

  upload: {
    position: "absolute",
    alignItems: "center",
    right: 0,
    marginRight: 135,
    marginBottom: -20,
    bottom: 0,
  },

  dropdown: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    height: 40,
    justifyContent: "center",
  },
});
