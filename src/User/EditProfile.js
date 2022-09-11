import { View, Text,TextInput,Modal,ScrollView,RefreshControl,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { AntDesign ,MaterialIcons,Ionicons,Entypo} from '@expo/vector-icons'; 
import {Picker} from '@react-native-picker/picker';
import { codes } from 'country-calling-code';
const EditProfile = ({navigation}) => {
    const [fullName,setFullName]=React.useState('');
    const [firstName,setFirstName]=React.useState('');
    const [date,setDate]=React.useState('');
    const [email,setEmail]=React.useState('');
    const [nationality,setNationality]= React.useState('');
    const [phoneNumber,setPhoneNumber]=React.useState('');
    const [gender,setGender]=React.useState('');
    const [pickerCountryCode,setPickerCountryCode]= React.useState(false);
    const [refreshing, setRefreshing] = React.useState(false);
    const [numberShow,setNumberShow]= React.useState(50);
    const [country,setCounty]= React.useState(codes[0].isoCode2.toLowerCase());
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
      }
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(100).then(() => [setRefreshing(false),numberShow<codes.length?(setNumberShow(numberShow+20)):(setNumberShow(codes.length))]);
      }, []);
  return (
    <View
        style={{
            marginTop:30,
            marginHorizontal:10,
            flex:1,
        }}
    >
        <View
        style={{
            flexDirection:'row',
            alignItems:'center',
            marginBottom:30,
        }}
      >
        <TouchableOpacity onPress={()=>navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="black" 
                style={{
                    marginHorizontal:10,
                }}
            />
        </TouchableOpacity>
        <Text
            style={{
                fontSize:18,
                fontWeight:'700',
            }}
        >Edit Profile</Text>
        </View>
        <TextInput
            value={fullName}
            onChangeText={setFullName}
            style={{
                width:'100%',
                height:50,
                backgroundColor:'hsl(0,0%,95%)',
                borderRadius:10,
                paddingHorizontal:10,
                fontWeight:'500',
                marginBottom:20,
            }}
        />
        <TextInput
            value={firstName}
            onChangeText={setFirstName}
            style={{
                width:'100%',
                height:50,
                backgroundColor:'hsl(0,0%,95%)',
                borderRadius:10,
                paddingHorizontal:10,
                fontWeight:'500',
                marginBottom:20,
            }}
        />
        <View
            style={{
                width:'100%',
                marginBottom:20,
                backgroundColor:'hsl(0,0%,95%)',
                flexDirection:'row',
                alignItems:'center',
                borderRadius:10,
            }}
            
        >
            <TextInput
                value={date}
                onChangeText={setDate}
                style={{
                    width:'90%',
                    height:50,
                    paddingHorizontal:10,
                    fontWeight:'500',
                }}
            />
            <MaterialIcons name="date-range" size={25} color="silver" />
        </View>
        <View
            style={{
                width:'100%',
                marginBottom:20,
                backgroundColor:'hsl(0,0%,95%)',
                flexDirection:'row',
                alignItems:'center',
                borderRadius:10,
            }}
            
        >
            <TextInput
                value={email}
                onChangeText={setEmail}
                style={{
                    width:'90%',
                    height:50,
                    paddingHorizontal:10,
                    fontWeight:'500',
                }}
            />
            <Ionicons name="mail-outline" size={25} color="silver" />        
        </View>
        <View
            style={{
                width:'100%',
                borderRadius:10,
                backgroundColor:'hsl(0,0%,95%)',
                marginBottom:20,

            }}
        >
            <Picker
                selectedValue={nationality}
                onValueChange={(itemValue, itemIndex) =>
                    setNationality(itemValue)
                }
                style={{
                    paddingHorizontal:10,
                    width:'100%',

                }}
                >
                {
                    codes?codes.map((item,index)=>{
                        return(
                            <Picker.Item key={index} label={item.country} value={item.country} />
                        )
                    }):null
                }
            </Picker>
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
                    width:'100%',
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'',
                    height:50,
                    marginBottom:20,
                    paddingHorizontal:10,
                    backgroundColor:'hsl(0,0%,95%)',

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
            <Picker
                value={gender}
                onValueChange={setGender}
                style={{
                    backgroundColor:'hsl(0,0%,95%)',
                    borderRadius:10,
                    marginBottom:40,
                }}
            >
                <Picker.Item label='Male' value={'Male'}/>
                <Picker.Item label='Femal' value={'Female'}/>
            </Picker>
            <TouchableOpacity>
                <View
                    style={{
                        width:'80%',
                        height:50,
                        borderWidth:1,
                        alignSelf:'center',
                        borderRadius:30,
                       backgroundColor:'#101010',
                       justifyContent:'center',
                       alignItems:'center',
                    }}
                >
                    <Text
                        style={{
                            color:'white',
                            fontSize:17,
                            fontWeight:'700',
                        }}
                    >Update</Text>
                </View>
            </TouchableOpacity>
    </View>
  )
}

export default EditProfile