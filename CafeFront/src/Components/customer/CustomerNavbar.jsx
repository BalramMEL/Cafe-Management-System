import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Styles/CustomerNavbar.css';
import axios from 'axios';

const CustomerNavbar = () => {
  const[category,setcategory]=useState([]);

  useEffect(()=>{

    axios.get(`http://localhost:8086/category/fetch`).then((response => {
            setcategory(response.data);
        }))
   
   },[])



  return (
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img src='https://cdn-icons-png.flaticon.com/512/9620/9620771.png' alt="CafeLogo" className="logo-img" />
        Cafeto</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Categories" id="basic-nav-dropdown">
            {
            category.map((category)=>{
                  return(
            <NavDropdown.Item key={category.id} >
            ({category.categoryId}) {category.name} 
            </NavDropdown.Item>
                )})}
          </NavDropdown>
          <Nav.Link as={Link} to="/aboutUs">
            About Us
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact Us
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/myCart">
            My Cart
          </Nav.Link>
          <Nav.Link as={Link} to="/myOrder">
            My Order
          </Nav.Link>
          <Nav.Link as={Link}  to="/customer/login">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomerNavbar;
