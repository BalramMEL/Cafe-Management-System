import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import "./Styles/CafeList.css";
// import { featchCafe } from '../../Service/CafeService';
import { useEffect, useState } from 'react';
import axios from 'axios';
 
    
function AllCafe() {
  const [cafeList,setCafeList]=useState([]);

  const populateData=()=>{
    axios.get("http://localhost:8086/cafe/fetch").then((response => {
      setCafeList(response.data);
  }))
  }
  useEffect(()=>{

    populateData();
   
   },[])

  const handleDeleteClick=(cafeId)=>{
    try{
      axios.delete(`http://localhost:8086/deleteCafe?cafeId=${cafeId}`)
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
            <h1 className="text-center mb-5">All Cafes</h1>
            <Table bordered hover className="table category-table">
              <thead >
                <tr>
                  <th className="text-center " style={{ backgroundColor: '#325f53', color: '#ffffff' }}>Cafe ID</th>
                  <th className="text-center " style={{ backgroundColor: '#325f53', color: '#ffffff' }}>Name</th>                 
                  <th className="text-center " style={{ backgroundColor: '#325f53', color: '#ffffff' }}>Email Id</th>
                  <th className="text-center " style={{ backgroundColor: '#325f53', color: '#ffffff' }}>Phone No</th>
                  <th className="text-center " style={{ backgroundColor: '#325f53', color: '#ffffff' }}>Address</th>
                  <th className="text-center " style={{ backgroundColor: '#325f53', color: '#ffffff' }}>Action</th>

                </tr>
              </thead>
              <tbody className='tablerow'>
              
              {
                cafeList.map((c)=>{
                    return(
                    <tr>
                        <td>{c.cafeId}</td>
                        <td>{c.name}</td>
                        <td>{c.email}</td>
                        <td>{c.address?.contactNo}</td>
                        <td>{c.address?.city}-({c.address?.street})[{c.address?.pincode}]</td>
                        <td><Button variant="danger" onClick={()=>handleDeleteClick(c.cafeId)}> Delete</Button>&nbsp;&nbsp;&nbsp;
                       
                        </td>
                    
                    </tr>
                    )
                })
            } 
                
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AllCafe;