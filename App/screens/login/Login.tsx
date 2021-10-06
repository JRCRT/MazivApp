import React, { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Portal, Button } from "react-native-paper";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyle, primaryColor } from "../../style/stylesheet";
import db from "../../database/db";

const Login = () => {
  const account = db.collection("accounts");
  const [accounts, setAccount] = useState([]);
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

  const navigation = useNavigation();
  //username
  const [username, setUsername] = useState("");
  const [emailError, setemailError] = useState("");

  //password
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const signin = () => {
    for (let user of accounts) {
      if (username === user.username && password === user.password) {
        alert("Logged In");
        navigation.navigate("MainTabScreen");
      } else {
        alert("wrong Credentials!");
      }
    }
    if (username != "") {
      setemailError("");
    } else {
      setemailError("Username should not be empty");
    }
    if (password != "") {
      setPasswordError("");
    } else {
      setPasswordError("Password should not be empty");
    }
  };

  const forgot = () => {
    alert("forgot password");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={{ width: 300, height: 300 }}
          source={require("../../assets/maziv_logo.png")}
        />
      </View>
      <View style={styles.loginForm}>
        <TextInput
          onChangeText={(text) => setUsername(text)}
          style={[globalStyle.textBox, { height: 45 }]}
          placeholder="Username"
        />
        <TextInput
          onChangeText={(text) => setPassword(text)}
          style={[globalStyle.textBox, { height: 45 }]}
          placeholder="Password"
          secureTextEntry={true}
        />

        <Button
          mode="contained"
          color="white"
          style={[globalStyle.buttonStyle, { marginTop: 10 }]}
          onPress={() => {
            signin();
          }}
        >
          <Text style={{ color: "black" }}>LOGIN</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: { alignItems: "center" },
  loginForm: { margin: 5 },
});
