import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Project from "./App/screens/project/Project";
import Files from "./App/screens/files/Files";
import Inbox from "./App/screens/inbox/Inbox";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const ProjectStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Project" component={Project} />
      </Stack.Navigator>
    );
  };

  const FilesStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Files" component={Files} />
      </Stack.Navigator>
    );
  };

  const InboxStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Inbox" component={Inbox} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Project" component={ProjectStack} />
        <Tab.Screen name="Files" component={FilesStack} />
        <Tab.Screen name="Inbox" component={InboxStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
