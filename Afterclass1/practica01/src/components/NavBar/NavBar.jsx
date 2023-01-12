import { Container, Nav,Navbar, NavDropdown } from 'react-bootstrap';
import { CartWidget } from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Gorras</Nav.Link>
                        <Nav.Link href="#pricing">Tennis</Nav.Link>
                        <Nav.Link href="#deets">Consolas</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link><CartWidget /></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar