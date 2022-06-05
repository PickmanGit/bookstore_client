import { Container, Nav, Navbar } from "react-bootstrap"


const Footer = ()=>{
    return(
        // <Container fluid='md' style={{padding:'0',marginTop:'55px'}} style={{position:'absolute',width:'100%',bottom:'0'}}>
        <Container fluid='md' className="bg-dark text-light mt-5 footer_container" >

            <p className="text-center m-0 pt-4 pb-4">Footer</p>
        </Container>

    )
}

export default Footer;