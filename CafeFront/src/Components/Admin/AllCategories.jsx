import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
// import "./Styles/AllCategories.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import "./Styles/AllCategories.css";
 
    
function AllCategories() {
  const[category,setcategory]=useState([]);

  const populateData=()=>{
    axios.get("http://localhost:8086/category/fetch").then((response => {
      setcategory(response.data);
  }))
  }
  useEffect(()=>{

    populateData();
   
   },[])

   const handleDeleteClick=(categoryId)=>{
    try{
       axios.delete(`http://localhost:8086/deleteCategory?categoryId=${categoryId}`)
       populateData();
    }catch(error){
          console.log(error)
    }

}

  return (
    <Container className='container mt-5 bg-light'>
      <Row className="justify-content-center">
        <Col xs={12} md={12}>
          <div className="all-categories">
            <h1 className="text-center mb-5">All Categories</h1>
            <Table bordered hover className="table category-table">
              <thead >
                <tr>
                  <th className="text-center "style={{ backgroundColor: '#325f53', color: '#ffffff' }}>Category ID</th>
                  <th className="text-center "style={{ backgroundColor: '#325f53', color: '#ffffff' }}>Category</th>                 
                  <th className="text-center "style={{ backgroundColor: '#325f53', color: '#ffffff' }}>Description</th>
                  <th className="text-center "style={{ backgroundColor: '#325f53', color: '#ffffff' }}>Action</th>
                </tr>
              </thead>
              <tbody className='tablerow'>
                {category.map((category) => (
                  <tr key={category.id}>
                    <td className="text-center">{category.categoryId}</td>
                    <td className="text-center">{category.name}</td>                 
                    <td className="text-center">{category.description}</td>
                    <td><Button variant="danger" onClick={() => handleDeleteClick(category.categoryId)}> Delete</Button></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AllCategories;