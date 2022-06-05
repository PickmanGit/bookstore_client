import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { RootState } from "..";

export const TYPE_MESSAGE = {
    DANGER:'danger',
    WARNING:'warning'
}


interface messageInterface {
    message:string | null,
    type: string 
}

const initialState : messageInterface = {
    message:null,
    type:''
}



const Message = createSlice({
    name:'message',
    initialState,
    reducers:{
        addWarningMessage:(state,action)=>{
            state.message = action.payload
            state.type = TYPE_MESSAGE.WARNING
        },
        addDangerMessage:(state,action)=>{
            state.message = action.payload
            state.type = TYPE_MESSAGE.DANGER
        },
        removeMessage:(state)=>{
            state.message = null
            state.type = ''
        }
    }
})

export const { addWarningMessage , addDangerMessage , removeMessage} = Message.actions
export const selectUser = (state: RootState) => state.message
export default Message.reducer