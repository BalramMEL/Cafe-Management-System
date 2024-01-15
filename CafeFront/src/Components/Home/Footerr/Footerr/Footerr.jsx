import React from 'react';
import './FooterStyles.css'; 
import '@fortawesome/fontawesome-free/css/all.css';


export const Footer = () => {
  return (
    <div className="footer wow fadeIn" data-wow-delay="0.3s">
     
        <div className="row">
          <FooterContact />
        </div>
      
      <div className="footer-menu d-flex justify-content-center">
        <div className="f-menu">
          <a href="">About us</a>
          <a href="">Privacy policy</a>
          <a href="">Cookies</a>
          <a href="">Help</a>
          <a href="">FQAs</a>
        </div>
      </div>
      <div className="copyright d-flex justify-content-center">
      
          <div className="">
            <p className='text-light'>&copy; <a href="https://freewebsitecode.com" style={{textDecoration:'none'}}>Cafeto</a>, All Right Reserved.</p>
          </div>
         
        
      </div>
    </div>
  );
};

export const FooterContact = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="footer-contact ">
        <h2>Social</h2>
        
        <div className="footer-social">
          <a href="https://freewebsitecode.com/"><i className="fab fa-twitter"></i></a>
          <a href="https://facebook.com/freewebsitecode"><i className="fab fa-facebook-f"></i></a>
          <a href="https://freewebsitecode.com/"><i className="fab fa-instagram"></i></a>
          <a href="https://www.youtube.com/channel/UC9HlQRmKgG3jeVD_fBxj1Pw/videos"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
  );
};



export default Footer;

// export const FooterLink = ({ title, links }) => {
//   return (
//     <div className="d-flex justify-content-center">
//       <div className="footer-link">
//         <h2>{title}</h2>
//         {links.map((link, index) => (
//           <a key={index} href="#">{link}</a>
//         ))}
//       </div>
//     </div>
//   );
// };