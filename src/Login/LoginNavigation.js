import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPassWord from './ForgotPassword';
import Login from './Login';
import Profile from './Profile';
import SignIn from './SignIn';
import SignUp from './SignUp';
import VerifyCode from './VerifyCode';
import CreateNewPassword from './CreateNewPassword';
import TabNavigator from '../TabNavigator/TabNavigator';

const Stack = createNativeStackNavigator();
const LoginNavigation = () => {
      return (
        <Stack.Navigator
            screenOptions={{
                headerShown:false,
            }}
            initialRouteName="Login"
        >
            <Stack.Screen name="Login" component={Login} /> 
            <Stack.Screen name='CreateAccount' component={CreateNewPassword}/>
            <Stack.Screen name='SignIn' component={SignIn}/>
            <Stack.Screen name='SignUp' component={SignUp}/>
            <Stack.Screen name='Profile' component={Profile}/>
            <Stack.Screen name='VerifyCode' component={VerifyCode}/>
            <Stack.Screen name='ForgotPassWord' component={ForgotPassWord}/>
            <Stack.Screen name='TabNavigator' component={TabNavigator} />
        </Stack.Navigator>
      )
    }
    


export default LoginNavigation