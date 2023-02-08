import {StyleSheet, Platform, Dimensions, StatusBar} from 'react-native';
import * as GlobalStyles from "../../../GlobalStyles/GlobalStyles";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import Ionicons from '@expo/vector-icons/Ionicons';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.Colors.generalWhite,
  },
  ImageBackground:{
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  companyLogo:{ width: 100, height: 100, marginTop: "30%" },
  companyWelcomeText:{
    color: GlobalStyles.Colors.primaryColor,
    fontWeight: "bold",
    fontSize: 35,
    marginTop: 60,
  },
  nameInput:{
    width: "80%",
    paddingHorizontal: 20,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    borderRadius: 6,
    borderWidth: 1, 
    borderColor: GlobalStyles.Colors.primaryColor,
  },
  nameInput2:{
    width: "80%",
    paddingHorizontal: 20,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 6,
    borderWidth: 1, 
    borderColor: GlobalStyles.Colors.primaryColor,
  },
  labelWrapper:{
    width: 80,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -13,
    left: 0
  },
  labelContainer:{
    width: 50,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  halfTextInput: { width: "100%", height: "100%" },
  errorMessage:{ color: GlobalStyles.Colors.generalMainRed, fontSize: 12 },
  emailInput:{
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    borderRadius: 6,
    borderWidth: 1, 
    borderColor: GlobalStyles.Colors.primaryColor,
  },
  loginButton:{
    width: "60%",
    height: 40,
    justifyContent: "center",
    flexDirection: 'row',
    alignItems: "center",
    borderRadius: 20,
    marginTop: 30,
    backgroundColor: GlobalStyles.Colors.primaryColor,
  },
  loginText: { color: GlobalStyles.Colors.generalWhite, fontWeight: "bold", fontSize: 15 }
});

export default styles;
