import axios from "axios"
import { Dispatch } from "@reduxjs/toolkit"
import { addCategory, errorMessage } from "../reducer/categoryReducer"




const fetchCategory = ()=>{

    return async function(dispatch:Dispatch){
        try{
            await axios.get('http://localhost:7000/api/categories/').then(res => {
                    dispatch(addCategory(res.data))
            })
        
        }catch(e:any){
            dispatch(errorMessage(e.message))
        }
    }


}

export default fetchCategory;