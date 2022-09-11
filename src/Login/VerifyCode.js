import { View, Text,TouchableOpacity,TextInput, Keyboard,LogBox } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import CountDown from 'react-native-countdown-component';
import { FA5Style } from '@expo/vector-icons/build/FontAwesome5';
const VerifyCode = () => {
    const pin1Ref= React.useRef(null);
    const pin2Ref= React.useRef(null);
    const pin3Ref= React.useRef(null);
    const pin4Ref= React.useRef(null);
    const [sendCode,setSendCode]= React.useState(false);
    const [pin1,setPin1]= React.useState('');
    const [pin2,setPin2]= React.useState('');
    const [pin3,setPin3]= React.useState('');
    const [pin4,setPin4]= React.useState('');
    // if (pin1!==''&& pin2!=='' && pin3!=='' && pin4!=='')
    //     Keyboard.dismiss();
    LogBox.ignoreLogs(['EventEmitter.removeListener']);
    return (
        <View
            style={{
                marginTop:32,
                marginHorizontal:10,
                flex:1,
                justifyContent:'center',
                alignItems:'center',
            }}
        >
            <View
                style={{
                    flexDirection:'row',
                    alignItems:'center',
                    position:'absolute',
                    top:0,
                    left:0,
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
                >Forgot Password</Text>
            </View>
            <View
                style={{
                    justifyContent:'center',
                    alignItems:'center',
                }}
            >
                <Text>Code has been sen to +1 111*********99</Text>
                <View
                    style={{
                        flexDirection:'row',
                        marginTop:30,
                    }}
                >
                    <View
                        style={{
                            width:75,
                            height:50,
                            marginHorizontal:5,
                            borderRadius:20,
                            backgroundColor:'#fafafa',
                            justifyContent:'center',
                            alignItems:'center',
                        }}
                    >
                        <TextInput
                            ref={pin1Ref}
                            value={pin1}
                            onChangeText={(tx)=>{
                                setPin1(tx); 
                                if (pin2==='' && tx!=='')
                                    pin2Ref.current.focus();
                            }}
                            maxLength={1}
                            style={{
                                fontSize:15,
                                fontWeight:'700'
                            }}
                            selectionColor='black'
                            keyboardType='number-pad'
                        />
                    </View>
                    <View
                        style={{
                            width:75,
                            height:50,
                            marginHorizontal:5,
                            borderRadius:20,
                            backgroundColor:'#fafafa',
                            justifyContent:'center',
                            alignItems:'center',
                        }}
                    >
                        <TextInput
                            ref={pin2Ref}
                            value={pin2}
                            onChangeText={(tx)=>{
                                setPin2(tx);
                                if (tx!=='' && pin3==='')
                                    pin3Ref.current.focus();
                                else
                                    if (tx=='')
                                        pin1Ref.current.focus();

                                // if (pin3==='' && tx!=='')
                                //     pin3Ref.current.focus();
                                // if (tx==='')
                                //     pin1Ref.current.focus();
                            }}
                            maxLength={1}
                            style={{
                                fontSize:15,
                                fontWeight:'700'
                            }}
                            selectionColor='black'
                            keyboardType='number-pad'
                        />
                    </View>
                    <View
                        style={{   
                            width:75,
                            height:50,
                            marginHorizontal:5,
                            borderRadius:20,
                            backgroundColor:'#fafafa',
                            justifyContent:'center',
                            alignItems:'center',
                        }}
                    >
                        <TextInput
                            ref={pin3Ref}
                            value={pin3}
                            onChangeText={(tx)=>{
                                setPin3(tx);
                                if (tx!=='' && pin4==='')
                                    pin4Ref.current.focus();
                                else
                                    if (tx==='')
                                        pin2Ref.current.focus();
                                // if (pin4==='' && tx!=='')
                                //     pin4Ref.current.focus();
                                // if (tx==='')
                                //     pin2Ref.current.focus();
                            }}
                            maxLength={1}
                            style={{
                                fontSize:15,
                                fontWeight:'700'
                            }}
                            selectionColor='black'
                            keyboardType='number-pad'
                        />
                    </View>
                    <View
                        style={{
                            width:75,
                            height:50,
                            marginHorizontal:5,
                            borderRadius:20,
                            backgroundColor:'#fafafa',
                            justifyContent:'center',
                            alignItems:'center',
                        }}
                    >
                        <TextInput
                            ref={pin4Ref}
                            value={pin4}
                            onChangeText={(tx)=>{
                                setPin4(tx);
                                if (tx==='')
                                    pin3Ref.current.focus();
                                // if (tx==='')
                                //     pin3Ref.current.focus();
                            }}
                            maxLength={1}
                            style={{
                                fontSize:15,
                                fontWeight:'700'
                            }}
                            selectionColor='black'
                            keyboardType='number-pad'
                        />
                    </View>
                </View>
                
            </View>
            <View>     
                {
                   sendCode===false?(
                    <View
                        style={{
                            marginTop:30,
                            flexDirection:'row',
                            justifyContent:'center',
                            alignItems:'center',
                        }}
                    >
                        <Text>Resend code in</Text>
                        <CountDown
                            until={59}
                            size={15}
                            onFinish={()=>setSendCode(!sendCode)}
                            timeToShow={['S']}
                            digitStyle={{backgroundColor:'transparent'}}
                            timeLabels={{s:null}}
                            
                        />
                    </View>
                   ):(
                        <TouchableOpacity onPress={()=>setSendCode(!sendCode)}
                        style={{
                            marginTop:30,
                        }}>
                            <Text
                                style={{
                                    textDecorationLine:'underline'
                                }}
                            >Resend</Text>
                        </TouchableOpacity>                        
                    )
                }
                
            </View>
            <TouchableOpacity>
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
                        bottom:-250,
                    }}
                >
                    <Text
                        style={{
                            color:'white',
                        }}
                    >Verify</Text>
                </View>
            </TouchableOpacity>
        </View>
  )
}

export default VerifyCode