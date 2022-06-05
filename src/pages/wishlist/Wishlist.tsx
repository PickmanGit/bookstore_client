import { Col, Container, Row } from "react-bootstrap";
import CardBook from "../../components/card/CardBook";
import FilterInput from "../../components/filters/filterBookInput/FilterInput";

const Wishlist = ()=>{
    return(
        <Container fluid='md' style={{padding:'0',marginTop:'55px'}}>
                   
                {/* <FilterInput/> */}

                <Row style={{padding:'0',margin:'0'}}>
                    <Col lg={12} sm={12}> 
                        <Row >
                            
                                <Col lg={3} md={6} sm={12} style={{marginTop:"2vh"}}> 
                                    {/* <CardBook/> */}
                                </Col>
                            
                        </Row>
                    </Col>
                </Row>


        </Container>
    )
}

export default Wishlist;