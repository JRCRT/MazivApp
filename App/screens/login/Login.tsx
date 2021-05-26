import React from "react";
import { Text, View, Image } from "react-native";
import {
    Container,
    Header,
    Title,
    Form,
    Item,
    Input,
    Button,
} from "native-base";
import { KeyboardAvoidingView } from "react-native";
import { useState } from "react/cjs/react.development";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Login = () => {
    //username
    const [email, setEmail] = useState("");
    const [emailError, setemailError] = useState("");

    //password
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const signin = () => {
        if (email === "admin" && password === "admin") {
            alert("Logged In");
        }
        if (email != "") {
            setemailError("");
        } else {
            setemailError("Email should not be empty");
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
        <Container>
            <KeyboardAvoidingView behavior="position">
                <Header
                    style={{
                        backgroundColor: "darkblue",
                        alignItems: "center",
                    }}
                >
                    <Title
                        style={{
                            color: "#fff",
                            fontSize: 30,
                        }}
                    >
                        Maziv Builders Inc.
                    </Title>
                </Header>

                <View style={{ alignItems: "center", margin: 20 }}>
                    <Image
                        source={require("../../assets/maziv_logo.png")}
                        style={{ width: 300, height: 300 }}
                    />
                </View>

                <Form style={{ paddingLeft: 20, paddingRight: 20 }}>
                    <Item>
                        <Input
                            placeholder="Email/Phone Number"
                            value={email}
                            onChangeText={(email) => setEmail(email)}
                            onChange={() => setemailError("")}
                        ></Input>
                    </Item>
                    <Text style={{ color: "red", marginLeft: 20 }}>
                        {emailError}
                    </Text>
                    <Item style={{ marginTop: 20 }}>
                        <Input
                            secureTextEntry={true}
                            placeholder="Password"
                            value={password}
                            onChangeText={(password) => setPassword(password)}
                            onChange={() => setPasswordError("")}
                        ></Input>
                        <Text onPress={forgot} style={{ color: "blue" }}>
                            Forgot Password?
                        </Text>
                    </Item>
                    <Text style={{ color: "red", marginLeft: 20 }}>
                        {passwordError}
                    </Text>
                    <Item style={{ marginTop: 10 }}>
                        <Button
                            rounded
                            block
                            style={{ width: "100%", backgroundColor: "orange" }}
                        >
                            <Text
                                style={{ fontSize: 20, fontWeight: "bold" }}
                                onPress={signin}
                            >
                                SIGN IN
                            </Text>
                        </Button>
                    </Item>
                </Form>
            </KeyboardAvoidingView>
        </Container>
    );
};
export default Login;
