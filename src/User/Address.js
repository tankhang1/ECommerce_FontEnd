import { View, Text,TouchableOpacity,Image,Modal,Alert,TextInput, Pressable, FlatList    } from 'react-native'
import React from 'react'
import { AntDesign,MaterialIcons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Address = ({navigation}) => {
    const [listAddress,setListAddress]= React.useState([]);
    const [modalVisible, setModalVisible] = React.useState(false);
    let listKindAddress=["Office","Home","Apartment","Parent's House","Town Square"];
    const [checkedRadio,setCheckRadio]= React.useState();
    const [name,setName]=React.useState('');
    const [numberPhone,setNumberPhone]= React.useState();
    const [address,setAddress]=React.useState('');
    const [onCheckChangeAddress,setOnCheckChangeAddress]= React.useState(false);
    const [checkedAddress,setCheckedAddress]= React.useState();
    const [indexAddressChanged,setIndexAddressChanged]=React.useState();
    function insertAt(array, index, ...elementsArray) {
        array.splice(index, 0, ...elementsArray);
    }
    const onRegulateAddress=(index)=>{
        setOnCheckChangeAddress(!onCheckChangeAddress);
        setName(listAddress[index].name);
        setNumberPhone(listAddress[index].numberPhone);
        setAddress(listAddress[index].address);
        setCheckRadio(listAddress[index].checkedRadio);
       setIndexAddressChanged(index);
        setModalVisible(!modalVisible);
        
    }
    const onChangeAddress=()=>{
        setOnCheckChangeAddress(false);

        let tmp=listAddress;
        tmp.splice(indexAddressChanged,1);
        insertAt(tmp,indexAddressChanged,{name,numberPhone,address,checkedRadio})
        setListAddress(tmp);
       setModalVisible(!modalVisible);
    }
    const onDeleteListAddress=(index)=>{
        Alert.alert(
            "Warning",
            "Are you sure delete this address!!!",
            [
                {
                    text:'No',
                    onPress:()=>{},
                },
                {
                    text:'Yes',
                    onPress:()=>{
                        let tmp= [...listAddress];
                        tmp.splice(index,1);
                        setListAddress(tmp);
                    }
                }
            ]
        )
    }
    const renderItem=({item,index})=>{
        if (listAddress!==null)
        return(
            <TouchableOpacity
                onPress={()=>setCheckedAddress(index)}
                onLongPress={(index)=>onDeleteListAddress(index)}
            >
                <View
            style={{
                borderWidth:0.2,
                width:'100%',
                height:75,
                backgroundColor:'white',
                borderRadius:30,
                alignItems:'center',
                flexDirection:'row',
                justifyContent:'space-between',
                marginBottom:20,
            }}
        >
            <View
                style={{
                    flexDirection:'row',
                }}
            >
                <View
                style={{
                    width:50,
                    height:50,
                    borderRadius:100,
                    backgroundColor:'#e2e2e2',
                    justifyContent:'center',
                    alignItems:'center',
                    flexDirection:'row',
                    marginHorizontal:10,
                    marginHorizontal:10,
                }}
            >
            <Image source={{uri:"https://img.icons8.com/clouds/100/000000/order-delivered.png"}}
                style={{
                    width:40,
                    height:40,
                    resizeMode:'contain',
                }}
            />
            
            </View>
            <View
                style={{
                    marginHorizontal:10,     

                }}
            >
                <View
                    style={{
                        flexDirection:'row',
                        alignItems:'center',                   
                    }}
                >
                    <Text
                        style={{
                            fontSize:16,
                            fontWeight:'700',
                            marginRight:10,

                        }}
                    >{listKindAddress[item.checkedRadio]}
                    </Text>
                    {
                        checkedAddress===index?(
                            <View
                        style={{
                            width:60,
                            height:25,
                            backgroundColor:'#e2e2e2',
                            justifyContent:'center',
                            alignItems:'center',
                            borderRadius:5,
                        }}
                    >
                        <Text>Default</Text>
                    </View>
                        ):null
                    }
                </View>
                <Text
                    style={{
                        color:'hsl(0,0%,38%)',
                        marginTop:4
                    }}
                >{item.address}</Text>
            </View>
            </View>
            <TouchableOpacity
                onPress={()=>onRegulateAddress(index)}
            >
                <Image source={{uri:'https://img.icons8.com/external-yogi-aprelliyanto-glyph-yogi-aprelliyanto/32/000000/external-pencil-brand-identity-yogi-aprelliyanto-glyph-yogi-aprelliyanto.png'}}
                    style={{
                        width:20,
                        height:20,
                        resizeMode:'contain',
                        marginRight:10,
                    }}
                />
            </TouchableOpacity>
            </View> 
            </TouchableOpacity>
        )
    }
    const onAddListAddress=()=>{
        setListAddress([...listAddress,{name,address,checkedRadio,numberPhone}])
        setName('');
        setNumberPhone();
        setAddress('');
        setCheckRadio();
        setModalVisible(!modalVisible);
    }
  return (
    <View
        style={{
            marginTop:30,
            marginHorizontal:10,
            flex:1,
            backgroundColor:'#fbfbfb',
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
            <AntDesign name='arrowleft' size={25} color='black'
            />
        </TouchableOpacity>
        <Text
            style={{
                fontSize:18,
                fontWeight:'700',
                marginHorizontal:10,
            }}
        >Address</Text>
        </View>

        <FlatList
            data={listAddress}
            renderItem={renderItem}
        />
        <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
        >
        <Pressable
            onPressOut={()=>setModalVisible(!modalVisible)}
        >
        <View
            style={{
                borderWidth:0.5,
                width:'100%',
                height:'50%',
                marginTop:'50%',
                marginBottom:'50%',
                justifyContent:'flex-start',
                alignItems:'center',
            }}
        >
            <View
                style={{
                    width:'95%',
                    flexDirection:'row',
                    alignItems:'baseline',
                    marginTop:20,
                }}

            >
                <Text>Kind Address:</Text>
                <View
                    style={{
                        flexDirection:'row',
                        flexWrap:'wrap',
                        marginLeft:20,
                        alignItems:'center',
                    }}
                >
                {
                    listKindAddress?listKindAddress.map((item,index)=>{
                        return(
                            <TouchableOpacity
                                key={index}
                                onPress={()=>setCheckRadio(index)}
                            >
                                <View
                                style={{ 
                                    flexDirection:'row',
                                    marginVertical:5,
                                    alignItems:'center',
                                }}
                                >
                                <MaterialIcons name={checkedRadio===index?"radio-button-on":"radio-button-off"} size={24} color="black" />
                                <Text
                                    style={{
                                        marginRight:10,
                                    }}
                                >{item}</Text>
                                </View>
                            </TouchableOpacity>
                            )
                    }):null
                }
                </View>
            </View>
            
            <View
                style={{
                    justifyContent:'center',
                    alignItems:'center',
                }}
            >
                <View
                    style={{
                        flexDirection:'row',
                        justifyContent:'center',
                        alignItems:'center',
                        marginTop:10,
                    }}
                >
                    <Text
                        style={{
                            width:'20%',
                            justifyContent:'center',
                            alignItems:'center',
                        }}
                    >
                        Name:
                    </Text>
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        placeholder={"Name"}
                        style={{
                            borderWidth:0.2,
                            width:'70%',
                            marginLeft:10,
                            paddingVertical:5,
                            paddingHorizontal:5,
                            borderRadius:10,
                        }}
                    />
                </View>
                <View
                style={{
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center',
                    marginTop:10,
                }}
            >
                <Text
                    style={{
                        width:'20%',
                        justifyContent:'center',
                        alignItems:'center',
                    }}
                >
                    Number:
                </Text>
                <TextInput
                    value={numberPhone}
                    onChangeText={setNumberPhone}
                    placeholder={"Phone Number"}
                    style={{
                        borderWidth:0.2,
                        width:'70%',
                        marginLeft:10,
                        paddingVertical:5,
                        paddingHorizontal:5,
                        borderRadius:10,
                    }}
                    keyboardType="number-pad"
                />
                </View>
                <View
                style={{
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center',
                    marginTop:10,
                }}
            >
                <Text
                    style={{
                        width:'20%',
                        justifyContent:'center',
                        alignItems:'center',
                    }}
                >
                    Address:
                </Text>
                <TextInput
                    value={address}
                    onChangeText={setAddress}
                    placeholder={"Address"}
                    style={{
                        borderWidth:0.2,
                        width:'70%',
                        marginLeft:10,
                        paddingVertical:5,
                        paddingHorizontal:5,
                        borderRadius:10,
                    }}
                />
                </View>
            </View>
            <TouchableOpacity
                style={{
                    position:'absolute',
                    bottom:10,
                }}
                onPress={onCheckChangeAddress===false?onAddListAddress:onChangeAddress}
                >
                <View
                    style={{
                        width:300,
                        height:50,
                        backgroundColor:'black',
                        borderRadius:100,
                        justifyContent:'center',
                        alignItems:'center',
                    }}
                >
                    <Text
                        style={{
                            fontSize:16,
                            fontWeight:'700',
                            color:'white',
                        }}
                    >Confirm</Text>
                </View>
            </TouchableOpacity>
        </View>
        </Pressable>
        </Modal>
        <TouchableOpacity
            style={{
                position:'absolute',
                bottom:30,
                alignSelf:'center',

            }}
            onPress={()=>[setModalVisible(!modalVisible),setOnCheckChangeAddress(false)]}
        >
            <View
                style={{
                    borderWidth:1,
                    width:300,
                    height:50,
                    borderRadius:30,
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'black'
                }}
            >
                <Text
                    style={{
                        color:'white',
                        fontWeight:'700',
                    }}
                >Add New Address</Text>
                
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default Address