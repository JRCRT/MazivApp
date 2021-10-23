import React from "react";
import { View, Text, Button } from "react-native";

const SplashScreen = ({ navigation }) => {
  return (
    <View>
      <Text>SPLASHSCREEN</Text>
      <Button title="Button" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

export default SplashScreen;
