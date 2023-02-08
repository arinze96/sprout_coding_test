import {
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./styles";

import React from "react";

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />

      <ImageBackground
        source={require("../../../../assets/background.png")}
        resizeMode={"cover"}
        style={styles.ImageBackground}
      >
        <Image
          source={require("../../../../assets/sprout-logo.png")}
          style={styles.companyLogo}
        />
        <Text
          style={styles.companyWelcomeText}
        >
          Welcome
        </Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignInScreen");
          }}
          style={styles.signUpButton}
        >
          <Text style={styles.signUpText}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignInScreen");
          }}
          style={styles.loginButton}
        >
          <Text style={styles.loginText}>
            Log In
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;
