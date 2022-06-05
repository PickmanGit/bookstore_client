import { Button, Card, Col, Container, Row } from "react-bootstrap";
import CardBook from "../../components/card/CardBook";
import FilterAcardion from "../../components/filters/filterBookAcardeon/FilterAcardion";


const Basket = ()=>{
    return(
        <Container fluid='md' style={{padding:'0',marginTop:'55px'}}>
          
        

            <Row style={{padding:'0',margin:'0'}}>
                
                <Col className="lg-order-first"  lg={3} xs={12} style={{marginTop:"2vh"}}>
                    <Card>
                        <Card.Header> <h3>500$</h3> </Card.Header>
                        <Card.Body>
                            <Card.Title>Free delivery worldwide</Card.Title>
                            <Card.Text>
                                Available. Dispatched from the UK in 4 business days
                            </Card.Text>
                            <Button variant="primary w-100">buy</Button>
                            
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={9} sm={12}> 
                    <Row >
{/*                         
                            <Col lg={4}  sm={12} style={{marginTop:"2vh"}}> 
                                <CardBook basket={true} />
                            </Col>
                            <Col lg={4}  sm={12} style={{marginTop:"2vh"}}> 
                                <CardBook basket={true} />
                            </Col>
                            <Col lg={4}  sm={12} style={{marginTop:"2vh"}}> 
                                <CardBook basket={true} />
                            </Col>
                            <Col lg={4}  sm={12} style={{marginTop:"2vh"}}> 
                                <CardBook basket={true} />
                            </Col> */}
         
             


                        
                    </Row>
                </Col>



            </Row>


        </Container>
    )
}

export default Basket;