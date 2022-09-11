import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'; 
const Login = ({navigation}) => {
    return (
    <View
        style={{
            flex:1,
            marginTop:32,
            marginHorizontal:10,
            justifyContent:'center',
            alignItems:'center',
        }}
    >
        <FontAwesome5 name="amazon" size={100} color="black" />
        <Text
            style={{
                fontSize:30,
                fontWeight:'800',
                letterSpacing:1,
                marginVertical:30,
            }}
        >Let's you in</Text>
        <TouchableOpacity>
            <View
                style={{
                    borderWidth:1,
                    width:250,
                    height:50,
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:30,
                    borderColor:'#eeeeee',
                    flexDirection:'row',
                    marginBottom:15,
                }}
            >
                <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png'}}
                    style={{
                        width:25,
                        height:25,
                        resizeMode:'contain',
                        marginHorizontal:10,
                    }}
                />
                <Text
                    style={{
                        fontSize:14,
                        fontWeight:'500'
                    }}
                >Continue with Facebook</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View
                style={{
                    borderWidth:1,
                    width:250,
                    height:50,
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:30,
                    borderColor:'#eeeeee',
                    flexDirection:'row',
                    marginBottom:15,
                }}
            >
                <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png'}}
                    style={{
                        width:25,
                        height:25,
                        resizeMode:'contain',
                        marginHorizontal:10,
                    }}
                />
                <Text
                    style={{
                        fontSize:14,
                        fontWeight:'500'
                    }}
                >Continue with Google</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View
                style={{
                    borderWidth:1,
                    width:250,
                    height:50,
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:30,
                    borderColor:'#eeeeee',
                    flexDirection:'row',
                    marginBottom:15,
                }}
            >
                <Image source={{uri:'https://brademar.com/wp-content/uploads/2022/05/Apple-Logo-PNG-1998-%E2%80%93-Now-2.png'}}
                    style={{
                        width:25,
                        height:25,
                        resizeMode:'cover',
                        marginHorizontal:10,
                    }}
                />
                <Text
                    style={{
                        fontSize:14,
                        fontWeight:'500'
                    }}
                >Continue with Apple</Text>
            </View>
        </TouchableOpacity>
        <View
            style={{
                width:'90%',
                marginTop:10,
                justifyContent:'space-between',
                alignItems:'center',
                flexDirection:'row',
                
            }}
        >
            <View 
                style={{
                    width:'40%',
                    borderWidth:0.2,
                    opacity:0.2
                }}
            />
            <Text
                style={{
                   
                    fontSize:15,
                    color:'#616161',
                    
                }}
            >or</Text>
            <View 
                style={{
                    width:'40%',
                    borderWidth:0.2,
                    opacity:0.2
                }}
            />
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
            <View
                style={{
                    borderWidth:1,
                    width:250,
                    height:50,
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:30,
                    marginTop:40,
                    backgroundColor:'#101010',
                }}
            >
                <Text
                    style={{
                        color:'white',
                        fontSize:15,
                        fontWeight:'700',
                    }}
                >Sign in with password</Text>
            </View>
        </TouchableOpacity>
        <View
            style={{
                flexDirection:'row',
                marginTop:30,
                width:200,
                justifyContent:'space-between',
            }}
        >
            <Text
                style={{
                    color:'#9e9e9e',
                }}
            >Don't have an account?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
                <Text
                    style={{
                        fontWeight:'700',
                    }}
                >Sign up</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Login