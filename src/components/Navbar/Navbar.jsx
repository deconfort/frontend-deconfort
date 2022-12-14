import React from "react";
import { Link } from "react-router-dom";
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
            <Nav.Link href="" className="Li-Navbar">
              <Link className='linkNav' to={"/"}>{title1}</Link>
            </Nav.Link>
            <NavDropdown
              title="PRODUCTS"
              id="basic-nav-dropdown"
              className="Li-Navbar"
            >
              <NavDropdown.Item href="#link" className="Li-Navbar">
                CHAIRS
              </NavDropdown.Item>
              <NavDropdown.Item href="#link" className="Li-Navbar">
                ARMCHAIRS
              </NavDropdown.Item>
              <NavDropdown.Item href="#link" className="Li-Navbar">
                FURNITURE
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#link" className="Li-Navbar">
                DECORATION
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="" className="Li-Navbar">
              <Link className='linkNav' to={"/locals"}>{title3}</Link>
            </Nav.Link>
            <Nav.Link href="" className="Li-Navbar">
              {title4}
            </Nav.Link>
            <Nav.Link href="" className="Li-Navbar">
              <Link className='linkNav' to={"/faqs"}>{title5}</Link>
            </Nav.Link>
            <Nav.Link href="" className="Li-Navbar">
              <Link className='linkNav' to={"/forum"}>{title6}</Link>             
            </Nav.Link>
            <Nav.Link href="" className="Li-Navbar">
              <Link className='linkNav' to={"/contact"}>{title7}</Link>
            </Nav.Link>
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHambur;
