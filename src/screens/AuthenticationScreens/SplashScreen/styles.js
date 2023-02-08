import {StyleSheet, Platform, Dimensions, StatusBar} from 'react-native';
import * as GlobalStyles from "../../../GlobalStyles/GlobalStyles";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;



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
  companyLogo:{ width: 200, height: 200, marginTop: "30%" },
  companyWelcomeText:{
    color: GlobalStyles.Colors.primaryColor,
    fontWeight: "bold",
    fontSize: 35,
    marginTop: 100,
  },
  signUpButton:{
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 50,
    backgroundColor: "white",
  },
  signUpText:{ color: GlobalStyles.Colors.primaryColor,fontWeight: "bold", fontSize: 25 },
  loginButton:{
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 30,
    backgroundColor: GlobalStyles.Colors.primaryColor,
  },
  loginText: { color: GlobalStyles.Colors.generalWhite, fontWeight: "bold", fontSize: 25 }
});

export default styles;
