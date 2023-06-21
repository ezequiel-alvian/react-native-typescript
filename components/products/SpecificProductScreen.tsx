import React,{ useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useSelector } from "react-redux"
import CounterScreen from './CounterScreen'
import { useNavigation } from '@react-navigation/native'
import { ListProduct, Nav, State } from '../../types/types';
import { Button } from '@rneui/themed'
import { v4 as uuidv4 } from 'uuid'
import {addProducts} from '../../reducer/productsReducer'
import { useDispatch } from 'react-redux'
import "react-native-get-random-values"


const SpecificProductScreen = () => {
  const products = useSelector((state: { products:State }) => state.products.todos)
  const { navigate } = useNavigation<Nav>()
  console.log('soy el products',products)
  const [{ product, city, price, location, amount }] = products
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()   

  const onPress = ( products:ListProduct[]) => {
    navigate('Settings')
    const id = uuidv4()
    console.log('soy el products', products)
    dispatch(addProducts(products))
  }

    return(
    <View style={styles.container}>
        <View style={styles.containerImage}>
          <View style={styles.cardImage}></View>
        </View>
        <View style={styles.containerInfo}>
          <View style={styles.displayInfo}>
            <Text>Product</Text>
            <Text>{product}</Text>
          </View>
          <View style={styles.displayInfo}>
            <Text>Ciudad</Text>
            <Text>{city}</Text>
          </View>
          <View style={styles.displayInfo}>
            <Text>Region</Text>
            <Text>{location}</Text>
          </View>
          <View style={styles.displayInfo}>
            <Text>Precio</Text>
            <Text>{price}</Text>
          </View>
          <View style={styles.displayInfo}>
            <Text>Cantidad</Text>
            <Text>{amount}</Text>
          </View>
        </View>
        <CounterScreen
          setCount={setCount}
          count={count}
          />
        <Button
          buttonStyle={{
            backgroundColor:'#00FF7F',
            marginTop:10
          }}
          onPress={()=> onPress(products) }
        >Agregar</Button>
    </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex:1,
      display: 'flex',
      margin:10
    },
    cardImage: {
      width: 320,
      height: 320,
      backgroundColor:'#DAFFCD',
      marginBottom:15
    },
    displayInfo: {
      display:'flex',
      justifyContent:'space-between',
      flexDirection:'row',
      margin:5,
    },
    containerInfo: {
      display:'flex',
      justifyContent:'space-between',
      flexDirection:'column',
      marginTop:15,
      marginBottom:15
    },
    containerImage: {
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center'
    }
  })
export default SpecificProductScreen