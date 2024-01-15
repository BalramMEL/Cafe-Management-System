import { Alert, Col, Container, Row, Table } from "react-bootstrap";
import './myOrder.css'
import { useEffect, useState } from "react";
import axios from "axios";

export default function CafeOrder(){

  const [orderList,setOrderList]=useState([]);

  

   useEffect(() => {
    axios.get(`http://localhost:8086/orders/orderitem/fetch`)
        .then((response) => {
            setOrderList(response.data);
            console.log(response.data);
        })
        
        .catch((error) => {
            console.error("Error fetching data:", error);
            // Handle the error, display a message to the user, retry the request, etc.
        });
    }, []);
    return(
        <Container fluid="md">
        <Row> 
          <div id="container"><Col><h1>My Orders</h1></Col></div>
        </Row>

        <Table className="mt-4 sm-8 lg md">
        <thead>
                <tr>
                  <th className="text-center "style={{ backgroundColor: '#325f53', color: '#ffffff' }}>
                    Product ID
                  </th>
                  <th className="text-center  "style={{ backgroundColor: '#325f53', color: '#ffffff' }}>Name</th>

                  <th className="text-center "style={{ backgroundColor: '#325f53', color: '#ffffff' }}>Category</th>
                  <th className="text-center "style={{ backgroundColor: '#325f53', color: '#ffffff' }}>Cafe</th>
                  <th className="text-center "style={{ backgroundColor: '#325f53', color: '#ffffff' }}>Price</th>
                
                  <th className="text-center "style={{ backgroundColor: '#325f53', color: '#ffffff' }}>Quantity</th>
                
                </tr>
              </thead>
        <tbody id="tbl_head">
        
        {
                orderList.map((o)=>{
                  return(
            <tr >
                <th>{o.orderItemId}</th>
                {/* <th>Food</th> */}
                <th className="text-center">{o.product ? o.product.name : 'N/A'}</th>
                <th className="text-center">{o.product && o.product.category ? o.product.category.name : 'N/A'}</th> 
                <th className="text-center">{o.order && o.order.cafe ? o.order.cafe.name : 'N/A'}</th>
                <th className="text-center">{o.product.price}</th>
                <th className="text-center">{o.quantity}</th>
                {/* <th>Order Time</th>
                <th>Order Status</th> */}
                {/* <th>Delivery Person</th>
                <th>Delivery Contact</th>
                <th>Delivery Time</th> */}

            </tr>
            )
                })
            } 
        </tbody>
        
        </Table>
        
      </Container>
    );
}