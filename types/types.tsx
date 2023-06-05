import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export interface ListProduct {
    amount : number
    available: boolean
    city: string
    location: string
    name: string
    price: number
    product: string
    surname: string
    id: string
    promotion: number
}

type RootStackParamList = {
    Home: undefined
    Profile: ListProduct
    Feed: { sort: 'latest' | 'top' } | undefined;
}

export type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>

export type Nav = {
    navigate: (value: string) => void;
}

export type TabIcon = {
focused: boolean
color: string
size: number
}
export type RouteOp = {
    route:{
        name:string
    }
}