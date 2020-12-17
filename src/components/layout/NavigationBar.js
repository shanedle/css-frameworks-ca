import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";


const NavigationBar = () => {
    return (
        <>
            <Navbar className="navigationbar" bg="light" expand="lg">
                <Container>
                    <NavLink exact to="/" >
                        <Navbar.Brand className="navigationbar__brand">The YAY Company</Navbar.Brand>
                    </NavLink>

                    <Navbar.Toggle className="navigationbar__toggle" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" md="auto">
                            <NavLink exact to="/" className="navigationbar__link">Home</NavLink>

                            <NavLink exact to="/news" className="navigationbar__link">News</NavLink>

                            <NavLink exact to="/contact" className="navigationbar__link">Contact</NavLink>
                        </Nav>

                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="" />
                            <Button className="navigationbar__searchbutton">Go</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;