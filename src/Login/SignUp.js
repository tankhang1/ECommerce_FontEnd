import { View, Text,TextInput, TouchableOpacity,Pressable,Image } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
const SignUp = ({navigation}) => {
    const [email,setEmail]= React.useState('');
    const [password,setPassword]= React.useState('');
    const [colorE,setColorE]= React.useState('silver');
    const [colorP,setColorP]= React.useState('silver');
    const [checked,setChecked]= React.useState(true);
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
                fontSize:28,
                fontWeight:'700',
                letterSpacing:1,
                marginVertical:30,
            }}
        >Create Your Account</Text>
        <View
            style={{
                width:300,
                height:50,
                borderRadius:10,
                alignItems:'center',
                justifyContent:'space-between',
                flexDirection:'row',
                paddingHorizontal:10,
                marginBottom:15,
                backgroundColor:'#fafafa',
            }}
        >
            <Ionicons name="mail" size={24} color={colorE} />
            <TextInput
                style={{
                    width:'90%',
                    marginHorizontal:10,
                    fontWeight:colorE==='black'?'700':'400',

                }}
                onChangeText={setEmail}
                value={email}
                onFocus={()=>{setColorE('black')}}
                onBlur={()=>{setColorE('silver')}}
                placeholder="Email"
            />
        </View>
        <View
            style={{
                width:300,
                height:50,
                borderRadius:10,
                alignItems:'center',
                justifyContent:'space-between',
                flexDirection:'row',
                paddingHorizontal:10,
                backgroundColor:'#fafafa',

            }}
        >
            <FontAwesome name="lock" size={24} color={colorP} />
            <TextInput
                style={{
                    width:'75%',
                    marginHorizontal:10,
                    fontWeight:colorP==='black'?'700':'400',
                }}
                onChangeText={setPassword}
                value={password}
                onFocus={()=>{setColorP('black')}}
                onBlur={()=>{setColorP('silver')}}
                secureTextEntry={checked}
                placeholder="Password"
            />
            <Pressable onPress={()=>setChecked(!checked)}
                style={{
                    marginRight:10,
                }}
            >
                <Ionicons name={checked===false?"eye":"eye-off"} size={24} color={colorP} />    
            </Pressable>
        
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
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
                >Sign Up</Text>
            </View>
        </TouchableOpacity>
        <View
            style={{
                width:'90%',
                marginTop:10,
                justifyContent:'space-between',
                alignItems:'center',
                flexDirection:'row',
                marginTop:30
            }}
        >
            <View 
                style={{
                    width:'25%',
                    borderWidth:0.2,
                    opacity:0.2
                }}
            />
            <Text
                style={{
                   
                    fontSize:15,
                    color:'#616161',
                    
                }}
            >or continue with</Text>
            <View 
                style={{
                    width:'25%',
                    borderWidth:0.2,
                    opacity:0.2
                }}
            />
        </View>
        <View
            style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
                marginTop:20,
            }}
        >
            
            <TouchableOpacity>
                <View
                    style={{
                        width:75,
                        height:50,
                        borderWidth:0.2,
                        justifyContent:'center',
                        alignItems:'center',
                        borderRadius:10,
                        borderColor:'#e1e1e1',
                        marginHorizontal:10,
                    }}
                >
                    <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png'}}
                            style={{
                                width:25,
                                height:25,
                                resizeMode:'contain',
                            }}
                        />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View
                    style={{
                        width:75,
                        height:50,
                        borderWidth:0.2,
                        justifyContent:'center',
                        alignItems:'center',
                        borderRadius:10,
                        borderColor:'#e1e1e1',
                        marginHorizontal:10,
                    }}
                >
                    <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png'}}
                            style={{
                                width:25,
                                height:25,
                                resizeMode:'contain',
                            }}
                        />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View
                    style={{
                        width:75,
                        height:50,
                        borderWidth:0.2,
                        justifyContent:'center',
                        alignItems:'center',
                        borderRadius:10,
                        borderColor:'#e1e1e1',
                        marginHorizontal:10,
                    }}
                >
                    <Image source={{uri:'https://brademar.com/wp-content/uploads/2022/05/Apple-Logo-PNG-1998-%E2%80%93-Now-2.png'}}
                            style={{
                                width:25,
                                height:25,
                                resizeMode:'cover',
                            }}
                        />
                </View>
            </TouchableOpacity>
        </View>
        <View
            style={{
                flexDirection:'row',
                marginTop:30,
                width:230,
                justifyContent:'space-between',
            }}
        >
            <Text
                style={{
                    color:'#9e9e9e',
                }}
            >Already have an account?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
                <Text
                    style={{
                        fontWeight:'700',
                    }}
                >Sign in</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default SignUp