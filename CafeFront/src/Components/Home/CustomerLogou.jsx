import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function CustomerLogout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the authentication token from localStorage
    localStorage.removeItem("customerToken");

    // Redirect to the login page or any other desired route
    navigate("/login");
  };

  return (
    <Container className="mt-5">
     
     <Link to="/login"  onClick={handleLogout}>
        Logout
      </Link>
    </Container>
  );
}

export default CustomerLogout;