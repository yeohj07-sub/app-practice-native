import React, { useRef } from "react";
import { KeyboardAvoidingView } from "react-native";
import { TextInput } from "react-native";
import styled from "styled-components/native";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";

export default function CreateAccount() {
  const lastNameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };
  const onDone = () => {
    alert("Done");
  };
  return (
    <AuthLayout>
      <KeyboardAvoidingView
        style={{ width: "100%" }}
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "ios" ? 30 : 0}
      >
        <TextInput
          placeholder="First Name"
          placeholderTextColor="gray"
          returnKeyType="next"
          style={{ backgroundColor: "white", width: "100%" }}
          onSubmitEditing={() => onNext(lastNameRef)}
          blurOnSubmit={false}
        />
        <TextInput
          ref={lastNameRef}
          placeholder="Last Name"
          placeholderTextColor="gray"
          returnKeyType="next"
          style={{ backgroundColor: "white", width: "100%" }}
          onSubmitEditing={() => onNext(usernameRef)}
          blurOnSubmit={false}
        />
        <TextInput
          ref={usernameRef}
          placeholder="Username"
          placeholderTextColor="gray"
          returnKeyType="next"
          style={{ backgroundColor: "white", width: "100%" }}
          onSubmitEditing={() => onNext(emailRef)}
          blurOnSubmit={false}
        />
        <TextInput
          ref={emailRef}
          placeholder="Email"
          placeholderTextColor="gray"
          keyboardType="email-address"
          returnKeyType="next"
          style={{ backgroundColor: "white", width: "100%" }}
          onSubmitEditing={() => onNext(passwordRef)}
          blurOnSubmit={false}
        />
        <TextInput
          ref={passwordRef}
          placeholder="Password"
          placeholderTextColor="gray"
          secureTextEntry
          returnKeyType="done"
          style={{ backgroundColor: "white", width: "100%" }}
          onSubmitEditing={onDone}
          blurOnSubmit={false}
        />
        <AuthButton text="Create Accout" disabled={true} onPress={() => null} />
      </KeyboardAvoidingView>
    </AuthLayout>
  );
}
