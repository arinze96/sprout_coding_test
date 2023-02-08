import * as React from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Text,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "./src/screens/AuthenticationScreens/SplashScreen/SplashScreen";
import SignUpScreen from "./src/screens/AuthenticationScreens/SignUpScreen/SignUpScreen";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import SignInScreen from "./src/screens/AuthenticationScreens/SignInScreen/SignInScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
