import { 
    View, 
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    FlatList
} from 'react-native'
import React from 'react'
import DataProduct from '../../../Data/DataProduct/DataProduct'
import { FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
const {width,height}= Dimensions.get("screen");
const ListProduct = (props) => {
    const navigation= useNavigation();
    const brand=props.onBrand;
    const text= props.onText;
    const renderItem=({item,index})=>{
        if ((item.bestseller==='yes') && (brand===''))
            return(
                <TouchableOpacity key={index} onPress={()=>{navigation.navigate('ProductDetailScreen',item.id)}}>
                    <View
                        style={{
                            flexDirection:'row',
                            justifyContent:'flex-start',
                            alignItems:'center',
                            marginVertical:10,
                            borderWidth:0.2,
                            borderRadius:10,
                            paddingVertical:10,

                        }}>
                        <Image source={{uri:item.image}}
                            style={{
                                width:200,
                                height:100,
                                resizeMode:'contain',
                            }}/>
                        <View
                            style={{
                                width:170,
                            }}>
                            <Text>{item.name}</Text>
                            {/*Rating */}
                            <View
                                style={{
                                    flexDirection:'row',
                                    alignItems:'center',
                                }}>
                                {
                                        [1,2,3,4,5].map((Item,Index)=>{
                                            if (Item<=item.rating)
                                                return <FontAwesome key={Index} name="star" color="#ffa41c" size={14}/>
                                            else
                                                if (Item>item.rating)
                                                    if (item.rating-Math.floor(item.rating)>=0.5)
                                                        return <FontAwesome  key={Index} name="star-half-full" color="#ffa41c" size={14}/>
                                                    else
                                                        return <FontAwesome key={Index}  name="star-o" color="#ffa41c" size={14}/>
                                                
                                        })
                                    }
                                <Text
                                    style={{
                                        marginHorizontal:5,
                                    }}>{item.rating}</Text>
                            </View>
                            <Text>${item.money}</Text>
                        </View>
                    </View> 
                </TouchableOpacity>
            )
        else
            if (item.brand===brand)
                return(
                    <TouchableOpacity key={index} onPress={()=>{navigation.navigate('ProductDetailScreen',item.id)}}>
                    <View
                            style={{
                                flexDirection:'row',
                                justifyContent:'flex-start',
                                alignItems:'center',
                                marginVertical:10,
                                borderWidth:0.2,
                                borderRadius:10,
                                paddingVertical:10,
                            }}>
                            <Image source={{uri:item.image}}
                                style={{
                                    width:200,
                                    height:100,
                                    resizeMode:'contain',
                                }}/>
                            <View
                                style={{
                                    width:170,
                                }}>
                                <Text>{item.name}</Text>
                                {/*Rating */}
                                <View
                                    style={{
                                        flexDirection:'row',
                                        alignItems:'center',
                                    }}>
                                    {
                                        [1,2,3,4,5].map((Item,Index)=>{
                                            if (Item<=item.rating)
                                                return <FontAwesome key={Index} name="star" color="#ffa41c" size={14}/>
                                            else
                                                if (Item>item.rating)
                                                    if (item.rating-Math.floor(item.rating)>=0.5)
                                                        return <FontAwesome  key={Index} name="star-half-full" color="#ffa41c" size={14}/>
                                                    else
                                                        return <FontAwesome key={Index}  name="star-o" color="#ffa41c" size={14}/>
                                                
                                        })
                                    }
                                    <Text
                                        style={{
                                            marginHorizontal:5,
                                        }}>{item.rating}</Text>
                                </View>
                                <Text>${item.money}</Text>
                            </View>
                        </View> 
                    </TouchableOpacity>
                )
    }
  return (
    <View
        style={{
            marginTop:15,
            flex:1,
        }}
    >
        <Text
            style={{
                marginTop:10,
                fontSize:18,
                fontWeight:'700',
                lineHeight:40,
                letterSpacing:3,
            }}>{text}</Text>
      
        
        <View
            style={{
                flex:1,
            }}
        >
            <FlatList
                data={DataProduct}
                renderItem={renderItem}
                keyExtractor={item=>item.id}
            />
        </View>
    </View>
  )
}

export default ListProduct