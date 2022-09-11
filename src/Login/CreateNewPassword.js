import { View, Text ,TouchableOpacity,Image,TextInput,Pressable,KeyboardAvoidingView, ScrollView,Modal,Alert,Animated,Easing} from 'react-native'
import React from 'react'
import { AntDesign,FontAwesome ,Ionicons} from '@expo/vector-icons'
import Lottie from 'lottie-react-native';
const CreateNewPassword = () => {
    const [password,setPassword]= React.useState('');
    const [passwordC,setPasswordC]= React.useState('');

    const [color,setColor]= React.useState('silver');
    const [colorC,setColorC]= React.useState('silver');
    const [modalVisible, setModalVisible] = React.useState(false);
    const [checked,setChecked]= React.useState(true);
    const [checkedC,setCheckedC]= React.useState(true);
    // const enRollSuccessfull=()=>{
    //     return(
            
    //     )
    // }

    const animationProgress = React.useRef(new Animated.Value(0))
    React.useEffect(() => {
        Animated.timing(animationProgress.current, {
          toValue: 1,
          duration: 6000,
          easing: Easing.linear,
          useNativeDriver: false
        }).start(({ finished }) => {console.log()});
      }, [])
    return (
        <ScrollView
            style={{
                flex:1,
                opacity:modalVisible===true?0.3:1,
                backgroundColor:modalVisible===true?"rgba(0,0,0,0.8)":"white",
            }}
        >
        <KeyboardAvoidingView
            behavior='position'
            style={{
                flex:1,

            }}
            keyboardVerticalOffset={10}        
        >
            <View
                style={{
                    marginTop:32,
                    marginHorizontal:10,
                    flex:1,
                    justifyContent:'flex-start',
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
                        fontSize:20,
                        fontWeight:'700',
                        letterSpacing:0.5,
                        marginLeft:20,
                    }}
                >Create New Password</Text>
            
            </View>
            <View
                style={{
                // flex:1,
                    width:'100%',
                    height:400,
                }}
            >
                <Image
                    source={require('./crayon-1029.png')}
                    style={{
                        width:'100%',
                        height:'100%',
                        resizeMode:'contain',
                        
                    }}
                />

            </View>
            
            <View>
                <Text
                    style={{
        
                        fontSize:18,
                        fontWeight:'450',
                    }}
                >Create Your New Password</Text>
            </View>
            <View
                style={{
                    width:320,
                    height:50,
                    marginVertical:15,
                    borderRadius:10,
                    backgroundColor:'#fafafa',
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    alignSelf:'center',
                }}
            >
                <FontAwesome name="lock" size={24} color={color} />
                <TextInput
                    style={{
                        width:'75%',
                        marginHorizontal:10,
                        fontWeight:color==='black'?'700':'400',
                    }}
                    onChangeText={setPassword}
                    value={password}
                    onFocus={()=>{setColor('black')}}
                    onBlur={()=>{setColor('silver')}}
                    secureTextEntry={checked}
                    placeholder="Password"
                />
                <Pressable onPress={()=>setChecked(!checked)}
                    style={{
                        marginRight:10,
                    }}
                >
                    <Ionicons name={checked===false?"eye":"eye-off"} size={24} color={color} />    
                </Pressable>
            </View>
            <View
                style={{
                    width:320,
                    height:50,
                    marginVertical:15,
                    borderRadius:10,
                    backgroundColor:'#fafafa',
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    alignSelf:'center',
                }}
            >
                <FontAwesome name="lock" size={24} color={colorC} />
                <TextInput
                    style={{
                        width:'75%',
                        marginHorizontal:10,
                        fontWeight:colorC==='black'?'700':'400',
                    }}
                    onChangeText={setPasswordC}
                    value={passwordC}
                    onFocus={()=>{setColorC('black')}}
                    onBlur={()=>{setColorC('silver')}}
                    secureTextEntry={checkedC}
                    placeholder="Password Again"
                />
                <Pressable onPress={()=>setCheckedC(!checkedC)}
                    style={{
                        marginRight:10,
                    }}
                >
                    <Ionicons name={checkedC===false?"eye":"eye-off"} size={24} color={colorC} />    
                </Pressable>
            </View>
            
            <Modal  
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
                progress={animationProgress.current}
            >   
                <Pressable 
                    onPressIn={()=>setModalVisible(!modalVisible)}
                    style={{flex:1,
                        justifyContent:'center',
                        alignItems:'center',
                    }}
                >
                        <View
                        style={{
                            width:'80%',
                            height:400,
                            backgroundColor:'white',
                            justifyContent:'center',
                            alignItems:'center',
                            alignSelf:'center',
                            borderRadius:30,
                        }}
                    >
                        <Lottie
                            source={require('./83396-confetti.json')}
                            autoPlay
                            loop={false}
                            style={{
                                width:100,
                                height:100,
                            }}
                        />    
                        <Text
                            style={{
                                fontSize:20,
                                fontWeight:'700',
                                letterSpacing:1,
                                lineHeight:40,
                            }}
                        >Congratulations</Text>
                        <Text
                            style={{
                                fontSize:16,
                                textAlign:'center',
                                fontWeight:'450'
                            }}
                        >Your account is ready to use.You will be redirected to the Home page in a few seconds..</Text>
                        <Lottie
                            source={require('./98891-insider-loading.json')}
                            autoPlay
                            loop={false}
                            style={{
                                width:100,
                                height:100,
                                marginTop:15,
                            }}
                        /> 
                    </View>
                </Pressable>
            </Modal>
            
            <TouchableOpacity onPress={()=>{setModalVisible(!modalVisible)}}>
                    <View
                        style={{
                            width:300,
                            height:50,
                            backgroundColor:'black',
                            justifyContent:'center',
                            alignItems:'center',
                            borderRadius:100,
                            position:'relative',
                            alignSelf:'center',
                            marginTop:40
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
        </KeyboardAvoidingView>
        </ScrollView>
  )
}

export default CreateNewPassword