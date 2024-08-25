import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NavbarAuth = () => {  
  const navigate = useNavigate();
  const loggedinUserId = localStorage.getItem('loggedinUserId');
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const guides = JSON.parse(localStorage.getItem('guides')) || [];
  const loggedinUser = users.find(user => user.id === loggedinUserId);
  const loggedinGuide = guides.find(guide => guide.id === loggedinUserId);  
  const userRole = localStorage.getItem('userRole');

  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    localStorage.removeItem("loggedinUserId");
    localStorage.removeItem('userRole');
    navigate("/login");
  };

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
              <Link to="/" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/places" className="nav-link active">Destinations</Link>
            </li>
            {/* Conditionally render Book a Tour link */}
            {!loggedinGuide && ( // Hide Book a Tour link if logged-in user is a guide
              <li className="nav-item">
                <Link to="/book-tour" className=' nav-link active'>Book a Tour</Link>
              </li>
            )}
            <li className="nav-item">
              <button type="submit" className='nav-link active' onClick={handleLogout}>Logout</button>
            </li>
            {loggedinUser && userRole === 'User' && (
              <li className="nav-item">
                <Link to="/user-dashboard" className="nav-link">User Dashboard</Link>
              </li>
            )}
            {loggedinGuide && userRole === "Guide" && (
              <li className="nav-item">
                <Link to="/guide-dashboard" className="nav-link active">Guide Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAuth;
