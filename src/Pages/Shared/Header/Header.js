import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/Group 1329.png'
import './Header.css'
const Header = () => {
    return (
        <Container fluid>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} className="image" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-dark" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto link mx-auto">
                            <Link to="/home">Home</Link>
                            <Link to="/event">Event</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/contact">Contact</Link>

                        </Nav>
                        <Nav>
                            <Link > <button className=" register-button">Register</button>
                            </Link>
                            <Link >
                            <button className="login-button">Log-in</button>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default Header;