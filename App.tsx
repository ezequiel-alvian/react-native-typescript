import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './components/HomeScreen'
import SettingsScreen from './components/SettingsScreen'
import ProductsScreen from './components/ProductsScreen'
import { ComponentProps } from "react";

const Tab = createBottomTabNavigator();

type TabIcon = {
  focused: boolean
  color: string
  size: number
}
type RouteOp = {
  route:{
    name:string
  }
}


export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }:RouteOp) => ({
          tabBarIcon: ({ focused, color, size }:TabIcon) => {
            let hola!: string 
            if (route?.name === 'Home') {
              hola = focused
                ? 'home'
                : 'home';
            } else if (route?.name === 'Settings') {
              hola = focused 
                ? 'md-cart-outline' 
                : 'md-cart-outline'
            }
            else if (route?.name === 'Products') {
              hola = focused 
                ? 'list-circle-outline' 
                : 'list'
            }
            return <Ionicons 
                      name={hola} 
                      size={size} 
                      color={color} 
                    />
          },
          tabBarActiveTintColor: '#00FF7F',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Products" component={ProductsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
