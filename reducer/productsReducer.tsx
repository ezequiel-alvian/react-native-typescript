import { ListProduct, State } from '../types/types'
import { createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: State = {
    todos:[],
    addProducts:[]
} 

const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        selectProducts:(state, action) => {
            state.todos.push(action.payload)
        },
        addProducts: (state, action) => {
          state.addProducts = [...state.addProducts, ...action.payload]
          console.log('SOY EL STATE', state)
        }
    }
})

export const { selectProducts, addProducts } = productsSlice.actions
export default productsSlice.reducer
