import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { RootState } from "..";

interface userInterface {
    user:{},
    authorized:boolean,
    error:string|null
}

const initialState : userInterface = {
    user:{},
    authorized:false,
    error:null
}



const CurrentUser = createSlice({
    name:'user',
    initialState,
    reducers:{
        addUserOptions:(state,action)=>{
            state.user = action.payload
            state.authorized = true
            state.error = null
        },
        // addErrorMessage:(state,action)=>{
        //     state.error = action.payload
        // }
    }
})

export const { addUserOptions } = CurrentUser.actions
export const selectUser = (state: RootState) => state.users
export default CurrentUser.reducer