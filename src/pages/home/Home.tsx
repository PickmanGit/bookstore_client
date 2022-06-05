import axios from "axios"
import React, { FC, useEffect, useState } from "react"
import { Accordion, Alert, Button, Card, Carousel, Col, Container, Form, FormControl, ListGroup, Nav, Navbar, NavDropdown, Pagination, Row, Spinner } from "react-bootstrap"
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom"
import CardBook from "../../components/card/CardBook"
import FilterAcardion from "../../components/filters/filterBookAcardeon/FilterAcardion"
import FilterInput from "../../components/filters/filterBookInput/FilterInput"
import Slider from "../../components/slider/Slider"
import fetchBook from "../../store/action-creators/book"
import fetchCategory from "../../store/action-creators/category"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { addFilterCategory, addFilterText, addOrder, deleteFilterCategory, editPage, fetchFilterCategory } from "../../store/reducer/bookReducer"
import { pagination , prowUrlParams, statusСheck} from "./houseLogic"






const Home :FC= ()=>{

    const dispatch = useAppDispatch()

    const {content,error,loading,limit,page,filterCategory,count,filterText,order} = useAppSelector((state) => state.book)
    const {category} = useAppSelector((state) => state.category)
    const [searchParams, setSearchParams] = useSearchParams()
    const [valueInputS,setValueInputS] = useState(filterText)
    
    const dropdownItem = [{title:'Sort Descending'},{title:'Sort ascending'}]

    useEffect(()=>{
        let pages = searchParams.get('pages')
        let categories = searchParams.get('category')
        let textF = searchParams.get('filterText')
        let ordersUrl = searchParams.get('order')
        if(pages !== null || categories !== null || textF !== null){
            dispatch(prowUrlParams(pages,categories,page,filterCategory,textF,filterText,order,ordersUrl))
        }
        dispatch(fetchCategory())
    },[])
    
    useEffect(()=>{
        dispatch(fetchBook({limit,page,filterCategory,filterText,order}))
        setSearchParams(`pages=${page}&category=${filterCategory.join()}&filterText=${filterText}&order=${order}`)
        setValueInputS(filterText)
    },[limit,page,filterCategory,filterText,order])

    function stPages(p:number){
        dispatch(editPage(p))
    }

    function overwriteSort(order:string){
        dispatch(addOrder(order))
    }

    function searchBooksByText(){
        dispatch(addFilterText(valueInputS))
    }


    function addCategoryFilter(cat:any){
        if(filterCategory.includes(cat)){
            dispatch(deleteFilterCategory(cat))
        }else{
           dispatch(addFilterCategory(cat))
        }
    }
    return(
        <Container fluid='md' style={{padding:'0',marginTop:'56px'}}>
            
                    <Slider/>
                    
                
                    <FilterInput valueInput={valueInputS} setValueInput={setValueInputS} onClickBtn={searchBooksByText} dropdown={dropdownItem} orderItem={order} orderClick={overwriteSort}/>

                    <Row style={{padding:'0',margin:'0'}}>

                        <Col lg={3}  sm={12} xs={12} style={{marginTop:"2vh"}}>
                            <FilterAcardion category={category} filterCategory={filterCategory} title="Categories" click={addCategoryFilter} />
                        </Col>

                        <Col lg={9} sm={12}> 
                           <Row >
                               
                                {statusСheck({content,error,loading})}
                               
                           </Row>
                        </Col>
                    </Row>
                    
                    <Pagination className="d-flex justify-content-center mt-4">
           
                            {pagination({page,limit,count,clickPage:stPages})}                 
           
                    </Pagination>
            
        </Container>
    )
}

export default Home