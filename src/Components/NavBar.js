import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
  return (
    <div>
         <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">ArtShop</Navbar.Brand>
    <Nav className="me-auto">
     
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default NavBar