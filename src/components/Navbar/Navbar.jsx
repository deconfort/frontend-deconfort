import React from "react";
import "./Navbar.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarHambur(props) {
  let { title1, title3, title4, title5, title6, title7 } = props;
  return (
    <Navbar bg="light" expand="lg" className="Ul-Navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link" className="Li-Navbar">{title1}</Nav.Link>
            <NavDropdown title="PRODUCTS" id="basic-nav-dropdown" className="Li-Navbar">
              <NavDropdown.Item href="#link" className="Li-Navbar">CHAIRS</NavDropdown.Item>
              <NavDropdown.Item href="#link" className="Li-Navbar">ARMCHAIRS</NavDropdown.Item>
              <NavDropdown.Item href="#link" className="Li-Navbar">FURNITURE</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#link" className="Li-Navbar">DECORATION</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className="Li-Navbar">{title3}</Nav.Link>
            <Nav.Link href="#link" className="Li-Navbar">{title4}</Nav.Link>
            <Nav.Link href="#link" className="Li-Navbar">{title5}</Nav.Link>
            <Nav.Link href="#link" className="Li-Navbar">{title6}</Nav.Link>
            <Nav.Link href="#link" className="Li-Navbar">{title7}</Nav.Link>

          </Nav>        
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavbarHambur;

