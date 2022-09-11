import { View, Text,TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import { FontAwesome,FontAwesome5 ,MaterialCommunityIcons,AntDesign} from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';

const User = ({navigation}) => {
  const [profileImage,setprofileImage]= React.useState('');

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    setprofileImage(pickerResult);
  };

  return (
    <View
      style={{
        flex:1,
        marginTop:30,
        marginHorizontal:10,
        justifyContent:'flex-start',
        alignItems:'center',
      }}
    >
      <View
        style={{
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'flex-start',
          width:'100%',
          marginBottom:15,
        }}
      >
        <FontAwesome name="amazon" size={50} color="black" />
        <Text
          style={{
            fontSize:30,
            fontWeight:'800',
            letterSpacing:0.4,
            marginHorizontal:10,
          }}
        >Profile</Text>
      </View>
      <View
        style={{
            width:100,
            height:100,
            justifyContent:'center',
            alignItems:'center',
        }}

    >
        <View
            style={{
                width:100,
                height:100,
                justifyContent:'center',
                alignItems:'center',
                borderRadius:100,
                backgroundColor:'#f5f5f8',
            }}
        >
            {profileImage===''?(<FontAwesome5 name="user" size={50} color="hsl(240,18%,80%)" />):(<Image source={{uri:profileImage.uri}} style={{width:'100%',height:'100%',resizeMode:'cover', borderRadius:100}}/>)}
        </View>
            <TouchableOpacity
                style={{
                    position:'absolute',
                    right:0,
                    bottom:0,
                }}
                onPress={openImagePickerAsync}
            >
                <MaterialCommunityIcons name="pencil-box" size={25} color="black"/>                
            </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize:18,
          fontWeight:'700',
          letterSpacing:0.5,
          marginVertical:15,
        }}
      >Andrew Ainsley</Text>
      <Text
        style={{
          fontSize:16,
          fontWeight:'500',
          letterSpacing:0.5,
          marginBottom:10,
        }}>+1 111 467 378 399</Text>
      <View
        style={{
          borderTopWidth:0.5,
          width:'100%',
          height:35,
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
        }}
      >
        <View
          style={{
            flexDirection:'row',
          }}
        >
        <AntDesign name="user" size={24} color="black" 
          style={{
            marginHorizontal:10,
          }}
        />
        <Text
          style={{
            fontSize:17,
            fontWeight:'550',
          }}>Edit Profile</Text>
        </View>
        
        <TouchableOpacity onPress={()=>navigation.navigate('EditProfile')}>
          <AntDesign name="right" size={20} color="black" 
            style={{
              marginRight:10,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderTopWidth:0.5,
          width:'100%',
          height:35,
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
        }}
      >
        <View
          style={{
            flexDirection:'row',
          }}
        >
        <Image source={{uri:'https://img.icons8.com/ios/50/000000/address--v1.png'}}
          style={{
            width:24,
            height:24,
            resizeMode:'contain',
            marginHorizontal:10,
          }}
        />
        <Text
          style={{
            fontSize:17,
            fontWeight:'550',
          }}>Address</Text>
        </View>
        
        <TouchableOpacity onPress={()=>navigation.navigate('AddressScreen')}>
          <AntDesign name="right" size={20} color="black" 
            style={{
              marginRight:10,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderTopWidth:0.5,
          width:'100%',
          height:35,
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
        }}
      >
        <View
          style={{
            flexDirection:'row',
          }}
        >
        <Image source={{uri:'https://img.icons8.com/pastel-glyph/64/000000/appointment-reminders.png'}}
          style={{
            width:24,
            height:24,
            resizeMode:'contain',
            marginHorizontal:10,
          }}
        />
        <Text
          style={{
            fontSize:17,
            fontWeight:'550',
          }}>Notification</Text>
        </View>
        
        <TouchableOpacity>
          <AntDesign name="right" size={20} color="black" 
            style={{
              marginRight:10,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderTopWidth:0.5,
          width:'100%',
          height:35,
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
        }}
      >
        <View
          style={{
            flexDirection:'row',
          }}
        >
        <Image source={{uri:'https://img.icons8.com/ios/50/000000/keyhole-shield.png'}}
          style={{
            width:24,
            height:24,
            resizeMode:'contain',
            marginHorizontal:10,
          }}
        />
        <Text
          style={{
            fontSize:17,
            fontWeight:'550',
          }}>Security</Text>
        </View>
        
        <TouchableOpacity>
          <AntDesign name="right" size={20} color="black" 
            style={{
              marginRight:10,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderTopWidth:0.5,
          width:'100%',
          height:35,
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
        }}
      >
        <View
          style={{
            flexDirection:'row',
          }}
        >
        <Image source={{uri:'https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/000000/external-payment-bill-and-payment-method-xnimrodx-lineal-xnimrodx-4.png'}}
          style={{
            width:24,
            height:24,
            resizeMode:'contain',
            marginHorizontal:10,
          }}
        />
        <Text
          style={{
            fontSize:17,
            fontWeight:'550',
          }}>Payment</Text>
        </View>
        
        <TouchableOpacity>
          <AntDesign name="right" size={20} color="black" 
            style={{
              marginRight:10,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderTopWidth:0.5,
          width:'100%',
          height:35,
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
        }}
      >
        <View
          style={{
            flexDirection:'row',
          }}
        >
        <Image source={{uri:'https://img.icons8.com/ios/50/000000/language.png'}}
          style={{
            width:24,
            height:24,
            resizeMode:'contain',
            marginHorizontal:10,
          }}
        />
        <Text
          style={{
            fontSize:17,
            fontWeight:'550',
          }}>Language</Text>
        </View>
        
        <TouchableOpacity>
          <AntDesign name="right" size={20} color="black" 
            style={{
              marginRight:10,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderTopWidth:0.5,
          width:'100%',
          height:35,
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
        }}
      >
        <View
          style={{
            flexDirection:'row',
          }}
        >
        <Image source={{uri:'https://img.icons8.com/ios/50/000000/privacy.png'}}
          style={{
            width:24,
            height:24,
            resizeMode:'contain',
            marginHorizontal:10,
          }}
        />
        <Text
          style={{
            fontSize:17,
            fontWeight:'550',
          }}>Privacy Policy</Text>
        </View>
        
        <TouchableOpacity>
          <AntDesign name="right" size={20} color="black" 
            style={{
              marginRight:10,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderTopWidth:0.5,
          width:'100%',
          height:35,
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
        }}
      >
        <View
          style={{
            flexDirection:'row',
          }}
        >
        <Image source={require('./icons8-logout-50.png')}
          style={{
            width:24,
            height:24,
            resizeMode:'contain',
            marginHorizontal:10,
          
          }}
        />
        <Text
          style={{
            fontSize:17,
            fontWeight:'550',
            color:'red',
          }}>Logout</Text>
        </View>
        
        <TouchableOpacity>
          <AntDesign name="right" size={20} color="black" 
            style={{
              marginRight:10,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default User