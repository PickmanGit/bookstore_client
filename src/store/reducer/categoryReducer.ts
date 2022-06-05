import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";




interface   CategoryInterface {
   category:any[],
   error:string|null
}

const initialState : CategoryInterface = {
    category:[],
    error:null
}

const Category = createSlice({
    name:"category",
    initialState,
    reducers:{
        addCategory:(state,action)=>{
            state.category = action.payload
        },
        errorMessage: (state,action)=>{
            state.error = action.payload
        },
    }
})

export const { addCategory , errorMessage} = Category.actions
export const selectCategory = (state: RootState) => state.category
export default Category.reducer