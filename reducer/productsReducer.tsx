import { ListProduct } from '../types/types'
import { createSlice } from "@reduxjs/toolkit";

type State = {
    todos:ListProduct[] | undefined
}

const initialState: State = {
    todos:[]
} 

const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        addProducts:(state, action) => {
            const task = action.payload
            return {...task}
        },
    }
})

export const { addProducts } = productsSlice.actions;
export default productsSlice.reducer;
