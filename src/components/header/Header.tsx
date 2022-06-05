import { Container,Nav, Navbar, } from "react-bootstrap"
import { BsCart4 , BsFillBasketFill , BsHeart, BsPersonCircle ,BsStar} from "react-icons/bs";
import { Link} from "react-router-dom";
import { pageOptions } from "../../InitialValues";
import { useAppSelector } from "../../store/hooks";
const Header = ()=>{
    const {authorized} = useAppSelector((state) => state.users)
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top"> 
            <Container >
                <Link to='/'> <Navbar.Brand> Book-store</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">



                    <Nav className="justify-content-end flex-grow-1 ">
                         {authorized && 
                            <>
                                <Nav.Link as={Link} to={pageOptions.wishlist.src}>
                                        <BsHeart/>{pageOptions.wishlist.name} 
                                </Nav.Link>
                                <Nav.Link  as={Link}  to={pageOptions.basket.src}>
                                        <BsFillBasketFill/> {pageOptions.basket.name}    
                                </Nav.Link>
                            </> 
                         }


                            <Nav.Link  as={Link} to={authorized ? pageOptions.profile.src : pageOptions.entrance.src} eventKey={2} >
                                <BsPersonCircle/> {authorized  ? pageOptions.profile.name :pageOptions.entrance.name}
                            </Nav.Link>



                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;