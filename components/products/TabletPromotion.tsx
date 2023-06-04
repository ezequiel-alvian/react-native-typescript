import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Dimensions } from "react-native"

const TabletPromotion = ({ promotion } : {promotion:number}) => {
    return(
        <View style={styles.tabletPromotion}>
            <Text style={styles.tabletPromotionText}>{`-${promotion}%`}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    tabletPromotion: {
        display:'flex',
        justifyContent:'flex-end',
        flexDirection:'column',
        alignItems: 'flex-end',
        width: (Dimensions.get('window').width -40 ),

    },
    tabletPromotionText: {
        padding:5,
        backgroundColor:'#00FF7F',
    }
})

export default TabletPromotion