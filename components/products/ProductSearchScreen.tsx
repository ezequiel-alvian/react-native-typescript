import React, { useState } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import { SearchBar } from '@rneui/themed';



const ProductSearchScreen = () => {
    const [search, setSearch] = useState()

    const updateSearch = (newVal:any) => {
        setSearch(newVal)
    }
    return (
        <View style={styles.container}>
            <SearchBar
                placeholder="Type Here..."
                onChangeText={(newVal)=> updateSearch(newVal)}
                value={search}
                lightTheme={true}
                containerStyle={styles.containerStyle}
                inputContainerStyle={{backgroundColor:'#fff', borderWidth:0}}
            />
            <Text style={styles.containerTitle}>All Items</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:5,
    },
    containerStyle:{
        backgroundColor:'transparent', 
        borderBottomColor:'transparent',
        borderTopColor: 'transparent'
    },
    containerTitle:{
        marginLeft:10,
        fontSize:16,
        fontWeight:'bold',
        fontFamily:'Helvetica',
        marginBottom:5,
        marginTop:10
    }
})

export default ProductSearchScreen