import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Home/Home';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/TabNavigator/TabNavigator';
import Login from './src/Login/Login';
import SignIn from './src/Login/SignIn';
import SignUp from './src/Login/SignUp';
import ForgotPassword from './src/Login/ForgotPassword';
import VerifyCode from './src/Login/VerifyCode';
import CreateNewPassword from './src/Login/CreateNewPassword';
import Profile from './src/Login/Profile';
import LoginNavigation from './src/Login/LoginNavigation';
import User from './src/User/User';
import EditProfile from './src/User/EditProfile';
import Address from './src/User/Address';
import Search from './src/Home/Search';
export default function App() {
  return (
    <NavigationContainer>
      <LoginNavigation/>
    </NavigationContainer>
  );
}
