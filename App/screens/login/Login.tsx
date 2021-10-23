import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Portal, Button } from "react-native-paper";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyle, primaryColor } from "../../style/stylesheet";
import db from "../../database/db";
import { AuthContext } from "../../components/Context";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Login = () => {
  const { signIn } = React.useContext(AuthContext);
  const account = db.collection("accounts");
  const [data, setData] = React.useState({
    username: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  const [accountDetails, setAccountDetails] = useState([
    {
      id: "",
      fullname: "",
      password: "",
      role: "",
      username: "",
    },
  ]);
  const getAccount = () => {
    account.onSnapshot((querySnapshot) => {
      const items = [
        {
          id: "",
          fullname: "",
          password: "",
          role: "",
          username: "",
        },
      ];
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          fullname: doc.data().name,
          password: doc.data().password,
          role: doc.data().role,
          username: doc.data().username,
        });
        setAccountDetails(items);
      });
    });
  };

  useEffect(() => {
    getAccount();
  }, []);

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };
  const loginHandle = (username, password) => {
    const foundUser = accountDetails.filter((item) => {
      return username == item.username && password == item.password;
    });
    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert(
        "Wrong Input!",
        "Username or password field cannot be empty.",
        [{ text: "Okay" }]
      );
      return;
    }

    if (foundUser.length == 0) {
      Alert.alert("Invalid User!", "Username or password is incorrect.", [
        { text: "Okay" },
      ]);
      return;
    }

    signIn(foundUser);
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
          onChangeText={(text) => setData({ ...data, username: text })}
          style={[globalStyle.textBox, { height: 45 }]}
          placeholder="Username"
        />
        <TextInput
          onChangeText={(text) => setData({ ...data, password: text })}
          style={[globalStyle.textBox, { height: 45 }]}
          placeholder="Password"
          secureTextEntry={true}
        />

        <Button
          mode="contained"
          color="white"
          style={[globalStyle.buttonStyle, { marginTop: 10 }]}
          onPress={() => {
            loginHandle(data.username, data.password);
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
