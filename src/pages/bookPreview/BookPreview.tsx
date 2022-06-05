import { FC, useEffect, useState } from "react"
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { BsStarFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { bookPreviewAction } from "../../store/action-creators/book";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addWarningMessage } from "../../store/reducer/messageReducer";




const BookPreview :FC= ()=>{
    const params = useParams()
    const dispatch = useAppDispatch()
    const {bookPrev,loading} = useAppSelector(state=>state.bookPrev)
    const {authorized} = useAppSelector(state=>state.users)
    let starBook = []
    useEffect(()=>{
        dispatch(bookPreviewAction(Number(params.id)))
    },[])
    for(let i = 0 ; i < bookPrev.books.rating; i++){
        starBook.push(i)
    }

    function clickBtnBasket(){
        if(authorized){

        }else{
            dispatch(addWarningMessage('Only authorized users can add items to the cart. Please login'))
        }
    }

    function clickBtnWishlist(){
        if(authorized){

        }else{
            dispatch(addWarningMessage('Only authorized users can add items to the wishlist. Please login'))
        }
    }

    if(loading){
        return(
            <Container fluid='md' style={{padding:'0',marginTop:'55px'}}>
                <Spinner style={{position:"absolute",top:"0",bottom:"0",left:"0",right:"0",margin:"auto"}}  animation="border" variant="dark" />
            </Container>
        )
    }

    return(
        <Container fluid='md' style={{padding:'0',marginTop:'55px'}}>
            
        
            <Row style={{padding:'0',margin:'0'}}>
                
                <Col lg={9} sm={12} style={{marginTop:"2vh"}}> 
                    <Row>
                        <Col lg={4}><Card><img width={'100%'} src={"http://localhost:7000/"+bookPrev.books.image} alt="" /></Card></Col>
                        <Col lg={8}>
                            <Card className="w-100">
                               
                                    <Card.Body>
                                    <Card.Title style={{borderBottom:'solid grey 1px'}}><h4>{bookPrev.books.title}</h4></Card.Title>
                                    <div className="card_params">
                                        <div className="card_rating d-flex align-items-center">
                                            <h5 className="mx-2">ratings: </h5>{starBook.map(s=><BsStarFill key={s} style={{color:'orange'}} />)}
                                        </div>
                                        <div className="card_rating d-flex align-items-center">
                                            <h6 className="mx-2">language | {bookPrev.books.language}</h6>
                                        </div>
                                        <div className="card_rating d-flex align-items-center">
                                            <h6 className="mx-2">By (author) | <Link style={{color:'black',textDecoration:'underline black'}} to='/'>{bookPrev.books.author}</Link></h6>
                                        </div>
             
                                    </div>

                                    <Card.Text>
                                        {bookPrev.descriptions.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>

                <Col className="lg-order-first"  lg={3} xs={12} style={{marginTop:"2vh"}}>
                    <Card>
                        <Card.Header> <h3>{bookPrev.books.price} $</h3> </Card.Header>
                        <Card.Body>
                            <Card.Title>Free delivery worldwide</Card.Title>
                            <Card.Text>
                                Available. Dispatched from the UK in 4 business days
                            </Card.Text>
                            <Button onClick={()=>clickBtnBasket()} variant="primary w-100">Add to basket</Button>
                            <Button onClick={()=>clickBtnWishlist()} variant="light w-100 mt-2">Add to wishlist</Button>
                        </Card.Body>
                    </Card>
                </Col>



            </Row>


        </Container>
    )
}

export default BookPreview;