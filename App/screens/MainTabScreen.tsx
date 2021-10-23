import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { primaryColor } from "../style/stylesheet";
import { Portal } from "react-native-paper";

//Project Module Screens
import Project from "./project/Project";
import Task from "./project/Task";
import TaskDetails from "./project/TaskDetails";

//Files Screen
import Files from "./files/Files";
import TaskFolder from "./files/TaskFolder";
import TaskFile from "./files/TaskFile";

//Inbox/Message Screen
import Inbox from "./inbox/Inbox";

//AdminPanel
import AdminPanel from "./adminpanel/AdminPanel";

//login

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ProjectStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Project"
        component={Project}
        options={{
          title: "Project",
          headerLeft: () => (
            <FontAwesome
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 10 }}
              color={"black"}
              size={23}
              name={"navicon"}
            />
          ),
        }}
      />
      <Stack.Screen name="Task" component={Task} />
      <Stack.Screen name="TaskDetails" component={TaskDetails} />
    </Stack.Navigator>
  );
};

const FilesStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Files"
        component={Files}
        options={{
          title: "Files",
          headerLeft: () => (
            <FontAwesome
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 10 }}
              color={"black"}
              size={23}
              name={"navicon"}
            />
          ),
        }}
      />
      <Stack.Screen name="TaskFolder" component={TaskFolder} />
      <Stack.Screen name="TaskFile" component={TaskFile} />
    </Stack.Navigator>
  );
};

const InboxStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Inbox"
        component={Inbox}
        options={{
          title: "Inbox",
          headerLeft: () => (
            <FontAwesome
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 10 }}
              color={"black"}
              size={23}
              name={"navicon"}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const AdminPanelStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AdminPanel"
        component={AdminPanel}
        options={{
          title: "AdminPanel",
          headerLeft: () => (
            <FontAwesome
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 10 }}
              color={"black"}
              size={23}
              name={"navicon"}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const MainTabScreen = () => {
  return (
    <Portal.Host>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Project") {
              iconName = "home";
            } else if (route.name === "Files") {
              iconName = "folder";
            } else if (route.name === "Inbox") {
              iconName = "inbox";
            } else if (route.name == "AdminPanel") {
              iconName = "user";
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: primaryColor,
          inactiveTintColor: "gray",
          keyboardHidesTabBar: true,
        }}
      >
        <Tab.Screen name="Project" component={ProjectStack} />
        <Tab.Screen name="Files" component={FilesStack} />
        <Tab.Screen name="Inbox" component={InboxStack} />
        <Tab.Screen name="AdminPanel" component={AdminPanelStack} />
      </Tab.Navigator>
    </Portal.Host>
  );
};

export default MainTabScreen;
