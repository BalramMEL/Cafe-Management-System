import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// import { AuthContext } from "../../context/authContext";
import "./login.css";
import axios from "axios";
import { Form, InputGroup } from "react-bootstrap";
import NavbarAdmin from "../Admin/NavbarAdmin";

const Login = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });

  //   const [err, setErr] = useState(null);

  const navigate = useNavigate();

  //   const handleChange = (e) => {
  //     setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  //   };

  //   const { login } = useContext(AuthContext);

  //   const handleLogin = async (e) => {
  //     e.preventDefault();

  //     try {
  //       await login(inputs);
  //       navigate("/");
  //     } catch (err) {
  //       setErr(err.response.data);
  //     }
  //   };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.stopPropagation();
        return;
      }

      if (formData.role) {
        try {
          let response;
          let roles;
          let userId;
          let name;
      
          if (formData.role === "Admin") {
            response = await axios.post("http://localhost:8086/admin/login", formData);
            console.log(response);
          } else if (formData.role === "Customer") {
            response = await axios.post("http://localhost:8086/customer/login", formData);
            console.log(response);
          } else if (formData.role === "Cafe") {
            response = await axios.post("http://localhost:8086/cafe/login", formData);
          } 
      
          if (response) {
            roles = response.data.role;
            userId = response.data.status.userId;
            name = response.data.status.name;

            console.log("Login successful");
            // Reset form fields or perform other actions upon successful login
            setValidated(true);
      
            if (formData.role) {
              if (response.data.role === "admin") {
                navigate("/adminNavigation");
              } else if (response.data.role === "Customer") {
                navigate("/customer");
              } else if (response.data.role === "Cafe") {
                navigate("/cafe");
              } else if (response.data.role === "Delivery Person") {
                navigate("/delivery-dashboard");
              }
            } else {
              console.error("Invalid role or roles not present in response");
              // Handle invalid role scenario
            }
          } else {
            console.error("No response received from server");
            // Handle no response scenario
          }
        } catch (error) {
          console.error("Error while logging in: ", error);
          // Handle error scenario
        }
      } else {
        console.error("Role not selected");
        // Handle scenario where no role is selected
      }

      
    } catch (error) {
      console.error("Error logging in: ", error);
      // Handle error scenario, show error message, etc.
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left"></div>
        <div className="right">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <Form.Group
              className="mt-4"
              md="6"
              controlId="validationCustomUsername"
            >
              <Form.Label>Role</Form.Label>
              <InputGroup hasValidation>
                {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                <Form.Control
                  as="select"
                  aria-describedby="inputGroupPrepend"
                  name="role"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select User Type</option>
                  <option value="Admin">Admin</option>
                  <option value="Customer">Customer</option>
                  <option value="Cafe">Cafe</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please select a user type.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <label className="labels">Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            {/* {err && err} */}
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
