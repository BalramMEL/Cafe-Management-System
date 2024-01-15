import React from "react";
import './AboutUs.css'; // Make sure to import your CSS file where you define the styles for the background image

const AboutUs = () => {
  const backgroundImageStyle = {
    backgroundImage: 'url("https://img.freepik.com/free-photo/high-angle-shot-coffee-beans-jars-breakfast-table-with-some-pastry_181624-5864.jpg")', // Replace with the path to your image file
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // Set a minimum height to cover the whole viewport
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  };

  const contentStyle = {
    backgroundColor: 'white',
    padding: '20px',
    maxWidth: '800px', // Example max width for content
    margin: '0 auto' // Center the content horizontally
  };

  return (
    <div style={backgroundImageStyle}>
      <div style={contentStyle}>
        <div className="text-center">
          <h2>About Us</h2>
        </div>
        <h4>WHO ARE WE ?</h4>
        <p>
          It happens millions of times each week – a customer receives a drink from
          a Cafeto – but each interaction is unique. It’s just a moment in time –
          just one hand reaching over the counter to present a cup to another
          outstretched hand. But it’s a connection....
        </p>
        <p>
          We make sure everything we do honors that connection – from our commitment
          to the highest quality coffee in the world, to the way we engage with our
          customers and communities to do business responsibly. From our beginnings
          as a single store over forty years ago, in every place that we’ve been,
          and every place that we touch, we've tried to make it a little better than
          we found it.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
