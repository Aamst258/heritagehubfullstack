import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import NavbarForOther from '../components/NavbarForOther';

const LoginGuide = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Retrieve guide data array from local storage
    const userDataArray = JSON.parse(localStorage.getItem('guides')) || [];
  
    // Find the guide with the entered email
    const guide = userDataArray.find(guide => guide.email === formData.email );
  
    // If user exists and password matches
    if (guide && guide.password === formData.password) {
      // Set the logged-in user ID in localStorage
      localStorage.setItem('loggedinUserId', guide.id);
      // Set a flag to indicate that the user is logged in
      localStorage.setItem('loggedin', true);
      // Redirect to dashboard or home page  
      // set the role 
      localStorage.setItem('userRole', guide.userRole);
      navigate('/');
    } else if (guide && guide.password !== formData.password) {
      // Handle case where password is incorrect
      alert('Invalid password');
    } else {
      // Handle case where user is not registered
      alert('User not registered');
    }
  };
  

  return (
    <>
      <NavbarForOther />
      <div className="container mt-5  mb-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Guide Login</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                </form>
                <p className="mt-3 text-center">
                  Don't have an account? <Link to="/signup-guide">Signup</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginGuide;
