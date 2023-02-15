import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default function LogIn({ navigation }) {
  return (
    <View>
      <Text>LogIn</Text>
      <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
        <Text>Go to Create Acount</Text>
      </TouchableOpacity>
    </View>
  );
}
