import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../Home/Home';
import UserNavigation from '../User/UserNavigation';
import Cart from '../Cart/Cart';
import ScreenNavigator from '../ScreenNavigator/ScreenNavigator';
import { FontAwesome } from '@expo/vector-icons'; 
const Tab = createMaterialBottomTabNavigator();

const  TabNavigator=()=> {
  return (
    <Tab.Navigator
        barStyle={{backgroundColor:'white'}}
    >
      <Tab.Screen name="Home" component={ScreenNavigator} 
        options={{
            tabBarIcon:()=><FontAwesome name="home" size={24} color="black" />
        }}/>
      <Tab.Screen name="Cart" component={Cart} 
        options={{
            tabBarIcon:()=><FontAwesome name="shopping-cart" size={24} color="black" />
        }}/>
      <Tab.Screen name='User' component={UserNavigation}
        options={{
            tabBarIcon:()=><FontAwesome name="user" size={24} color="black" />
        }}/>
    </Tab.Navigator>
  );
}
export default TabNavigator;