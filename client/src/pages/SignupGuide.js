import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarForOther from '../components/NavbarForOther';
import Footer from '../components/Footer';
import placesData from '../data/placesData.json'; 
import { v4 as uuidv4 } from 'uuid';

const SignupGuide = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    languagesKnown: [],
    placesKnown: [],
  });

  const { name, email, password, languagesKnown, placesKnown } = formData;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked, options } = e.target;
  
    if (type === 'checkbox') {
      if (checked) {
        setFormData({ ...formData, [name]: [...formData[name], value] });
      } else {
        setFormData({ ...formData, [name]: formData[name].filter(item => item !== value) });
      }
    } else if (type === 'select-multiple') {
      const selectedOptions = Array.from(options).filter(option => option.selected).map(option => option.value);
      setFormData({ ...formData, [name]: selectedOptions });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Retrieve user data array from local storage
    let userDataArray = JSON.parse(localStorage.getItem('guides')) || [];
  
    
    
    // Get the ID of the newly signed-up user
    const newUserId = uuidv4();  
    // Add the user role "Guide" to the form data
  const formDataWithUserRole = {
    ...formData,
    userRole: "Guide",
    id: newUserId 
  };

  // Add the new guide to the guide data array
  userDataArray.push(formDataWithUserRole);

  
    // Update the users array in localStorage
    localStorage.setItem('guides', JSON.stringify(userDataArray));
  
   
  
    // Redirect to dashboard or home page
    navigate('/login-guide');
  };
  

  return ( 
    <> 
      <NavbarForOther />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Signup as Guide</h2>
                <form onSubmit={handleSubmit}>
                  {/* Rest of the form */}  
                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
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
                  <div className="mb-3">
                    <p className='text-center'> Choose a places:</p>
                    {/* Scroll-down interface for selecting multiple places */}
                    <select
                      name="placesKnown"
                      value={placesKnown}
                      onChange={handleChange}
                      className="form-control"
                      multiple
                    >
                      {placesData.map(place => (
                        <option key={place.id} value={place.id}>{place.name},{place.state}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    {/* Checkboxes for selecting multiple languages */}
                    {['English', 'Kannada', 'Hindi', 'Tamil', 'Malayalam', 'Telugu', 'Marathi'].map(language => (
                      <div key={language} className='form-check'>
                        <input
                          type="checkbox"
                          id={language}
                          name="languagesKnown"
                          value={language}
                          checked={languagesKnown.includes(language)}
                          onChange={handleChange} 
                          className='form-check-input'
                        />
                        <label htmlFor={language} className='form-check-label'>{language}</label>
                      </div>
                    ))}
                  </div>

                  
                  {/* Rest of the form */}
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">Signup</button>
                  </div>
                </form>
                <p className="mt-3 text-center">
                  Already have an account? <Link to="/login">Login</Link>
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

export default SignupGuide;
