import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './HomeNavbar.css'; // Import your custom CSS file
import HomePage from './HomePage/HomePage';


const HomeNavbar = () => {
  return (
    
    <>
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Brand as={Link} to="/homePage">
        <img src='https://cdn-icons-png.flaticon.com/512/9620/9620771.png' alt="CafeLogo" className="logo-img" />
        Cafeto
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <NavDropdown title="Categories" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/category1">
              Category 1
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category2">
              Category 2
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category3">
              Category 3
            </NavDropdown.Item>
          </NavDropdown> */}
          <Nav.Link as={Link} to="/aboutUs">
            About Us
          </Nav.Link>
          <Nav.Link as={Link} to="/contactUs">
            Contact Us
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/register-cafe">
            Register Cafe
          </Nav.Link>
          <Nav.Link as={Link} to="/register-customer">
            Register Customer
          </Nav.Link>
          <Nav.Link as={Link} to="/cafe/login">
           Cafe Login
          </Nav.Link>
          <Nav.Link as={Link} to="/customer/login">
           Customer Login
          </Nav.Link>
          <Nav.Link as={Link} to="/admin/login">
            Admin Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <HomePage/>

    </>
  );
};

export default HomeNavbar;
