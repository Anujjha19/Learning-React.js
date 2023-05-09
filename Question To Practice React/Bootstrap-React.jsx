// Install the boot strap in your react project and use the bootstrap features. Create a navbar there
// and open the options given in the navbar when it is clicked.import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const MyNavbar = () => {
    const styles = {
        navbar: {
            backgroundColor: '#4CAF50',
        },
        brand: {
            color: 'white',
            fontWeight: 'bold',
        },
        link: {
            color: 'white',
        },
    };

    return (
        <>
            <Navbar style={styles.navbar} expand="lg">
                <Navbar.Brand style={styles.brand} href="#home">
                    React Task
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link style={styles.link} href="#home">
                            Home
                        </Nav.Link>
                        <Nav.Link style={styles.link} href="https://www.flipkart.com/" target="_blank">
                            Flipkart
                        </Nav.Link>
                        <Nav.Link style={styles.link} href="https://www.myntra.com/" target="_blank">
                            Myntra
                        </Nav.Link>
                        <Nav.Link style={styles.link} href="https://www.ajio.com/" target="_blank">
                            Ajio
                        </Nav.Link>
                        <NavDropdown title="Social Media" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://www.facebook.com/" target="_blank">Facebook</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.instagram.com/" target="_blank">Instagram</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.linkedin.com/" target="_blank">LinkedIn</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <h5>
                Shopping Site and Their Marketing Platforms
            </h5>
        </>
    );
};

export default MyNavbar;
