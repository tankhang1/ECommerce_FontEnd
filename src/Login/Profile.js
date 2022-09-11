import { View, Text,TouchableOpacity, Pressable,TextInput,Image, ScrollView, Modal ,Alert,RefreshControl} from 'react-native'
import React from 'react'
import { AntDesign ,FontAwesome5,MaterialCommunityIcons,Entypo} from '@expo/vector-icons'
import {Picker} from '@react-native-picker/picker';
import { codes } from 'country-calling-code';
import * as ImagePicker from 'expo-image-picker';
const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  
const Profile=({navigation})=>{
    const [fullName,setFullName]=React.useState('');
    const [nickName,setNickName]=React.useState('');
    const [date,setDate]=React.useState('');
    const [email,setEmail]=React.useState('');
    const [phoneNumber,setPhoneNumber]=React.useState('');
    const [gender,setGender]=React.useState('');
    const [country,setCounty]= React.useState(codes[0].isoCode2.toLowerCase());
    const [pickerCountryCode,setPickerCountryCode]= React.useState(false);
    const [refreshing, setRefreshing] = React.useState(false);
    const [numberShow,setNumberShow]= React.useState(50);
    const [profileImage,setprofileImage]= React.useState('');
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(100).then(() => [setRefreshing(false),numberShow<codes.length?(setNumberShow(numberShow+20)):(setNumberShow(codes.length))]);
  }, []);
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    setprofileImage(pickerResult);
  };

  const collectpicturefromphone=()=>{
    return(
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
          })
    )
  }
  return (
    <View
            style={{
                marginTop:10,
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
                    alignSelf:'flex-start',
                    marginVertical:10,
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
                >Fill Your Profile</Text>
            </View>
            <View
                style={{
                    width:170,
                    height:150,
                    justifyContent:'center',
                    alignItems:'center',
                }}

            >
                <View
                    style={{
                        width:150,
                        height:150,
                        justifyContent:'center',
                        alignItems:'center',
                        borderRadius:100,
                        backgroundColor:'#f5f5f8',
                    }}
                >
                    {profileImage===''?(<FontAwesome5 name="user" size={100} color="hsl(240,18%,80%)" />):(<Image source={{uri:profileImage.uri}} style={{width:'100%',height:'100%',resizeMode:'cover', borderRadius:100}}/>)}
                </View>
                    <TouchableOpacity
                        style={{
                            position:'absolute',
                            right:15,
                            bottom:0,
                        }}
                        onPress={openImagePickerAsync}
                    >
                        <MaterialCommunityIcons name="pencil-box" size={30} color="black"/>                
                    </TouchableOpacity>
            </View>
            <TextInput
                value={fullName}
                onChangeText={setFullName}
                placeholder="Full Name"
                style={{
                    width:'90%',
                    backgroundColor:'#fafafa',
                    height:50,
                    marginVertical:30,
                    paddingHorizontal:10,
                }}
            />
            <TextInput
                value={nickName}
                onChangeText={setNickName}
                placeholder="Nickname"
                style={{
                    width:'90%',
                    backgroundColor:'#fafafa',
                    height:50,
                    marginBottom:30,
                    paddingHorizontal:10,
                }}
            />
            <View
                style={{
                    width:'90%',
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'#fafafa',
                    height:50,
                    marginBottom:30,
                    paddingHorizontal:10,

                }}
            >
                <TextInput
                    value={date}
                    onChangeText={setDate}
                    placeholder="Date of Birth"
                    style={{
                        width:'90%',
                        height:50,
                    }}
                />
                <AntDesign name="calendar" size={24} color="#9e9e9e" />
            </View>
            <View
                style={{
                    width:'90%',
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'#fafafa',
                    height:50,
                    marginBottom:30,
                    paddingHorizontal:10,


                }}
            >
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email"
                    style={{
                        width:'90%',
                        height:50,
                    }}
                />
                <MaterialCommunityIcons name="email-outline" size={24} color="#9e9e9e" />            
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={pickerCountryCode}
                onRequestClose={() => {
                setPickerCountryCode(!pickerCountryCode);
            }}>
                <ScrollView
                    showsVerticalScrollIndicator={true}
                    refreshControl={
                        <RefreshControl
                          refreshing={refreshing}
                          onRefresh={onRefresh}
                        /> }   
                >
                    <View
                        style={{
                            height:'100%',
                            width:'90%',
                            alignSelf:'center',
                            borderWidth:0.5,
                            backgroundColor:'white'
                        }}
                    >
                    {
                    codes?codes.map((item,index)=>{ 
                        if (index<=numberShow)
                        return(
                            <TouchableOpacity
                                key={index}
                                onPress={()=>{[setCounty(item.isoCode2.toLowerCase()),setPickerCountryCode(!pickerCountryCode),setPhoneNumber('+'+item.countryCodes)]}}
                            >
                                <View
                                    style={{
                                        flexDirection:'row',
                                        width:'100%',
                                        height:30,
                                        alignItems:'center',
                                        paddingHorizontal:10,
                                        borderBottomWidth:0.5,
                                    }}
                                >
                                    <Image source={{uri:'https://flagcdn.com/w40/'+item.isoCode2.toLowerCase()+'.png'}}
                                        style={{
                                            width:40,
                                            height:20,
                                            resizeMode:'contain',
                                            marginRight:20,
                                        }}
                                    />
                                    <Text
                                        style={{
                                            fontSize:15,
                                        }}
                                    >{item.country} (+{item.countryCodes})</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }):null
                }
                    </View>
            </ScrollView>
            </Modal>
            <View
                style={{
                    width:'90%',
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'#fafafa',
                    height:50,
                    marginBottom:30,
                    paddingHorizontal:10,


                }}
            >   
                <TouchableOpacity onPress={()=>{[setPickerCountryCode(!pickerCountryCode),setNumberShow(50)]}}>
                    <View
                        style={{
                            flexDirection:'row',
                            justifyContent:'center',
                            alignItems:'center',
                        }}
                    >
                        <Image source={{uri:'https://flagcdn.com/w40/'+country+'.png'}}
                                style={{
                                    width:40,
                                    height:20,
                                    resizeMode:'contain',
                                }}
                            />
                        {
                            pickerCountryCode?(<Entypo name="chevron-small-up" size={24} color="silver" />):(<Entypo name="chevron-small-down" size={24} color="silver" />)
                        }
                    </View>
                </TouchableOpacity>
                <TextInput
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    placeholder="Phone Number"
                    style={{
                        width:'80%',
                        height:50,
                    }}
                    keyboardType="number-pad"
                />
            </View>
            <View
                style={{
                    width:'90%',
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'#fafafa',
                    height:50,
                    marginBottom:30,
                    paddingHorizontal:10,


                }}
            >
                <Picker
                    value={gender}
                    onValueChange={setGender}
                    style={{
                        width:'100%',
                        height:'100%',
                    }}
                >
                    <Picker.Item label='Male' value="Male"/>
                    <Picker.Item label='Female' value="Female"/>
                </Picker>           
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
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

export default Profile