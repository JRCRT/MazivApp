import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./login/Login";
import SplashScreen from "./splashscreen/SplashScreen";
const RootStack = createStackNavigator();

const LoginStack = ({ navigation }) => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Login" component={Login} />
    </RootStack.Navigator>
  );
};

const SplashScreenStack = ({ navigation }) => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    </RootStack.Navigator>
  );
};

const RootStackScreen = () => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="Login" component={Login} />
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
