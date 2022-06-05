import { Dispatch } from "@reduxjs/toolkit"
import React from "react"
import { Col, Nav, Pagination, Spinner } from "react-bootstrap"
import { Link } from "react-router-dom"
import CardBook from "../../components/card/CardBook"
import { addFilterText, addOrder, editPage, fetchFilterCategory} from "../../store/reducer/bookReducer"

interface ParamsStatusСheck {
    content:any[],
    loading:boolean,
    error: null | string
}

export const statusСheck = ({content,error,loading}:ParamsStatusСheck)=>{
    if(loading){
        return <Spinner style={{width:"max-content",margin:"10vh auto"}} animation="border" variant="dark" />
    }
    if(error){
        return <h1 style={{textAlign:'center',marginTop:'55px'}}>{error}</h1>
    }
    if(content.length === 0){
        return <h1 style={{textAlign:'center',marginTop:'55px'}}>No entries found</h1>
    }
    return (content.map(book=>
                <Col key={book.id}  xxl={4} xl={5} md={6} sm={12} style={{marginTop:"2vh"}}> 
                    <CardBook bookInfo={book} />
                </Col>
    ))
}


interface ParamsPagination {
    limit:number,
    page:number,
    count:number,
    clickPage:Function 
}
export const pagination = ({limit,page,count,clickPage}:ParamsPagination)=> {
    let pags = [];
    for(let i = 1 ; i < count / limit + 1 ; i++){
        pags.push(i)
    }
    return(pags.map(p=> <Pagination.Item onClick={()=>clickPage(p)} key={p} active={p === page} >{p}</Pagination.Item> ) )
}


export function prowUrlParams(pages:string | null,categories:string  | null , page:number , filterCategory:number[],textF:string | null,filterText:string,order:string,ordersUrl:string | null){
    return (dispatch:Dispatch)=>{
        const pagesParams = Number(pages) || page
        const textFilter = textF || filterText
        const orders = ordersUrl || order
        const categoryParams = ()=>{
            if(categories !== null){
                    let cat = categories.split(',')
                    let newCat = cat.map(c=>Number(c))
                    return newCat
            }
            return filterCategory
        }
        dispatch(addOrder(orders))
        dispatch(fetchFilterCategory(categoryParams()))
        dispatch(editPage(pagesParams))
        dispatch(addFilterText(textFilter))
    }

}