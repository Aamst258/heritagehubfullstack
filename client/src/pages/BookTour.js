import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import placesData from '../data/placesData.json';
import NavbarAuth from '../components/NavbarAuth';
import Footer from '../components/Footer';

function BookTour() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    place: '',
    guide: '',
    user: ''
  });

  const [availableGuides, setAvailableGuides] = useState([]);
  const [loggedInUserId, setLoggedInUserId] = useState('');
  const [loggedInUserName, setLoggedInUserName] = useState('');

  useEffect(() => {
    // Fetch guides from local storage
    const guides = JSON.parse(localStorage.getItem('guides')) || [];

    // Fetch logged-in user ID from local storage
    const userId = localStorage.getItem('loggedinUserId') || '';

    // Fetch logged-in user details from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const loggedInUser = users.find(user => user.id === userId);

    // Filter guides based on the selected place
    const guidesForSelectedPlace = guides.filter(guide => guide.placesKnown.includes(formData.place));

    if (guidesForSelectedPlace.length === 0) {
      // Default guide details
      const defaultGuide = {
        id: '1',
        name: 'Harshitha',
        email: 'harshitha@gmail.com',
        placesKnown: placesData.map(place => place.id),
        languages: ['English', 'Hindi', 'Kannada']
      };
      setAvailableGuides([defaultGuide]);
    } else {
      setAvailableGuides(guidesForSelectedPlace);
    }

    setLoggedInUserId(userId); // Set logged-in user ID
    setLoggedInUserName(loggedInUser ? loggedInUser.name : ''); // Set logged-in user name
  }, [formData.place]);

  useEffect(() => {
    // Set the default value for the user field
    setFormData(prevData => ({
      ...prevData,
      user: loggedInUserId
    }));

    // Update logged-in user name when it becomes available
    if (loggedInUserId) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const loggedInUser = users.find(user => user.id === loggedInUserId);
      setLoggedInUserName(loggedInUser ? loggedInUser.name : '');
    }
  }, [loggedInUserId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.place || !formData.guide) {
      alert('Please select both a place and a guide.');
      return;
    }

    // Handle form submission here (e.g., send data to backend or store in local storage)
    console.log('Form submitted:', formData);

    // Store the booking data in local storage
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const newBooking = {
      place: formData.place,
      guide: formData.guide,
      user: formData.user, // Include the logged-in user ID
      date: new Date().toISOString() // Include the current date
    };
    bookings.push(newBooking);
    localStorage.setItem('bookings', JSON.stringify(bookings));

    // Provide feedback to the user (e.g., show confirmation message)
    alert('Booking request submitted successfully!');

    // Redirect user to the user dashboard
    navigate('/user-dashboard');
  };

  return ( 
    <>
      <NavbarAuth />
      <div className="container my-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card mt-5">
              <div className="card-body">
                <h2 className="card-title mb-4">Book a Tour</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="place" className="form-label">Select Place:</label>
                    <select id="place" name="place" value={formData.place} onChange={handleChange} className="form-select">
                      <option value="">Select Place</option>
                      {placesData.map(place => (
                        <option key={place.id} value={place.id}>{place.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="guide" className="form-label">Select Guide:</label>
                    <select id="guide" name="guide" value={formData.guide} onChange={handleChange} className="form-select">
                      <option value="">Select Guide</option>
                      {availableGuides.map(guide => (
                        <option key={guide.id} value={guide.id}>{guide.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="user" className="form-label">User:</label>
                    <input id="user" type="text" name="user" value={loggedInUserName || 'Loading...'} onChange={handleChange} className="form-control" disabled />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>  
      <Footer />
    </>
  );
}

export default BookTour;
