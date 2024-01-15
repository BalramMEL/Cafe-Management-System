import React from "react";
import './Cards.css';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const ItemsCard = (props) => {
    const handleAddToCart = () => {
        // Add your logic for adding to cart here
        console.log(`Item added to cart: ${props.name}`);
    };

    return (
        <>
        <Card style={{ width: '18rem' }} className="item-card">
            <Link to={`/product/${props.id}`}>
                <Card.Img variant="top" onClick={() => window.scrollTo(0, 0)} src={props.image} alt="" />
            </Link>
                <Card.Body>
                    <div className="d-flex justify-content-between">
                        <Card.Title className="fw-bold " style={{color: "#5F8670"}}>{props.Category}</Card.Title>
                        <Card.Text className="fst-italic fw-bolder">
                            {props.Name}
                        </Card.Text>
                    </div>
               
                    <div>
                        {props.description}
                    </div>

                    <div className="d-flex justify-content-between mt-3">
                        <Button variant="secondary" onClick={handleAddToCart}>
                            Add to Cart
                        </Button>

                         <Card.Text className="fw-bold">
                            ₹ {props.price}
                        </Card.Text>
                    </div>
            </Card.Body>
        </Card >
        </>
    );
}

export default ItemsCard;