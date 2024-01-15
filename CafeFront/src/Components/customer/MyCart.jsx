import { useState, useEffect } from 'react';
import { Alert, Button, Col, Container, Row, Table } from 'react-bootstrap';
import { MDBContainer, MDBFooter } from 'mdb-react-ui-kit';
import './Styles/myCart.css';

export default function MyCart() {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from your backend API
    fetch('http://localhost:8086/products/details/approved')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setCartItems(data))
      .catch((error) => setError(error.message));
  }, []);
  

  return (
    <Container fluid="md">
      <Row>
        <div id="container">
          <Col>
            <h1>My Cart</h1>
          </Col>
        </div>
      </Row>

      <Table className="mt-4 sm-8 lg md">
        <thead id="tbl_head">
          <tr>
            <th>Food Name</th>
            <th>Category</th>
            <th>Cafe </th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {error ? (
            <tr>
              <td colSpan="7">Error loading data: {error}</td>
            </tr>
          ) : (
            cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.productName}</td>
                <td>{item.categoryName}</td>
                <td>{item.cafeName}</td>
                <td>{item.productPrice}</td>
                <td>{item.quantity}</td>
                <td><Button varient="danger" type="submit" >Update</Button> &nbsp;&nbsp;
                <Button style={{ backgroundColor: 'red', borderColor: 'red' }} type="submit" >Delete</Button></td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      <MDBFooter className="text-white ftr">
        <MDBContainer className="p-4"></MDBContainer>

        <div className="text-end p-3" id="footer">
          <Button  id="btn">
            CheckOut
          </Button>{' '}
        </div>
      </MDBFooter>
    </Container>
  );
}
