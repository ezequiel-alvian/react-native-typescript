import React,{useState} from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Button } from '@rneui/themed'

const CounterScreen = ()=> {
    const [count, setCount] = useState<number>(0)

    const handleIcrease = () => setCount(count + 1)
    const handleDecrease = () => {
        if (count === 0) return
        setCount(count - 1) 
    }



    return(
        <View style={styles.containerButton}>
            <Button 
                onPress={handleIcrease}
                titleStyle={{color:'#000'}} 
                buttonStyle={styles.buttonCustom}
            >+</Button>
            <View>
                <Text>{count}</Text>
            </View>
            <Button
                onPress={handleDecrease}
                titleStyle={{color:'#000'}} 
                buttonStyle={styles.buttonCustom}
            >-</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    containerButton: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#00FF7F',
        width: (Dimensions.get('window').width -50 ),
    },
    buttonCustom: {
        backgroundColor:'#00FF7F',
    },
})

export default CounterScreen