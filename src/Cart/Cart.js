import { View, Text,TouchableOpacity,Image,FlatList,Alert } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AntDesign } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
//import SQLite from 'react-native-sqlite-storage'
// const db = SQLite.openDatabase(
//   {
//     name:'HistoryCart',
//     location:'default',
//   },
//   ()=>{},
//   (error)=>{console.log(error)}
// )
const Cart = ({navigation}) => {
  const [product,setProduct]= React.useState();
  let total=0;
  React.useEffect(()=>{
    const unsubcribe= navigation.addListener('focus',()=>{
      getDataFromAsnc();
    });
    return unsubcribe;
  },[navigation])
  const getDataFromAsnc=async()=>{
    let array= await AsyncStorage.getItem('cartItems');
    array=JSON.parse(array);
    setProduct(array);
  }
  product?product.map((item,index)=>{
    return total=total+item.Money*item.Number;
  }):null
  const onDeleteProduct=async(index)=>{
    Alert.alert(
      "Warning",
      "Are you sure delete product?",
      [
        {
          text:'No',
          onPress:()=>{}
        },
        {
          text:'Yes',
          onPress:()=>{
            product.splice(index,1);
            try {
              AsyncStorage.setItem('cartItems',JSON.stringify(product));
              getDataFromAsnc();
            } catch (error) {
              return error;
            }
          }
        },
      ]
    
    );
  }
  
  // const createTable=()=>{
  //   db.transaction((tx)=>{
  //     tx.executeSql(
  //       "CREAT TABLE IF NOT EXISTS"
  //       +"Users"
  //       +"(ID INTERGER PRIMARY AUTOINCREMENT, Name TEXT, Age INTEGER"
  //     )
  //   })
  // }
  // let name="Khang";
  // let age=18;
  // const onCheckOut=async()=>{

  //   try {
  //     await db.transaction((tx)=>{
  //       tx.executeSql(
  //         "INSERT INTO Users (Name,Age) VALUES (?,?)"
  //         [name,age]
  //       )
  //     })
  //   } catch (error) {
      
  //   }
  // }
  // const AlertSQLite=()=>{
  //   try {
  //     db.transaction((tx)=>{
  //       tx.executeSql(
  //         "SELECT Name, Age FROM Users",
  //         [],
  //         (tx,results)=>{
  //           var len= results.rows.length;
  //           if (len>0)
  //           {
  //             var useName= results.rows.item(0).Name;
  //             var useAge= results.rows.item(0).Age;
  //             console.log(useName);
  //           }
  //         }
  //       )
  //     })
  //   } catch (error) {
      
  //   }
  // }
  const onCheckOut=async()=>{
    AsyncStorage.clear();
    navigation.goBack();
  }
  const renderItem=({item,index})=>{
   
    return(
      <View
        key={index}
        style={{
          width:'100%',
          height:100,
          marginVertical:5,
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center'
        }}
      >
        <Image source={{uri:item.Image}}
          style={{
            height:100,
            width:100,
            resizeMode:'stretch',
          }}
        />
        <View
          style={{
            width:200
          }}
        >
          <Text
            style={{
              fontSize:15,
              fontWeight:'600',

            }}
          >Name{item.Name}</Text>
          <Text
            style={{
              fontSize:15,
              fontWeight:'600',
              
            }}
          >Money: ${item.Money}</Text>
          <Text
            style={{
              fontSize:15,
              fontWeight:'600',
              
            }}
          >Quality: {item.Number}</Text>
          <Text
            style={{
              fontSize:15,
              fontWeight:'600',
              
            }}
          >Color: {item.color}</Text>
          <TouchableOpacity onPress={(index)=>onDeleteProduct(index)}>
            <View
              style={{
                width:50,
                height:25,
                position:'absolute',
                right:10,bottom:10,
                justifyContent:'center',
                alignItems:'center',
                borderRadius:30,
                backgroundColor:'#cdd0d4'
              }}
            >
              <MaterialCommunityIcons name="delete-outline" size={24} color="black"/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  return (
    <View
      style={{
        paddingTop:30,
        paddingHorizontal:10,
        flex:1,
        backgroundColor:'white',
      }}
    >
      <View
        style={{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
        }}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <AntDesign name="left" size={35} color="#b0b0b0" />
        </TouchableOpacity>
        <Image source={require('../Home/image/amazonlogo.png')}
        style={{
            width:126,
            height:62,
            resizeMode:'contain',
        }}
        />     
      </View>
      <View
        style={{
          flex:1,
        }}
      >
      <FlatList
        data={product}
        renderItem={renderItem}
        keyExtractor={item=>item.id}
      />
      <Text
        style={{
          fontSize:18,
          fontWeight:'400',
        }}
      >Total: ${total.toFixed(2)}</Text>
      <TouchableOpacity onPress={onCheckOut}>
        <View
          style={{
            width:'80%',
            alignSelf:'center',
            justifyContent:'center',
            alignItems:'center',
            height:50,
            borderRadius:30,
            backgroundColor:'#ffa41c',
            marginTop:20,
          }}
        >
          <Text
            style={{
              fontSize:18,
              fontWeight:'400',
              color:'white',
            }}
          >CheckOut</Text>
        </View>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Cart