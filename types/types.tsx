import type { NativeStackScreenProps } from '@react-navigation/native-stack';

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
    amountBuy?: number
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

export interface IProps {
    count: number
    setCount: (count: number) => void
}


export type State = {
    todos:ListProduct[]
    addProducts:ListProduct[]
}

