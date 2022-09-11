import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
const ForgotPassword = ({navigation}) => {
  return (
    <View
        style={{
            marginTop:32,
            marginHorizontal:10,
        }}
    >
        <View
            style={{
                flexDirection:'row',
                alignItems:'center',
            }}
        >
            <TouchableOpacity>
                <AntDesign name="arrowleft" size={28} color="black" />
            </TouchableOpacity>
            <Text
                style={{
                    fontSize:18,
                    fontWeight:'700',
                    letterSpacing:0.5,
                    marginLeft:20,
                }}
            >Forgot Password</Text>
        </View>
        <Image
        source={{uri:'https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1123.jpg'}}
        style={{
            width:'100%',
            height:400,
            resizeMode:'contain',
        }}
      />
        <Text
            style={{
                fontSize:17,
                fontWeight:'600',
                color:'#212121',
                letterSpacing:0.5,
                marginBottom:30,
            
            }}
        >Select which contact details should we use to reset your password</Text>
        <TouchableOpacity>
            <View
                style={{
                    width:'100%',
                    height:100,
                    borderWidth:1,
                    borderRadius:30,
                    justifyContent:'center',
                    alignItems:'center',
                    flexDirection:'row',
                    marginBottom:20,

                }}
            >
                <View
                    style={{
                        width:75,
                        height:75,
                        borderRadius:100,
                        backgroundColor:'#ececec',
                        justifyContent:'center',
                        alignItems:'center',
                    }}
                >
                    <AntDesign name="message1" size={30} color="black" />
                </View>
                <View
                    style={{
                        width:250,
                        marginLeft:20,
                    }}
                >
                    <Text
                        style={{
                            color:'#757575',
                            fontWeight:'500'
                        }}
                    >via SMS:</Text>
                    <Text
                        style={{
                            fontWeight:'700'
                        }}
                    >+1 111*******99</Text>
                </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View
                style={{
                    width:'100%',
                    height:100,
                    borderWidth:1,
                    borderRadius:30,
                    justifyContent:'center',
                    alignItems:'center',
                    flexDirection:'row',
                    marginBottom:20,
                }}
            >
                <View
                    style={{
                        width:75,
                        height:75,
                        borderRadius:100,
                        backgroundColor:'#ececec',
                        justifyContent:'center',
                        alignItems:'center',
                    }}
                >
                    <MaterialIcons name="email" size={30} color="black" />                
                </View>
                <View
                    style={{
                        width:250,
                        marginLeft:20,
                    }}
                >
                    <Text
                        style={{
                            color:'#757575',
                            fontWeight:'500'
                        }}
                    >via Email:</Text>
                    <Text
                        style={{
                            fontWeight:'700'
                        }}
                    >and****ley@yourdomain.com</Text>
                </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('VerifyCode')}>
            <View
                style={{
                    width:'100%',
                    height:50,
                    backgroundColor:'black',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:100,
                }}
            >
                <Text
                    style={{
                        color:'white',
                    }}
                >Continue</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default ForgotPassword