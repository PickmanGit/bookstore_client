import { createSlice } from "@reduxjs/toolkit";
import { AnyObject } from "immer/dist/internal";
import { RootState } from "..";




interface   bookPreviewInterface {
   bookPrev:AnyObject;
   loading:boolean;
}

export const initialState : bookPreviewInterface = {
    bookPrev:{
        books:{
            author:'',
            id:0,
            image:'19861243-ada7-489c-b413-2897716e28e6.jpg',
            rating:0,
            language:'',
            path:'',
            price:0,
            title:''
        },
        category:[],
        descriptions:{
            description:''
        }
    },
    loading:false
}

const BookPreview = createSlice({
    name:"category",
    initialState,
    reducers:{
        addBookPrev:(state,action)=>{
            state.bookPrev = action.payload
            state.loading = false
        },
        bookPrevLoading:(state)=>{
            state.loading = true
        }
    }
})

export const { addBookPrev , bookPrevLoading} = BookPreview.actions
export const selectCategory = (state: RootState) => state.book.content
export default BookPreview.reducer