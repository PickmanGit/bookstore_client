import { Dispatch } from "@reduxjs/toolkit"
import axios from "axios"
import jwtDecode from "jwt-decode"
import { addWarningMessage , addDangerMessage } from "../reducer/messageReducer"
import { addUserOptions } from "../reducer/userReducer"




export const loginUsers = (email:string,password:string)=>{

    return async function(dispatch:Dispatch){
        try{
            const {data} = await axios.post('http://localhost:7000/api/user/login/',{email:email,password:password})
            localStorage.setItem('userJwt', data.token)
            dispatch(addUserOptions(jwtDecode(data.token)))
        }catch(e:any){
           
            dispatch(addWarningMessage(e.response.data.message))
        }
    }


}


export const registrationUsers = (email:string,password:string)=>{

    return async function(dispatch:Dispatch){
        try{
            const {data} = await axios.post('http://localhost:7000/api/user/registration/',{email:email,password:password})
            localStorage.setItem('userJwt', data.token)
            dispatch(addUserOptions(jwtDecode(data.token)))
        }catch(e:any){
           
            dispatch(addWarningMessage(e.response.data.message))
        }
    }


}


export const checkUsers = ()=>{

    return async function(dispatch:Dispatch){
        try{
            const {data} = await axios.get('http://localhost:7000/api/user/auth/', { headers: {
                "Authorization" : `Bearer ${localStorage.getItem('userJwt')}`
            }})
            const r = await axios.get('http://localhost:7000/api/user/auth/', { headers: {
               "Authorization" : `Bearer ${localStorage.getItem('userJwt')}`
            }})
            localStorage.setItem('userJwt', data.token)
            dispatch(addUserOptions(jwtDecode(data.token)))
        }catch(e:any){
           console.log(e)
            dispatch(addDangerMessage(e.response.data.message))
        }
    }


}