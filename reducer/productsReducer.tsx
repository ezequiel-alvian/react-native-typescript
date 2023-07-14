import { ListProduct, State } from '../types/types'
import { createSlice, PayloadAction} from "@reduxjs/toolkit";



const initialState: State = {
    todos: [],
    addProducts: [],
    amount: 0,
    price: 0
} 


const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        selectProducts:(state, action) => {
            state.todos = [action.payload]
        },
        addProducts: (state, action) => {
            let pp = [...state.addProducts, ...action.payload]
            state.addProducts = pp.filter((obj, index) => { return index === pp.findIndex(o => obj.id === o.id);})
            state.price = state.addProducts.map( item => item.price).reduce((a,b) => a + b, 0)
            state.amount = Object.keys(state.addProducts).length
        },
        addProductsUpdate: (state, action) => {
            let products = state.addProducts.find(ee => ee.id === action.payload?.id)
            if (products) products.amountBuy = action.payload.amountBuy
        },
        addProductsDelete: (state, action) => {
            state.addProducts = state.addProducts.filter( product => product.id !== action.payload.id)
            state.amount = Object.keys(state.addProducts).length
        }
    }
})

export const { selectProducts, addProducts, addProductsUpdate, addProductsDelete } = productsSlice.actions
export default productsSlice.reducer
