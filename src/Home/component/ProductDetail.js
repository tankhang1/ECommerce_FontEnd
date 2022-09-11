import { View, Text,TouchableOpacity,Image, FlatList, Dimensions, Animated, ScrollView, ToastAndroid } from 'react-native'
import React from 'react'
import {AntDesign} from '@expo/vector-icons'
import DataProduct from '../../../Data/DataProduct/DataProduct'
import { FontAwesome } from '@expo/vector-icons'; 
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
const {width,height}= Dimensions.get("screen");
const ProductDetail = ({navigation,route}) => {
  console.ignoredYellowBox=true;
  let product;
  let datalistimage=[];
  const Id= route.params;
  DataProduct?DataProduct.map((item)=>{
        if (item.id===Id)
        {  
          return product=item;
        }
      }):null
  const [selectedValued, setSelectedValued] = React.useState(product.color[0]);
  if (product.color.length===1)
  {  
    product.listimage?product.listimage.map((item)=>{
      datalistimage.push(item);    
    }):null
  }
  else
  {
    product.listimage?product.listimage.map((item)=>{
      if (item.color===selectedValued)
        datalistimage.push(item);    
    }):null
  }
  const renderItem=({item})=>{
      if (product.color.length===1)
      return(
        <View
          key={item.id}
          style={{
            width:width,
            height:300,
          }}
        >
          <Image source={{uri:item.image_product}}
            style={{
              width:'100%',
              height:250,
              resizeMode:'contain',
            }}
          />
        </View>
      )
      else
        if (item.color===selectedValued)
          return(
            <View
              key={item.id}
              style={{
                width:width,
                height:300,
              }}
            >
              <Image source={{uri:item.image_product}}
                style={{
                  width:'100%',
                  height:250,
                  resizeMode:'contain',
                }}
              />
            </View>
          )
  }
  const addToCart = async (id) => {
    let itemArray = await AsyncStorage.getItem('cartItems');
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      array.push(id);

      //JSON.stringify là chuyển { x: 5, y: 6 } thành '{"x":5,"y":6}' để lưu lại
      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        ToastAndroid.show(
          'Item Added Successfully to cart',
          ToastAndroid.SHORT,
        );
        navigation.navigate('Home');
      } catch (error) {
        return error;
      }
    } else {
      let array = [];
      array.push(id);
      console.log(array)

      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        ToastAndroid.show(
          'Item Added Successfully to cart',
          ToastAndroid.SHORT,
        );
        navigation.navigate('Home');
      } catch (error) {
        return error;
      }
    }
  };
  const [quality,setQuality]= React.useState(1);
  const scrollX= new Animated.Value(0);
  const position= Animated.divide(scrollX,width);
  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
      style={{
        //paddingVertical:25,
        paddingHorizontal:10,
        backgroundColor:'white',
        flex:1,
      }}
    >
      <View
        style={{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            paddingTop:30,
        }}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <AntDesign name="left" size={35} color="#b0b0b0" />
        </TouchableOpacity>
        <Image source={require('../image/amazonlogo.png')}
        style={{
            width:126,
            height:62,
            resizeMode:'contain',
        }}
        />     
      </View>
      <View>
        <FlatList
          data={datalistimage}
          renderItem={renderItem}
          //keyExtractor={item=>item.id}
          horizontal
          snapToAlignment='center'
          snapToInterval={width}
          showsHorizontalScrollIndicator={false}
          decelerationRate={0.8}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset:{x:scrollX}}}],

            {useNativeDriver:false}
          )}/>
          <View
            style={{
              width: '100%',
              position:'absolute',
              bottom:0,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16,
              marginTop: 32,
            }}>
            {datalistimage?datalistimage.map((data, index) => {
                  let opacity = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0.2, 1, 0.2],
                    extrapolate: 'clamp',
                  });
                  return (
                    <Animated.View
                      key={data.id}
                      style={{
                        width: 10,
                        height: 10,
                        backgroundColor: 'black',
                        opacity,
                        marginHorizontal: 4,
                        borderRadius: 100,
                      }}></Animated.View>
                  );
                })
              : null}
          </View>
      </View>
      <View>
        <View
          style={{
            justifyContent:'center',
            alignItems:'center',
          }}
        >
          <Text
            style={{
              fontSize:18,
              fontWeight:'700',
              lineHeight:40,
              letterSpacing:3,
            }}>{product.name}</Text>
          <View
            style={{
                flexDirection:'row',
                alignItems:'center',
            }}>
            {
              [1,2,3,4,5].map((Item,Index)=>{
                  if (Item<=product.rating)
                      return <FontAwesome key={Index} name="star" color="#ffa41c" size={18}/>
                  else
                      if (Item>product.rating)
                          if (product.rating-Math.floor(product.rating)>=0.5)
                              return <FontAwesome  key={Index} name="star-half-full" color="#ffa41c" size={18}/>
                          else
                              return <FontAwesome key={Index}  name="star-o" color="#ffa41c" size={18}/>
              })
            }
            <Text
                style={{
                    marginHorizontal:5,
                    fontSize:18,
                }}>{product.rating}</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor:'silver',
            borderWidth:1,
            opacity:0.5
          }}
        >
          <Picker
            selectedValue={selectedValued}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValued(itemValue)
            }>
            {
              product.color?product.color.map((item,index)=>{
                return <Picker.Item key={index} label={item} value={item}/>
              }):null
            }
          </Picker>
        </View>
        
        <View
          style={{
            flexDirection:'row',
            justifyContent:'space-between',
            marginHorizontal:10,
            marginVertical:10,
          }}
        >
          <View>
            <Text
              style={{
                fontSize:15,
                fontWeight:'700',
              }}
            >Brand:</Text>
            <Text
              style={{
                fontSize:15,
                fontWeight:'700',
              }}
            >Model_Number:</Text>
            <Text
              style={{
                fontSize:15,
                fontWeight:'700',
              }}
            >Color:</Text>
            <Text
              style={{
                fontSize:15,
                fontWeight:'700',
              }}
            >Money:</Text>
          </View>
          <View>
          <Text
              style={{
                fontSize:15,
                fontWeight:'700',
              }}
            >{product.brand}</Text>          
          <Text
              style={{
                fontSize:15,
                fontWeight:'700',
              }}
            >{product.model_number}</Text>          
          <Text
              style={{
                fontSize:15,
                fontWeight:'700',
              }}
            >{selectedValued}</Text>          
          <Text
              style={{
                fontSize:15,
                fontWeight:'700',
              }}
            >${product.money}</Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize:18,
              fontWeight:'500',
            }}
          >About this item</Text>
          {
            product.about_item?product.about_item.map((item,index)=>{
              return(
                <Text
                  key={index}
                  style={{
                    fontSize:15,

                  }}
                >{'\u2B24'} {item}</Text>
              )
            }):null
          }
        </View>
      </View>
      <View
          style={{
            backgroundColor:'silver',
            borderWidth:1,
            width:'30%',
            borderRadius:30,
            
            opacity:0.5
          }}
        >
          <Picker
            selectedValue={quality}
            onValueChange={(itemValue, itemIndex) =>
              setQuality(itemValue)}
            style={{
              marginLeft:30,
            }}
            >
              <Picker.Item value={1} label='1'/>
              <Picker.Item value={2} label='2'/>
              <Picker.Item value={3} label='3'/>
              <Picker.Item value={4} label='4'/>
              <Picker.Item value={5} label='5'/>

          </Picker>
        </View>
        {/* addToCart({Name:product.name, Number:quality, Image:product.image, Money:product.money,color:selectedValued}) */}
      <TouchableOpacity onPress={()=>{addToCart({Name:product.name, Number:quality, Image:product.image, Money:product.money,color:selectedValued})}}>
        <View
          style={{
            width:'70%',
            height:50,
            alignSelf:'center',
            justifyContent:'center',
            alignItems:'center',
            marginVertical:10,
            borderRadius:100,
            backgroundColor:'hsl(50,100%,54%)'
          }}
        >
          <Text
            style={{
              fontSize:15,
            }}
          >Add to Cart</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            width:'70%',
            height:50,
            alignSelf:'center',
            justifyContent:'center',
            alignItems:'center',
            marginVertical:10,
            borderRadius:100,
            backgroundColor:'hsl(36,100%,55%)'
          }}
        >
          <Text
            style={{
              fontSize:15,
            }}
          >Buy Now</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default ProductDetail