import { 
    View, 
    Text ,
    Image,
    TouchableOpacity,
} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
const Header = ({navigation}) => {
  return (
    <View
        style={{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
        }}
    >
        <Image source={require('../image/amazonlogo.png')}
        style={{
            width:126,
            height:62,
            resizeMode:'contain',
        }}
        />
        <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
            <AntDesign name="search1" size={35} color="#b0b0b0" />
        </TouchableOpacity>
    </View>
  )
}

export default Header