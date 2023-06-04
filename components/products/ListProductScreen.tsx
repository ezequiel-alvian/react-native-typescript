import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ListProduct } from '../../types/types'
import { ListItem, Button } from '@rneui/themed';
import TabletPromotion from './TabletPromotion'
import { Dimensions } from "react-native"

const ListProductScreen = ({item}: { item: ListProduct }) => {

    return (
    <ListItem style={styles.cardContainer}>
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
                <View style={styles.containerButton}>
                    <Button titleStyle={{color:'#000'}} buttonStyle={styles.buttonCustom}>+</Button>
                    <View><Text>0</Text></View>
                    <Button titleStyle={{color:'#000'}} buttonStyle={styles.buttonCustom}>-</Button>
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
        marginBottom:20
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
    },
    containerButton: {
        flex:1,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#00FF7F',
        width: (Dimensions.get('window').width -50 ),
    },
    buttonCustom: {
        backgroundColor:'#00FF7F',
    }
})


export default ListProductScreen