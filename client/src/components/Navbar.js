import React, { useState, useEffect } from 'react';
import '../Styles/App.css'  
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const navigate = useNavigate();
  const loggedinUserId = localStorage.getItem('loggedinUserId');
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const guides = JSON.parse(localStorage.getItem('guides')) || [];
  const loggedinUser = users.find(user => user.id === loggedinUserId);
  const loggedinGuide = guides.find(guide => guide.id === loggedinUserId);  
  const userRole = localStorage.getItem('userRole');

  const handleLogout = () => {
    localStorage.removeItem('loggedin');
    localStorage.removeItem("loggedinUserId")
    localStorage.removeItem('userRole')
    navigate('/login');
  }; 

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="position-relative img-responsive"
        style={{
          backgroundImage: "url('/images/AgraFort.png')",
          backgroundSize: '100%',
          backgroundPosition: 'top right',
          backgroundRepeat: 'no-repeat',
          maxWidth: '100%',
          width: '100%',
          height: '90vh',
          overflow: 'hidden', // Ensure the overflow is hidden to avoid the scroll bar
        }}
      >
        {/* Text content */}
        <div
          className="position-fixed  translate-middle p-1"
          style={{
            visibility: isNavbarFixed ? 'hidden' : 'visible', // Hide the text if navbar is fixed
            zIndex: 1000, // Ensure the text appears above the navbar 
            top:'35%',
             left:'50%'
          }}
        >
          <h2 className=" ml-0" style={{ fontFamily: 'Alex Brush', fontSize: '40px' }}>
            Unveiling India's Timeless
          </h2>
          <h1 className="text-white fw-bold ml-0" style={{ fontFamily: 'Poppins', fontSize: '80px' }}>
            treasure.
          </h1>
        </div>

        {/* Navbar */}
        <nav
          className={`navbar navbar-expand-lg fixed-top ${
            isNavbarFixed ? 'bg-dark' : 'bg-transparent'
          } navbar-dark  fw-bold px-md-3`}
          style={{ zIndex: 100 }} // Ensure navbar is above text
        >
          <div className="container">
            <span className="navbar-brand" style={{ fontFamily: 'Alex Brush', fontSize: '32px' }}>
              Heritage hub
            </span>
            <button
              className="navbar-toggler ms-auto fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/places" className="nav-link active">Destinations</Link>
                </li>
                
                {!loggedinGuide && (
                  <li className="nav-item">
                    <Link to="/book-tour" className=' nav-link active'>Book a Tour</Link>
                  </li>
                )}
                <li className="nav-item">
                  <button type="submit" className='nav-link active' onClick={handleLogout}>Logout</button>
                </li>   
                {loggedinUser && userRole === 'User' && (
                  <li className="nav-item">
                    <Link to="/user-dashboard" className="nav-link active">User Dashboard</Link>
                  </li>
                )}
                {loggedinGuide && userRole === "Guide" && (
                  <li className="nav-item  active">
                    <Link to="/guide-dashboard" className="nav-link active">Guide Dashboard</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>  
      </div>
    </>
  );
};

export default Navbar;
