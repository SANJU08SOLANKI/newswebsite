import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  Link
} from "react-router-dom"


export default function Navigationbar() {
  return (

    <div>
     
       <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
            <Nav.Link as={Link} to="/"> General</Nav.Link>
              <Nav.Link as={Link} to="/sports"> Sports</Nav.Link>
              <Nav.Link as={Link} to="/business"> Business</Nav.Link>
              <Nav.Link as={Link} to="/entertainment">Entertainment</Nav.Link>
              <Nav.Link as={Link} to="/science"> Science</Nav.Link>
              <Nav.Link as={Link} to="/health"> Health</Nav.Link>
              <Nav.Link as={Link} to="/technology">Technology</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    

  );
}
