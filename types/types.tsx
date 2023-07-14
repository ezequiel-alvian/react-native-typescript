import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ViewStyle } from 'react-native'

interface ILProduct {
    media:string
    great:string
}


export interface ListProduct {
    amount : number
    available: boolean
    city: string
    location: string | undefined
    name: string
    price: number
    product: string
    surname: string
    id: string
    promotion: number
    amountBuy: number
    images?:ILProduct[]
}

export interface RouteScreens {
    key?: string | undefined
    name?: string | undefined
    params?: string | undefined
}

export type Foo = (route: RouteScreens) => void

export type Nav = {
    navigate: (value: string) => void;
}

export type RootStackParamList = {
    Home: undefined
    SpecificProduct: undefined
}

type Style = {
    containerButton:ViewStyle,
    buttonCustom:ViewStyle
}

export type IProps = {
    styles:Style,
    count: number
    setCount: (count: number) => void
}


export type State = {
    todos: ListProduct[]
    addProducts: ListProduct[]
    amount: number
    price: number
}

