import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useSelector } from "react-redux"
import CounterScreen from './CounterScreen'
import { ListProduct } from '../../types/types'

const SpecificProductScreen = () => {
  const tasks = useSelector((state: { tasks:ListProduct }) => state.tasks)
  const { product, city, price } = tasks

    return(
    <View style={styles.container}>
        <View><Text>{product}</Text></View>
        <View>
          <Text>{city}</Text>
          <Text>{price}</Text>
        </View>
        <View style={styles.cardImage}></View>
        <CounterScreen/>
    </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex:1,
      display: 'flex',
      justifyContent: 'center', 
      alignItems: 'center'
    },
  cardImage: {
    width: 320,
    height: 320,
    backgroundColor:'#DAFFCD'
  }
  })
export default SpecificProductScreen