import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface BookState {
    content:any[],
    filterCategory:number[],
    filterText:string,
    page:number,
    limit:number,
    count:number,
    order:string,
    loading:boolean,
    error: null | string
}

const initialState: BookState = {
    content: [],
    filterCategory: [],
    filterText: '',
    page:1,
    limit:3,
    count:1,
    order:'',
    loading: false,
    error:null
}

const Book = createSlice({
    name:'book',
    initialState,
    reducers:{
        addContent: (state, action) => {
            state.content = action.payload.content
            state.count = action.payload.count
            state.loading = false
        },
        loadingContent: (state)=>{
            state.loading = true
        },
        editPage: (state,action)=>{
            state.page = action.payload
        },
        editLimit: (state,action)=>{
            state.limit = action.payload
        },
        errorMessage: (state,action)=>{
            state.error = action.payload
            state.loading = false
        },
        addFilterCategory: (state,action)=>{
            state.filterCategory.push(action.payload)
        },
        deleteFilterCategory: (state,action)=>{
            state.filterCategory = state.filterCategory.filter(catN=>catN !== action.payload)
        },
        fetchFilterCategory: (state,action)=>{
            state.filterCategory = action.payload
        },
        addFilterText:(state,action)=>{
            state.filterText = action.payload
        },
        addOrder:(state,action)=>{
            state.order = action.payload
        }

    }
})

export const { addContent , loadingContent , editPage , editLimit , errorMessage ,addFilterCategory,fetchFilterCategory,deleteFilterCategory,addFilterText,addOrder} = Book.actions
export const selectBook = (state: RootState) => state.book.content
export default Book.reducer