import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



export default function Navigation()
{



    return(
        <>
        <Navbar expand="md" sticky='top' className="bg-body-tertiary mb-4 text-end">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link target='_blank' href="https://github.com/aaron-webdev/portfolio-repo">GitHub</Nav.Link>
                    <Nav.Link target='_blank' href="https://www.linkedin.com/in/aaron-clure/">LinkedIn</Nav.Link>
                    <Nav.Link href="#">Back to top</Nav.Link>
                    <NavDropdown title="Jump to project" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">XNK website -Artist</NavDropdown.Item>
                        <NavDropdown.Item href="#">Bake That Dough website -Retail</NavDropdown.Item>
                        <NavDropdown.Item href="#">Exposing Beauty -Photographer</NavDropdown.Item>
                        <NavDropdown.Item href="#">Ultimate Edge IP Law  -Service</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

                                /*
Add projects ti make this feel complete
                                */