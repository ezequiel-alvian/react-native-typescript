import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Avatar } from '@rneui/themed'

const UserScreen = () => {

    const CustomTitle = () => {
        return (
          <View>
            <Text style={{ fontWeight: '400', fontSize: 18 }}>Subscribite para recibir Info</Text>
          </View>
        )
        }
    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <Avatar
                    size={140}
                    rounded
                    source={ {uri: 'https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg' }}
                    key={`0`}
                />
                <View>
                    <Text style={styles.titleUser}>Lucas Rodriguez</Text>
                </View>
                <View>
                    <Text>todohola@gmail.com</Text>
                </View>
                <View>
                    <Button
                    title={<CustomTitle/>}
                    titleStyle={{fontSize:16}}
                    buttonStyle={styles.styleButton}
                    ></Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
    containerTop: {
        flex:3,
        display:'flex',
        justifyContent:'center',
        alignSelf:'stretch',
        alignItems:'center'
    },
    pictureUser: {
        width:140,
        height:140,
        borderRadius:70,
        backgroundColor:'#D3D3D3',
        margin:10
    },
    titleUser: {
        fontSize:20,
        fontFamily:'Helvetica',
        color:'#000'
    },
    styleButton:{
        backgroundColor:'#00FF7F', 
        paddingHorizontal:40,
        marginTop:30
    }
})


export default UserScreen