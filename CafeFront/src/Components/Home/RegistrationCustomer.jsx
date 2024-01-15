import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import axios from "axios";
import "./RegistrationCafe.css";

function RegisterCustomer() {
  const [validated, setValidated] = useState(false);
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    password: "",
    address: {
      contactNo: "",
      city: "",
      street: "",
      pincode: "",
    },
    role: "",
  });
  // const handleChange = (e) => {
  //   setCustomer({ ...customer, [e.target.name]: e.target.value });
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      name === "contactNo" ||
      name === "street" ||
      name === "city" ||
      name === "pincode"
    ) {
      // Update the nested 'address' object
      setCustomer({
        ...customer,
        address: {
          ...customer.address,
          [name]: value,
        },
      });
    } else if (name === "role") {
      // Update the 'userType' (Role) field
      setCustomer({
        ...customer,
        [name]: value,
      });
    } else {
      // Update top-level fields like name, email, password
      setCustomer({ ...customer, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      // console.log(event.target.value)
    }
    try {
      await axios.post("http://localhost:8086/customer/register", customer);
      console.log("Customer added successfully");
      // Reset form fields or perform other actions upon successful submission
    } catch (error) {
      console.error("Error adding customer: ", error);
      // Handle error scenario, show error message, etc.
    }

    setValidated(true);
  };

  return (
    <Container className="registercontainer mt-5 bg-light">
      <div>
        <h1 className="text-center mb-5">Register Here!!!</h1>
      </div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label className="label">Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              name="name"
              defaultValue=""
              onChange={handleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustomUsername">
            <Form.Label>Email Id</Form.Label>
            <InputGroup hasValidation>
              {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
              <Form.Control
                type="email"
                placeholder="Email"
                aria-describedby="inputGroupPrepend"
                name="email"
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose an email.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group
            className="mt-4"
            as={Col}
            md="6"
            controlId="validationCustomUsername"
          >
            <Form.Label>Password</Form.Label>
            <InputGroup hasValidation>
              {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
              <Form.Control
                type="password"
                placeholder="password"
                aria-describedby="inputGroupPrepend"
                name="password"
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please write a password.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group
            className="mt-4"
            as={Col}
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
                
                <option value="Customer">Customer</option>
                
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Please select a user type.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="6"
            className="mt-3"
            controlId="validationCustom03"
          >
            <Form.Label>Contact No</Form.Label>
            <Form.Control
              type="text"
              placeholder="contact"
              name="contactNo"
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid contact.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            className="mt-3"
            controlId="validationCustom04"
          >
            <Form.Label>Street</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              name="street"
              rows={3}
              placeholder="Street"
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            className="mt-3"
            md="6"
            controlId="validationCustom03"
          >
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="city"
              name="city"
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            className="mt-3"
            md="6"
            controlId="validationCustom05"
          >
            <Form.Label>Pincode</Form.Label>
            <Form.Control
              type="text"
              placeholder="pincode"
              name="pincode"
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid pincode.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>

        <div className="d-grid mt-5 gap-2 d-md-flex justify-content-md-center">
          <Button type="submit" variant="outline-success" className="px-4 py-2">
            Submit form
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default RegisterCustomer;
