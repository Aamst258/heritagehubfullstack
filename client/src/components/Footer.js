import React from 'react';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../Styles/footer.css';

function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <div className="container ">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="text-center">
              <div className="footer-logo">
                <h1>Heritage Hub</h1>
              </div>
              <div className="main-info">
                <p><i className="bx bxs-location-plus"></i> RV Vidyanikethan Post, 8th Mile, Mysore Rd, Mailasandra, Bengaluru, Karnataka 560059</p>
                <p><i className="bx bxs-phone"></i>9986818644</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="text-center">
              <div className="soc-media">
                <a href="https://www.facebook.com/" className="text-light me-3"><i className="bx bxl-facebook-square"></i></a>
                <a href="https://twitter.com/?lang=en" className="text-light me-3"><i className="bx bxl-twitter"></i></a>
                <a href="https://www.linkedin.com/" className="text-light me-3"><i className="bx bxl-linkedin"></i></a>
                <a href="https://www.youtube.com/" className="text-light me-3"><i className="bx bxl-youtube"></i></a>
                <a href="https://www.instagram.com/" className="text-light me-3"><i className="bx bxl-instagram"></i></a>
                <a href="https://in.pinterest.com/" className="text-light me-3"><i className="bx bxl-pinterest"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <div className="tags">
              <Link to="/footer" className="text-light me-3">About</Link>
              <Link to="/footer" className="text-light me-3">Contact Us</Link>
              <Link to="/footer" className="text-light me-3">Help</Link>
              <Link to="/footer" className="text-light me-3">Privacy Policy</Link>
              <Link to="/footer" className="text-light me-3">Disclaimer</Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <p className="text-muted">Copyright © 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
