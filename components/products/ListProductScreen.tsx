import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { ListProduct, Nav } from '../../types/types'
import { ListItem } from '@rneui/themed'
import TabletPromotion from './TabletPromotion'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from "react-redux"
import { addTasks } from '../../reducer/productsReducer'

const ListProductScreen = ({item}: { item: ListProduct }) => {
    
    const { navigate } = useNavigation<Nav>()
    const dispatch = useDispatch()

    const onPress = ({item}:{item:ListProduct}) => { 
        navigate('SpecificProduct') 
        dispatch(addTasks(item))
    }
    
    return (
        <ListItem style={styles.cardContainer} onPress={()=> onPress({item})}>
            <ListItem.Content key={item.id}>
                    {item.promotion && <TabletPromotion promotion={item.promotion}/>}
                    <View style={styles.cardDisplay}>
                        <View style={styles.cardImage}></View>
                        <View style={styles.containerText}>
                            <ListItem.Title style={styles.title}>{item.product}</ListItem.Title>
                            <ListItem.Subtitle style={styles.subTitle}>{item.city} - {item.location}</ListItem.Subtitle>
                            <Text style={styles.textColor} >${item.price}</Text>
                            <Text style={styles.text}>{item.amount} kg</Text>
                        </View>
                    </View>
            </ListItem.Content>
        </ListItem>
    )
}


const styles = StyleSheet.create({
    cardDisplay:{
        display: 'flex',
        justifyContent:'flex-start',
        flexDirection:'row',
        flex: 1,
    },
    cardContainer: {
        margin: 10,
        borderColor:'#D3D3D3',
        borderBottomWidth:2,
        flex: 1,
        display:'flex',
        flexDirection:'column'
    },
    cardImage: {
        width: 60,
        height: 60,
        backgroundColor:'#00FF7F',
        marginRight:20,
    },
    containerText:{
        marginBottom:5
    },
    title: {
        fontSize:20,
        fontWeight:'bold',
        fontFamily:'Helvetica'
    },
    subTitle: {
        fontSize:14,
        fontWeight:'400',
        color:'#808080',
        fontFamily:'Helvetica',
        marginBottom:8
    },
    text: {
        fontSize:14,
        fontWeight:'400',
        color:'#808080',
        fontFamily:'Helvetica'
    },
    textColor: {
        fontSize:14,
        fontWeight:'600',
        color:'#000',
        fontFamily:'Helvetica'
    }
})


export default ListProductScreen