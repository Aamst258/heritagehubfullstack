import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import NavbarForOther from '../components/NavbarForOther';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Retrieve user data array from local storage
    const userDataArray = JSON.parse(localStorage.getItem('users')) || [];
  
    // Find the user with the entered email
    const user = userDataArray.find(user => user.email === formData.email );
  
    // If user exists and password matches
    if (user && user.password === formData.password) {
      // Set the logged-in user ID in localStorage
      localStorage.setItem('loggedinUserId', user.id); 
      localStorage.setItem('userRole', user.userRole); 
      // Set a flag to indicate that the user is logged in
      localStorage.setItem('loggedin', true);
      // Redirect to  home page
      navigate('/');
    } else if (user && user.password !== formData.password) {
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
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Login</h2>
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
                    <button type="submit" className="btn btn-primary">Login</button>
                  </div>
                </form>
                <p className="mt-3 text-center">
                  Don't have an account? <Link to="/signup">Signup</Link>
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

export default Login;
