import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

import HomeScreen from './HomeScreen'
import SettingsScreen from './SettingsScreen'
import ProductsScreen from './ProductsScreen'
import SpecificProductScreen from './products/SpecificProductScreen'
import UserScreen from './UserScreen'

import { Foo, RootStackParamList } from '../types/types'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

const getTabBarVisibility:Foo = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route = {} ) ?? 'Feed';

  if( routeName === 'SpecificProduct' ) {
    return 'none';
  }
  return 'flex';
};

function  HomeTabs() {
  return(   
  <Stack.Navigator>
    <Stack.Screen 
      options={{headerShown: false}}
      name="Home" 
      component={HomeScreen} 
    />
    <Stack.Screen 
      name="SpecificProduct" 
      component={SpecificProductScreen} 
    />
  </Stack.Navigator>
  )
}

export default function Main() {
  return (
    <NavigationContainer>
        <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          // tabBarStyle: {backgroundColor: '#AD40AF'},
          tabBarInactiveTintColor: '#858585',
          tabBarActiveTintColor: '#5BFF1E',
        }}
        >
          <Tab.Screen 
            name="Home2" 
            component={HomeTabs}
            options={(route) => ({
              tabBarStyle: {
                display: getTabBarVisibility(route),
                // backgroundColor: '#AD40AF',
              },
              tabBarIcon: ({color, size}) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            })} 
          />
          <Tab.Screen 
            name="Settings" 
            component={SettingsScreen}
            options={{
              tabBarBadge: 3,
              tabBarBadgeStyle: {backgroundColor: '#5BFF1E'},
              tabBarIcon: ({color, size}) => (
                <Ionicons name="md-cart" color={color} size={size} />
              ),
            }} 
          />
          <Tab.Screen 
            name="Products" 
            component={ProductsScreen} 
            options={{
              tabBarIcon: ({color, size}) => (
                <Ionicons name="list" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen 
            name="User" 
            component={UserScreen} 
            options={{
              tabBarIcon: ({color, size}) => (
                <Ionicons name="person" color={color} size={size} />
              ),
            }}
          />
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
