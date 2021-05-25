import * as React from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Profile = () => {
  return (
    <View>
      <Text>Hello!</Text>
      <Button title="Button" onPress={() => console.log("test")} />
      <TouchableOpacity onPress={() => console.log("Taena")}>
        <Text>Hellow</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
