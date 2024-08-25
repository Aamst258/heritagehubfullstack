import React from 'react';
import { Link } from 'react-router-dom';

const NavbarForOther = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ zIndex: 100 }}>
      <div className="container">
        <span className="navbar-brand" style={{ fontFamily: 'Alex Brush', fontSize: '32px' }}>
          Heritage hub
        </span>
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to="/places" className="nav-link active">Destinations</Link>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Login
              </span>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li><Link to="/login" className="dropdown-item">Normal User Login</Link></li>
                <li><Link to="/login-guide" className="dropdown-item">Guide Login</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Signup
              </span>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                <li><Link to="/signup" className="dropdown-item">Normal User Signup</Link></li>
                <li><Link to="/signup-guide" className="dropdown-item">Guide Signup</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarForOther;
