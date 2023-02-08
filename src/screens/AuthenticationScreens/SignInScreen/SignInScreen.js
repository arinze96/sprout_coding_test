import {
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Text,
  TextInput,
  ActivityIndicator,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./styles";
import * as GlobalStyles from "../../../GlobalStyles/GlobalStyles";

import React from "react";
const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const SignInScreen = ({navigation}) => {
  const [display, setdisplay] = React.useState("none");
  const [display1, setdisplay1] = React.useState("none");
  const [name, setName] = React.useState("");
  const [nameError, setNameError] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />

      <View style={styles.ImageBackground}>
        <Image
          source={require("../../../../assets/sprout-logo.png")}
          style={styles.companyLogo}
        />
        <Text style={styles.companyWelcomeText}>Set Up Profile</Text>

        <View style={styles.nameInput}>
          <View style={{ ...styles.labelWrapper, display: display }}>
            <View style={styles.labelContainer}>
              <Text>Name</Text>
            </View>
          </View>

          <TextInput
            placeholder="Name"
            maxLength={18}
            autoCapitalize="none"
            placeholderTextColor={GlobalStyles.Colors.generalBlack}
            style={styles.halfTextInput}
            onFocus={() => {
              setdisplay("flex");
            }}
            onBlur={() => {
              setdisplay("none");
            }}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={{ width: "80%", height: 40, justifyContent: "center" }}>
          {nameError && !name ? (
            <Text style={styles.errorMessage}>Name is required</Text>
          ) : null}
        </View>
        <View style={styles.nameInput2}>
          <View style={{ ...styles.labelWrapper, display: display1 }}>
            <View style={styles.labelContainer}>
              <Text>Email</Text>
            </View>
          </View>

          <TextInput
            placeholder="Email"
            maxLength={18}
            autoCapitalize="none"
            placeholderTextColor={GlobalStyles.Colors.generalBlack}
            style={styles.halfTextInput}
            onFocus={() => {
              setdisplay1("flex");
            }}
            onBlur={() => {
              setdisplay1("none");
            }}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={{ width: "80%", height: 40, justifyContent: "center" }}>
          {emailError && !email ? (
            <Text style={styles.errorMessage}>Email is required</Text>
          ) : null}
        </View>

        <TouchableOpacity
          onPress={() => {
            if (!name || !email) {
              if (email && !email.match(isValidEmail)) {
                alert("invalid email address");
                return
              }
              setIsLoading(false);
              setNameError(true);
              setEmailError(true);
            } else {
              setIsLoading(true);
              navigation.navigate("HomeScreen", {name, email});
            }
          }}
          style={{
            ...styles.loginButton,
            backgroundColor: isLoading
              ? GlobalStyles.Colors.lightPrimaryColor
              : GlobalStyles.Colors.primaryColor,
          }}
        >
          {isLoading ? (
            <ActivityIndicator
              size="small"
              color={GlobalStyles.Colors.primaryColor}
            />
          ) : (
            <>
              <Ionicons
                size={20}
                name="lock-closed-outline"
                style={{ marginRight: 10 }}
                color={GlobalStyles.Colors.generalWhite}
              />
              <Text style={styles.loginText}>Log In</Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;
