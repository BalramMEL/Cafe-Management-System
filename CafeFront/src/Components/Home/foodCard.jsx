import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const foodCard = () => {
  return (
    <div className="container mt-4">
      <div className="card">
        <img
          src="https://via.placeholder.com/350x150" // Replace with your image URL
          className="card-img-top"
          alt="Card Img"
        />
        <div className="card-body">
          <h5 className="card-title">Card Title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default foodCard;