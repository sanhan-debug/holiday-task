import React from 'react'
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserNavbar() {
    return (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">
            <img
              src="https://preview.colorlib.com/theme/florist/img/logo.png"
              alt="Florist Logo"
              style={{ height: '30px' }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/shop">Shop</Nav.Link>
              <Nav.Link href="/pages">Pages</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <div className="navbar-icons">
              <FaSearch className="icon mx-2" />
              <FaHeart className="icon mx-2" />
              <FaShoppingCart className="icon mx-2" />
            </div>
          </Navbar.Collapse>
        </Navbar>
      );
}

export default UserNavbar