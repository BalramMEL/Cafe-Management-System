import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function CafeLogout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the authentication token from localStorage
    localStorage.removeItem("customerToken");

    // Redirect to the login page or any other desired route
    navigate("/cafe/login");
  };

  return (
    <Container className="mt-5">
      {/* <h1 className="text-center mb-4">Cafe Logout</h1> */}
      <Link to="/cafe/login"  onClick={handleLogout}>
        Logout
      </Link>
    </Container>
  );
}

export default CafeLogout;