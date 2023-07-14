  import React, { useState } from 'react'
  import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import { ListProduct } from '../../types/types'
import { useDispatch } from 'react-redux'
import PureCounterScreen from '../products/PureCounterScreen'
import { addProductsUpdate, addProductsDelete } from '../../reducer/productsReducer'
import { ListItem, Button } from '@rneui/themed'
  
  
  const ListStore = ({item}:{item:ListProduct}) => {
    const { product, price, city, amountBuy, images, id } = item
    const [count, setCount] = useState(amountBuy)
    const dispatch = useDispatch()
    dispatch(addProductsUpdate({ ...item, amountBuy: count }))
    let widthSwit = Dimensions.get('window').width

    const checkDelete = (item:ListProduct) => {
      console.log(item)
      dispatch(addProductsDelete(item))
    }

    return(
      <ListItem.Swipeable
      key={id}
      rightWidth={widthSwit / 5}
      rightContent={() => (
        <Button
          // title="Delete"
          onPress={() => checkDelete(item)}
          icon={{ name: 'delete', color: 'white' }}
          buttonStyle={{ minHeight: '100%', backgroundColor: 'black', minWidth:'40%'}}
        />
      )}
      >
      <ListItem.Content style={styles.container}  key={id}>
        <View style={styles.containerList}>
          {
            images !== undefined ?
            images.map((image)=>
          <Image
          style={styles.imageStyle}
          source={{uri:`${image.media}`}}/>
          ) : null
        }
          <View style={styles.containerInfo}>
            <ListItem.Title style={styles.title}>{product}</ListItem.Title>
            <Text>${price} / {city}</Text>
          </View>
          <View>
            <PureCounterScreen
              count={count}
              setCount={setCount}
              styles={styles}
            />
          </View>
        </View>
        </ListItem.Content>
      </ListItem.Swipeable>
    ) 
  }


  const styles = StyleSheet.create({
    container:{
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center' ,
      maxWidth:(Dimensions.get('window').width + 10 ),
    },
    containerInfo:{
      width:'50%',
    },
    containerList: {
      padding:10,
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      overflow:'hidden',
      alignItems:'center',
      width: (Dimensions.get('window').width -20 ),
    },
    imageStyle: {
      width:60,
      height:60
    },
    title: {
      fontSize:16,
      fontWeight:'bold',
      fontFamily:'Helvetica',
      marginBottom:5
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
  })

  export default ListStore