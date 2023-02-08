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
import * as GlobalStyles from "../../GlobalStyles/GlobalStyles";

import React from "react";
import CustomStatusBar from "../../Components/CustomStatusBar/CustomStatusBar";

const HomeScreen = ({route}) => {
  console.log(route.params);
  const name = route.params.name
  const email = route.params.email
  return (
    <>
      <CustomStatusBar />

      <View style={styles.container}>
        <View style={styles.navBar}>
          <View style={styles.navBarWrapper}>
            <View style={styles.navContainer}>
              <Ionicons
                size={20}
                name="chevron-back-outline"
                color={GlobalStyles.Colors.generalWhite}
              />
            </View>
            <Text style={styles.companyWelcomeText}>Set Up Profile</Text>
          </View>
        </View>
        <View
          style={styles.usersSection}
        >
          <View style={styles.userBox}>
            <View style={styles.userBarWrapper}>
              <View style={styles.userContainer}>
                <Text style={styles.usersName}>S</Text>
              </View>
              <View
                style={styles.userDetailsContainer}
              >
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.email}>{email}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
