import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";



function NavbarHambur(props) {
  let { title1, title3, title4, title5, title6, title7, desk } = props;



  return (
    <Navbar expand="lg" className="Ul-Navbar back-transparent-navbar">
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
              <NavDropdown.Item href="" className="Li-Navbar desplegable-navbar">
                <Link to={`productCategory`} className="list-style-none">
                  DESK
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="" className="Li-Navbar desplegable-navbar">
                <Link to={`productTables`} className="list-style-none">
                  TABLES
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="" className="Li-Navbar desplegable-navbar">
                <Link to={`productVases`} className="list-style-none">
                  VASES
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="" className="Li-Navbar desplegable-navbar">
                <Link to={`productFrames`} className="list-style-none">
                  FRAMES
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="" className="Li-Navbar desplegable-navbar">
                <Link to={`productCushions`} className="list-style-none">
                  CUSHIONS
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="" className="Li-Navbar desplegable-navbar">
                <Link to={`productDiffuser`} className="list-style-none">
                  DIFFUSER
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="" className="Li-Navbar desplegable-navbar">
                <Link to={`productMirrors`} className="list-style-none">
                  MIRRORS
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="" className="Li-Navbar desplegable-navbar">
                <Link to={`productBlankets`} className="list-style-none">
                  BLANKETS
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="" className="Li-Navbar desplegable-navbar">
                <Link to={`productChairs`} className="list-style-none">
                  CHAIRS
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="" className="Li-Navbar">
              <Link className='linkNav' to={"/locals"}>{title3}</Link>
            </Nav.Link>
            <Nav.Link href="" className="Li-Navbar">
              <Link className='linkNav' to={'/aboutus'}>{title4}</Link>
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
