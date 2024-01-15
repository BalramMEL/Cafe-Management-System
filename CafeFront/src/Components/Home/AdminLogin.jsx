import { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    role: "", // Added role in credentials state
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8086/admin/login", credentials);
      // Assuming successful login, handle the response accordingly
      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Login failed: ", error.response?.data?.message || "An error occurred");
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left"></div>
        <div className="right">
          <h1>Admin Login</h1>
          <Form onSubmit={handleSubmit}>
            {/* <Form.Group controlId="formRole">
              <Form.Label>Role</Form.Label>
              <Form.Control
                as="select"
                name="role"
                onChange={handleChange}
                required
              >
                <option value="">Select User Type</option>
                <option value="Admin">Admin</option>
                <option value="Customer">Customer</option>
                <option value="Cafe">Cafe</option>
              </Form.Control>
            </Form.Group> */}
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
            {error && <div className="error">{error}</div>}
          </Form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
