import React, { useState } from "react";
import "./Styles/AddFood.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";

const AddFood = () => {

  const [foodDetails, setFoodDetails] = useState({
    name: "",
    category_id: 0,
    price: "",
    
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFoodDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to add food details to the database
      const response = await axios.post(
        "http://localhost:8086/products/product/register", 
        foodDetails
      );
      console.log("Food added:", response.data);
      // Clear the form after successful submission if needed
      setFoodDetails({
        name: "",
        category_id: 0,
        price: "",
        
      });
    } catch (error) {
      console.error("Error adding food:", error);
    }
  };


  return (
    <div className="container mt-4 ">
      <div className="card cards">
      <div className="card-body">
      <h5 className="card-title">Add Item</h5>
      <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="firstInput"  className="form-label">Item Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Item name"
                    value={foodDetails.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                <label htmlFor="description" className="form-label">Item Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    placeholder="Enter description"
                    rows="3" // Adjust rows as needed
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="firstInput"  className="form-label">Category</label>
                  <input
                    type="text"
                    className="form-control"
                    id="category_id"
                    placeholder="Enter category ID"
                    value={foodDetails.category_id}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="secondInput"  className="form-label">Item Price</label>
                  <input
                    type="text"
                    className="form-control"
                    id="price"
                    placeholder="Enter price"
                    value={foodDetails.price}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            {/* <div className="row mb-3">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="firstInput"  className="form-label">Select 1st Image</label>
                  <input
                    type="file"
                    className="form-control"
                    id="firstInput"
                    placeholder="Enter text"
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="secondInput"  className="form-label">Select 2nd Image</label>
                  <input
                    type="file"
                    className="form-control"
                    id="secondInput"
                    placeholder="Enter text"
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="secondInput"  className="form-label">Select 3rd Image</label>
                  <input
                    type="file"
                    className="form-control"
                    id="secondInput"
                    placeholder="Enter text"
                  />
                </div>
              </div>
            </div> */}
            <div>
                <div className="col">
                    <button>Submit</button>
                </div>
            </div>
          </form>

        </div>
    </div>
</div>
      
        
        
  );
};

export default AddFood;
