import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Project } from "./App/Screen/Project";
import { Files } from "./App/Screen/Files";
import { Inbox } from "./App/Screen/Inbox";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Project" component={Project} />
        <Tab.Screen name="Files" component={Files} />
        <Tab.Screen name="Inbox" component={Inbox} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
