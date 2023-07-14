import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native'
import { collection, getDocs } from 'firebase/firestore'
import db from '../database/database'
import { ListProduct,Nav } from '../types/types'
import ListProductScreen from './products/ListProductScreen'
import ProductSearchScreen from './products/ProductSearchScreen'

const ProductsScreeen = () => {

    const [getAllProducts, setGetAllProducts] = useState<ListProduct[]>([])


    const getData = async() => {
        try{
          const querySnapshot = await getDocs(collection(db, 'user'))
          const users:Array<ListProduct> = []
          await querySnapshot.forEach((doc) => {
            const { amount, available, location, city, name, price, product, surname, promotion,amountBuy,images } = doc.data()
            console.log(amount,available)
            users.push({
              id: doc.id,
              amount,
              available,
              city,
              location,
              name,
              price,
              product,
              surname,
              promotion,
              amountBuy,
              images
            });
          });
          setGetAllProducts(users)
        }catch(err){ console.error(err) }
      }
    
      useEffect(()=>{
        getData()
      },[])

    return(
      <View style={styles.container}>
        <ProductSearchScreen/>
        <FlatList
          data={getAllProducts}
          keyExtractor={(item:ListProduct) => item.id}
          renderItem={({item}: { item: ListProduct })=> <ListProductScreen item={item}/>}
        />  
      </View>
    )
}

const styles = StyleSheet.create({
  container:{
    marginTop:80,
    marginBottom:100
  }
})

export default ProductsScreeen