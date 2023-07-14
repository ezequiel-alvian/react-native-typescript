import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native'
import { useSelector } from 'react-redux'
import { State,ListProduct } from '../types/types'
import { useDispatch } from 'react-redux'
import PureCounterScreen from './products/PureCounterScreen'
import { addProductsUpdate } from '../reducer/productsReducer'
import ListStore from './store/ListStoreScreen'

const StoreScreen = () => {

  const addProducts = useSelector((state:{products:State})=> state && state.products.addProducts)


    return (
      <View style={styles.container}>
        <Text style={styles.title}>Buy store!</Text>
        { addProducts ? 
        <FlatList
          data={addProducts}
          keyExtractor={(item:ListProduct) => item.id}
          renderItem={({item}: { item: ListProduct })=> <ListStore item={item}/>}
        />  
        : null }
      </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
      marginTop:40,
      flex:1,
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      //alignSelf:'center',
      //alignItems:'center',
      width:Dimensions.get('window').width
    },
    containerList: {
      padding:10,
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      flex:1,
      width: (Dimensions.get('window').width -20 )
    },
    image: {
      backgroundColor:'#8cffaa',
      width:60,
      height:60
    },
    containerButton: {
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      backgroundColor:'#00FF7F',
      width: 60,
      padding:0
  },
  buttonCustom: {
      backgroundColor:'#00FF7F',
  },
  title: {
    fontSize:16,
    fontWeight:'bold',
    fontFamily:'Helvetica',
    marginBottom:5,
    marginLeft:10
  },
  })

export default StoreScreen