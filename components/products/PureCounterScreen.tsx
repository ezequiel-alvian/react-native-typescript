import React from "react"
import { View, Text } from "react-native"
import { Button } from '@rneui/themed'
import { IProps } from '../../types/types'

const PureCounterScreen: React.FC<IProps> = ({ styles, count, setCount }) => {

    const handleIcrease = () => setCount(count + 1)
    const handleDecrease = () => {
        if (count === 0) return 
        setCount(count - 1) 
    }
    
    return (
        <View style={styles.containerButton}>
                        <Button
                onPress={handleDecrease}
                titleStyle={{color:'#000'}} 
                buttonStyle={styles.buttonCustom}
            >-</Button>
            <View>
                <Text>{count}</Text>
            </View>
            <Button 
                onPress={handleIcrease}
                titleStyle={{color:'#000'}} 
                buttonStyle={styles.buttonCustom}
            >+</Button>
        </View>
    )
}
export default PureCounterScreen