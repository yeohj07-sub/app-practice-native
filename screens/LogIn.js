import React from "react";
import AuthLayOut from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";

export default function LogIn({ navigation }) {
  return (
    <AuthLayOut>
      <TextInput
        placeholder="Username"
        returnKeyType="next"
        placeholderTextColor={"rgba(255, 255, 255, 0.3)"}
        blurOnSubmit={false}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        returnKeyType="done"
        lastOne={true}
        placeholderTextColor={"rgba(255, 255, 255, 0.3)"}
        blurOnSubmit={false}
      />
    </AuthLayOut>
  );
}
