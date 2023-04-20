import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav,Button } from 'react-bootstrap';

function Header() {

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">tamil</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
         <Nav>
          <Nav.Item className="mr-2">
            <Button variant="outline-primary">Login</Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
