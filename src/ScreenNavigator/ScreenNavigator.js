import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home/Home'
import Cart from '../Cart/Cart'
import ProductDetail from '../Home/component/ProductDetail';
import Search from '../Home/Search';
const Stack = createNativeStackNavigator();

const ScreenNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false,
        }}
    >
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="CartScreen" component={Cart}/>
        <Stack.Screen name='ProductDetailScreen' component={ProductDetail}/>
        <Stack.Screen name='Search' component={Search}/>
  </Stack.Navigator>
  )
}

export default ScreenNavigator