import React,{ useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useSelector } from "react-redux"
import CounterScreen from './CounterScreen'
import { useNavigation } from '@react-navigation/native'
import { ListProduct, Nav } from '../../types/types'
import { Button } from '@rneui/themed'

const SpecificProductScreen = () => {
  const tasks = useSelector((state: { tasks:ListProduct }) => state.tasks)
  const { navigate } = useNavigation<Nav>()
  const { product, city, price, location, amount } = tasks
  const [count, setCount] = useState(0)

  useEffect(()=>{
    if(count !== 0) setCount(0)
},[])

  const onPress = () => {
    navigate('Settings')
  }

    return(
    <View style={styles.container}>
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
        <View style={styles.containerImage}>
          <View style={styles.cardImage}></View>
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
          onPress={onPress}
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