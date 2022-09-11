import { 
    View, 
    Text,
    FlatList, 
    Image,
    TouchableOpacity
} from 'react-native'
import React from 'react'
import DataBrand from '../../../Data/DataBrand/DataBrand'
const ListBrand = (props) => {
    const renderItem=({item,index})=>{
        return(
            <View
                key={index}
                style={{
                    justifyContent:'center',
                    alignItems:'center',
                }}
            >
                <TouchableOpacity onPress={()=>{props.onBrand(item.name)}}>
                <View
                    style={{
                        justifyContent:'center',
                        alignItems:'center',
                        marginVertical:10,
                        borderRadius:100,
                        backgroundColor:'hsl(0,0%,97%)',
                        height:50,
                        width:50,
                    }}>
                    <Image source={item.image}
                        style={{
                            width:30,
                            height:30,
                            resizeMode:'contain',
                        }}
                    />
                </View>
            </TouchableOpacity>
            <Text
                style={{
                    fontWeight:'700'
                }}
            >{item.name}</Text>
            </View>
        )
    }
    return (
        <View
            style={{
                width:'80%',
                alignSelf:'center',
            }}
        >
            <FlatList
            data={DataBrand}
            renderItem={renderItem}
            keyExtractor={item=>item.id}
            numColumns={3}
            columnWrapperStyle={{
                justifyContent:'space-between',
            }}
            />
        </View>
  )
}

export default ListBrand