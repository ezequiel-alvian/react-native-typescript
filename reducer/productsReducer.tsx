import { ListProduct } from '../types/types'
import { createSlice } from "@reduxjs/toolkit";

type State = {
    todos:ListProduct[] | undefined
}

const initialState: State = {
    todos:[]
} 

const tasksSlice = createSlice({
    name:'tasks',
    initialState,
    reducers:{
        addTasks:(state, action)=>{
            const task = action.payload
            return {...task}
        }
    }
})

export const { addTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
