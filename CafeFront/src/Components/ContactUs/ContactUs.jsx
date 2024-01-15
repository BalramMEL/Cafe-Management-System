import React from 'react';
import './ContactUs.css';

const teamMembers = [
  {
    name: 'Piyush Shitole',
    email: 'Piyush@gmail.com',
    
  },
  {
    name: 'Ashwini Ugale',
    email: 'Ashwini@gmail.com',
    
  },
  {
    name: 'Krishna Doshi',
    email: 'Krishna@gmail.com',
    
  },
  {
    name: 'Shaina',
    email: 'Shaina@gmail.com',
    
  },
  {
    name: 'Balram Melkunde',
    email: 'Balram@gmail.com.com',
    
  },
  // Add details for other team members
];

const ContactUsPage = () => {
  return (
    <div className="contact-us-page">
      <h1>Contact Us</h1>
      <div className="team-members">
        <div className="member-cards-row">
          {teamMembers.slice(0, 3).map((member, index) => (
            <div key={index} className="member-card">
              <h2>{member.name}</h2>
              <p>Email: {member.email}</p>
            </div>
          ))}
        </div>
        <div className="member-cards-row">
          {teamMembers.slice(3).map((member, index) => (
            <div key={index} className="member-card">
              <h2>{member.name}</h2>
              <p>Email: {member.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ContactUsPage;
