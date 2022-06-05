import { Dispatch } from "@reduxjs/toolkit"
import axios from "axios"
import { addBookPrev, bookPrevLoading } from "../reducer/bookPreviewReducer"
import { useAppDispatch, useAppSelector } from "../hooks"
import { addContent, BookState, errorMessage, loadingContent } from "../reducer/bookReducer"
import { addDangerMessage, addWarningMessage } from "../reducer/messageReducer"

interface ParamsFetchBook {
    limit:number,
    page:number,
    filterCategory:number[],
    filterText:string,
    order:string
}

const fetchBook = ({limit,page,filterCategory,filterText,order}:ParamsFetchBook)=>{

        return async function(dispatch:Dispatch){
            try{
                dispatch(loadingContent())
                await axios.post('http://localhost:7000/api/book/',{limit:limit,page:page,category:filterCategory,text:filterText,order}).then(res => { 
                        dispatch(addContent({content:res.data.rows,count:res.data.count}))
                })
            
            }catch(e:any){
                dispatch(addDangerMessage(e.message))
            }
        }
    

 }


export const bookPreviewAction = (id:number)=>{
    return async (dispatch:Dispatch)=>{
        try{
            dispatch(bookPrevLoading())
            await axios.get(`http://localhost:7000/api/book/${id}`).then(res=>{
                dispatch(addBookPrev(res.data))
            })
        }catch(e){
            dispatch(addDangerMessage('Unknown error while loading page. Please return to the main page'))
        }
    }
    
}   



 export default fetchBook;