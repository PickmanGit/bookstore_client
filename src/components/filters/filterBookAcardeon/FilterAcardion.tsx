// import { Accordion } from "react-bootstrap"
// import FilterAcardionItem from "./FilterAcardionItem";
import { Accordion, Form, ListGroup } from "react-bootstrap";

const FilterAcardion = ({category,filterCategory,title,click}:any)=>{
    

    return(
        <Accordion defaultActiveKey="0" >
                <Accordion.Item eventKey={"acc-1"} >
                    <Accordion.Header>{title}</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup>

                            <Form>

                                {category.map((cat:any)=>
                                    <ListGroup.Item key={cat.id} style={{borderLeft:'0px',borderRight:'0px'}} className="d-flex justify-content-between">
                                        <h6 className="mt-2">{cat.title}</h6>
                                        <Form.Check className="mt-2" inline name="group1" defaultChecked={filterCategory.includes(cat.id) ? true : false} type='checkbox'id={`inline-checkbox-1`} onClick={()=>click(cat.id)}/>
                                    </ListGroup.Item>
                                )}
                    


                            </Form>

                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
        </Accordion>
    )
}

export default FilterAcardion;