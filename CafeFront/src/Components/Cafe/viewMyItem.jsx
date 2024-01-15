import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Table, Button, Form, Modal } from 'react-bootstrap';
import "./Styles/viewMyItems.css";
// import { featchCafe } from '../../Service/CafeService';
import { useEffect, useState } from 'react';
import axios from 'axios';
 
    
function ViewMyItems() {
  
  const [showModal, setShowModal] = useState(false);
  const [ItemList,setItemList]=useState([]);
  const [selectedFoodItem, setSelectedFoodItem] = useState({
    name: "",
    category_id: 0,
    price: "",
  });

  const populateData=()=>{
    axios.get('http://localhost:8086/products/product/fetchAll').then((response => {
        setItemList(response.data);
    }))
  }
  

   useEffect(()=>{

    populateData();
    
   
   },[])

  const handleDeleteClick=(productId)=>{
          try{
             axios.delete(`http://localhost:8086/products/deleteProduct?productId=${productId}`)
             populateData();
          }catch(error){
                console.log(error)
          }

   }
   const handleShowModal = (item) => {
    setSelectedFoodItem({
      ...item,
      // Assuming the ID is stored in 'productId' field of the item object
      id: item.productId, // Set the ID in selectedFoodItem state
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8086/products/product/${selectedFoodItem.id}`, 
        // Pass only necessary fields for update (excluding 'id' from selectedFoodItem)
        {
          name: selectedFoodItem.name,
          category_id: selectedFoodItem.category_id,
          price: selectedFoodItem.price,
        }
      );
      console.log("Food updated:", response.data);
      populateData();
      handleCloseModal();
    } catch (error) {
      console.error("Error updating food:", error);
    }
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log("Changing", id, value);
    setSelectedFoodItem((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };

  return (
    <Container className='container mt-5 bg-light'>
      <Row className="justify-content-center">
        <Col xs={12} md={12}>
          <div className="all-categories">
            <h1 className="text-center mb-5">All Items</h1>
            <Table bordered hover className="table category-table">
              <thead >
                <tr>
                  <th className="text-center "style={{ backgroundColor: '#325f53', color: '#ffffff' }} >Product ID</th>
                  <th className="text-center "style={{ backgroundColor: '#325f53', color: '#ffffff' }} >Name</th>       
                   <th className="text-center"style={{ backgroundColor: '#325f53', color: '#ffffff' }} >Price</th>
                  <th className="text-center "style={{ backgroundColor: '#325f53', color: '#ffffff' }} >Action</th>

                </tr>
              </thead>
              <tbody className='tablerow'>
              
              {
                ItemList.map((c)=>{
                    return(
                    <tr>
                        <td className="text-center">{c.productId}</td>
                        <td className="text-center">{c.name}</td>
                        <td className="text-center">{c.price}</td>

                        <td className="text-center"><Button onClick={() => handleShowModal(c)}>Update</Button>&nbsp;&nbsp;&nbsp;
                       <Button variant="danger" onClick={() => handleDeleteClick(c.productId)}> Delete</Button>
                        </td>
                    
                    </tr>
                    )
                })
            } 
                
              </tbody>
            </Table>
            <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Food Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            <Form.Group controlId="name">
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                type="text"
                value={selectedFoodItem.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="category_id">
              <Form.Label>Category ID</Form.Label>
              <Form.Control
                type="text"
                value={selectedFoodItem.category_id}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>Item Price</Form.Label>
              <Form.Control
                type="text"
                value={selectedFoodItem.price}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ViewMyItems;