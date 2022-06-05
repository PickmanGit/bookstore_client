import { Button, Card, CloseButton, Form, Nav } from "react-bootstrap";
import { BsStar, BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { pageOptions } from "../../InitialValues";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addWarningMessage } from "../../store/reducer/messageReducer";
// import style from './CardBook.module.css';

const CardBook = ({basket,buyCheckBox,bookInfo}:any)=>{
    // console.log(bookInfo)
    const {authorized} = useAppSelector(state=>state.users) 
    const dispatch = useAppDispatch()
    function clickBtn(){
        if(authorized){

        }else{
            dispatch(addWarningMessage('Only authorized users can add items to the cart. Please login'))
        }
    }
    return(
        
            <Card style={{width:'100%'}}>
                    <Nav.Link style={{color:'black'}} as={Link} to={`/book_preview/${bookInfo.id}`}> 
                        <Card.Img variant="top" src={`http://localhost:7000/${bookInfo.image}`} /> 
                    </Nav.Link>
                    
                    {basket && <div style={{position:'absolute',top:'2pt',right:'2pt'}}><CloseButton /></div>}

                    <Card.Body>
                       <Nav.Link style={{color:'black',margin:'0',padding:'0'}} as={Link} to={`/book_preview/${bookInfo.id}`}>  
                            <Card.Title>
                                    {bookInfo.title} 
                            </Card.Title>
                        </Nav.Link>

                        <Card.Text className="m-0">
                            {bookInfo.author}
                        </Card.Text>

                        <div className="text-warning mb-2">
                            <BsStarFill/>
                        </div>
                        <div className="d-flex justify-content-between">
                            {basket ? '' : <Button onClick={()=>clickBtn()} variant="primary">Add to basket</Button>}  <div className="card_item__price d-flex align-items-center justify-content-between"> <h5 className="text-danger mx-2">{bookInfo.price} $</h5> {/*<h6 style={{opacity:'0.8'}}><s>10 $</s></h6>*/}</div>
                        </div>
                    </Card.Body>
            </Card>
       
    )
}

export default CardBook