import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import { collection, getDocs } from 'firebase/firestore'
import db from '../database/database'
import { ListProduct } from '../types/types'
import ListProductScreen from './products/ListProductScreen'

const ProductsScreeen = () => {

    const [getAllProducts, setGetAllProducts] = useState<ListProduct[]>([])
    const getData = async() => {
        try{
          const querySnapshot = await getDocs(collection(db, 'user'))
          const users:Array<ListProduct> = []
          await querySnapshot.forEach((doc) => {
            const { amount, available, location, city, name, price, product, surname, promotion } = doc.data()
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
              promotion
            });
          });
          setGetAllProducts(users)
        }catch(err){ console.error(err) }
      }
    
      useEffect(()=>{
        getData()
      },[])

    return(
    <View>
        <FlatList
          data={getAllProducts}
          keyExtractor={(item:ListProduct) => item.id}
          renderItem={({item}: { item: ListProduct })=> <ListProductScreen item={item}/>}
        />  
    </View>
    )
}

export default ProductsScreeen