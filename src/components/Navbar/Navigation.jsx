import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../Images/logo.jpeg"
import "./Navbar.css"
import { Clock } from "./Time";

function Navigation() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <Navbar expanded={expanded} expand="lg" className="topnavbar">
      <Navbar.Brand as={Link} to="/">
        <img src={logo} alt="Activ Realty" className="logo"/>
      </Navbar.Brand>
      <Navbar.Toggle onClick={handleToggle} />
      <Navbar.Collapse>
        <Nav className="ml-auto navlinks">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/planet">
            Planet
          </Nav.Link>
          <Nav.Link as={Link} to="/people">
            People
          </Nav.Link>
          <Nav.Link as={Link} to="/politics">
            Politics
          </Nav.Link>
        </Nav>     
      </Navbar.Collapse>
    </Navbar>
    {/* <div className="dateandtime">Monday May 01, 2023 <span><Clock/></span></div> */}
    </>
  );
}

export default Navigation;