import React, { useEffect, useState } from "react"
import {Alert, Container} from "react-bootstrap"

const AlertGlobalMessage = ({description,type,setShow}:any)=>{
    // const [show, setShow] = useState(true);
   
    return(
        <Container fluid='md' style={{position:"fixed",top:'60px',right:'0',left:'0',margin:'auto',zIndex:"100"}}>
            <Alert variant={type} onClose={()=>setShow()} dismissible>
                <Alert.Heading>{type}</Alert.Heading>
                <p>
                    {description}
                </p>
            </Alert>
        </Container>

    )
}

export default AlertGlobalMessage;