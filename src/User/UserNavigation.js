import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import User from './User';
import Address from './Address';
import EditProfile from './EditProfile';
const Stack = createNativeStackNavigator();


const UserNavigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}
    >
      <Stack.Screen name="UserScreen" component={User} />
      <Stack.Screen name="AddressScreen" component={Address} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  )
}

export default UserNavigation