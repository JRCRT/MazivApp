import * as React from "react";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabScreen from "./App/screens/MainTabScreen";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="MainTabScreen" component={MainTabScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
