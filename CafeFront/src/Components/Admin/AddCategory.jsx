import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";
import './Styles/AddCategory.css';

const AddCategory = () => {
  const [categoryTitle, setCategoryTitle] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");

  const handleAddCategory = async () => {
    try {
      // Make a POST request to your backend API endpoint
      const response = await axios.post("http://localhost:8086/categories", {
        name: categoryTitle,
        description: categoryDescription,
      });

      // Handle the response if needed
      console.log("Category added successfully", response.data);

      // You can also navigate to another page or perform any other action upon success
    } catch (error) {
      // Handle errors
      console.error("Error adding category", error);
    }
  };

  return (
    <div className="form">
      <Form className="formtable">
        {/* ... (existing form code) */}
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Container fluid>
            <Row className="row">
              <Col>
                <Form.Label>Add Category</Form.Label>
                <br />
                <br />
              </Col>
            </Row>
          </Container>

          <Form.Label>Category Title</Form.Label>
          <br />
          <Form.Control
            type="text"
            placeholder="enter title"
            value={categoryTitle}
            onChange={(e) => setCategoryTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Category Description</Form.Label>
          <br />
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="enter description"
            value={categoryDescription}
            onChange={(e) => setCategoryDescription(e.target.value)}
          />
        </Form.Group>
        <Button onClick={handleAddCategory} className="button">
          Add Category
        </Button>
      </Form>
    </div>
  );
};

export default AddCategory;