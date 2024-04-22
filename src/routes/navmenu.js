import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {LinkContainer} from 'react-router-bootstrap';

export default function NavMenu() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" >
          <LinkContainer to="/" >
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/music-groups-webapi" >
            <Nav.Link>Music Groups</Nav.Link>
          </LinkContainer>
          

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}