import {StyleSheet, Platform, Dimensions, StatusBar} from 'react-native';
import * as GlobalStyles from "../../GlobalStyles/GlobalStyles";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import Ionicons from '@expo/vector-icons/Ionicons';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.Colors.generalWhite,
  },
  navBar:{
    flex: 1,
    width: "100%",
    height: '20%',
    alignItems: "center",
  },
  userBox:{
    flex: 1,
    width: "100%",
    height: '20%',
    alignItems: "center",
  },
  usersSection:{
    width: "100%",
    height: "90%",
  },
  companyWelcomeText:{
    color: GlobalStyles.Colors.primaryColor,
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 25,
  },
  name:{
    color: GlobalStyles.Colors.primaryColor,
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 15,
  },
  email:{
    color: GlobalStyles.Colors.primaryColor,
    marginLeft: 10,
    fontSize: 10,
  },
  usersName:{
    color: GlobalStyles.Colors.generalWhite,
    fontWeight: "bold",
    fontSize: 10,
  },
  navBarWrapper:{
    paddingHorizontal: 20,
    flexDirection: "row",
    width: "100%",
    height: 60,
    justifyContent: "flex-start",
    alignItems: 'center'
  },
  navContainer:{
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: GlobalStyles.Colors.primaryColor,
    justifyContent: "center",
    alignItems: "center",
  },
  userBarWrapper:{
    paddingHorizontal: 20,
    flexDirection: "row",
    width: "100%",
    height: 60,
    justifyContent: "flex-start",
    alignItems: 'center'
  },
  userContainer:{
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: GlobalStyles.Colors.primaryColor,
    justifyContent: "center",
    alignItems: "center",
  },
  userDetailsContainer:{
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
  }
});

export default styles;
