import { View, Text, TextInput, TouchableOpacity, FlatList,Image } from 'react-native'
import React from 'react'
import { EvilIcons,MaterialCommunityIcons ,Feather,FontAwesome} from '@expo/vector-icons';
import DataProduct from '../../Data/DataProduct/DataProduct';
const Search = ({navigation}) => {
  const [searchProduct,setSearchProduct]=React.useState('');
  let tmp=searchProduct;
  if (tmp.length>=0)
  {
    tmp=tmp.charAt(0).toUpperCase()+tmp.slice(1);
  }
  let number=0;
  for (let index = 0; index < DataProduct.length; index++) {
    if (DataProduct[index].name.indexOf(tmp)>-1)
      number++;
  }
  const renderItem=({item,index})=>{
    if (item.name.indexOf(tmp)>=0)
    {
      return(
        <TouchableOpacity key={index} onPress={()=>{navigation.navigate('ProductDetailScreen',item.id)}}>
        <View
            key={index}
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
  }
  return (
    <View
      style={{
        flex:1,
        paddingTop:32,
        paddingHorizontal:10,
        backgroundColor:'white',
      }}
    >
      <View
        style={{
          flexDirection:'row',
          width:'100%',
          backgroundColor:'#f5f5f5',
          alignItems:'center',
          paddingHorizontal:20,
          borderRadius:10,
        }}
      >
        <EvilIcons name="search" size={28} color="#bdbdbd" />
        <TextInput
          value={searchProduct}
          onChangeText={setSearchProduct}
          style={{
            width:'85%',
            height:45,
            paddingHorizontal:10,
          }}
        />
        {
          searchProduct===''?<MaterialCommunityIcons name="dots-vertical" size={24} color="#bdbdbd" />:(
            <TouchableOpacity onPress={()=>setSearchProduct('')}>
              <Feather name="x-circle" size={24} color="#bdbdbd" />
            </TouchableOpacity>
          )
        }
      </View>
      {searchProduct===''?null:(
        <View
        style={{
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
        }}
      >
      <Text
        style={{
          fontSize:18,
          lineHeight:40,
          fontWeight:'700',
        }}
      >Results for "{searchProduct}"</Text>
      <Text
        style={{
          fontSize:18,
          lineHeight:40,
          fontWeight:'700',
        }}
      >{number} found</Text>
      
      </View>)}
      {
        (searchProduct!==''&&number===0)?(
          <View
            style={{
              justifyContent:'center',
              alignItems:'center',
              flex:1,
              width:'70%',
              alignSelf:'center',
            }}
          > 
            <Image source={{uri:'https://img.icons8.com/pastel-glyph/64/000000/file-not-found--v1.png'}}
              style={{
                width:100,
                height:150,
                resizeMode:'contain'
              }}/>
            <Text
              style={{
                fontSize:14,
                letterSpacing:0.5,
                textAlign:'center',
                fontWeight:'100',
              }}
            >Sorry, the keyword you entered cannot be found, please check again or search with another keyword.</Text>
          </View>
          ):
          (
          <View
            style={{
              flex:1,
            }}>
          <FlatList
            data={DataProduct}
            renderItem={renderItem}/>
          </View>
        )
      }
      
    </View>
  )
}

export default Search