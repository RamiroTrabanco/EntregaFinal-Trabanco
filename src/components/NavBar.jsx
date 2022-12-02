import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavBarItems from './NavBarItems'
import Brand from './Brand'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'


function NavBar() {
                    return (
                        <>
                            <Navbar expand="xl" bg="dark" variant="dark">
                                <Container>
                                    <Navbar.Brand>
                                        <Link to="/" style={{"textDecoration" : "none"}}>
                                            <Brand />
                                        </Link>
                                    </Navbar.Brand>
                                    <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
                                            <NavBarItems />
                                    </Nav>
                                    <Nav className="me-auto" >
                                        <Link to="/cart">
                                            <CartWidget />
                                        </Link>
                                    </Nav>
                                </Container>
                            </Navbar>
                        </>
                    );
}

export default NavBar;