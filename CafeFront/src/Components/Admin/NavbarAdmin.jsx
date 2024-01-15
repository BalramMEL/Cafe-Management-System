// Navbar.js
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import "./Styles/Navbar.css";
import './Styles/Admin.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const NavbarAdmin = () => {

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
        Cafeto
      </Navbar.Brand>
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
          
          <Nav.Link as={Link} to="/registerAdmin">
            Register Admin
          </Nav.Link>
          <Nav.Link as={Link} to="/addCategory">Add Category</Nav.Link>
          <Nav.Link as={Link} to="/allCatrgories">All Categories</Nav.Link>
          <Nav.Link as={Link} to="/allCafes">All Cafes</Nav.Link>
          
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/admin/login">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
   

  );
};

export default NavbarAdmin;


