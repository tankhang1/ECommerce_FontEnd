import { View, Text, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import Header from './component/Header'
import ListBrand from './component/ListBrand'
import ListProduct from './component/ListProduct'
const Home = ({navigation}) => {
  const [brand,setBrand]=React.useState('');
  return (
    <View
        style={{
            paddingHorizontal:10,
            paddingTop:30,
            flex:1,
            backgroundColor:'white',
        }}
    >
      <Header navigation={navigation}/>
      <ListBrand onBrand={setBrand}/>
      {
        brand?(<ListProduct onBrand={brand} onText="Product"/>):(<ListProduct onBrand='' onText="bestseller"/>)
      }
    </View>
  )
}

export default Home