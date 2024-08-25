import React, { useState, useEffect } from 'react';
import NavbarAuth from '../components/NavbarAuth';
import Footer from '../components/Footer';
import placesData from '../data/placesData.json';

function GuideDashboard() {
  const [guideData, setGuideData] = useState({
    name: '',
    email: '',
    password: '',
    placesKnown: [],
    languagesKnown: [],
    bookedPlaces: []
  });

  useEffect(() => {
    // Fetch guide details and bookings from local storage
    const loggedInUserId = localStorage.getItem('loggedinUserId') || '';
    const guides = JSON.parse(localStorage.getItem('guides')) || [];
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const users = JSON.parse(localStorage.getItem('users')) || []; // Assuming there's a 'users' array in local storage
  
    // Find the guide's details based on the logged-in user ID
    const guide = guides.find(guide => guide.id === loggedInUserId) || {};
  
    // Find the bookings made for the guide
    const guideBookings = bookings.filter(booking => booking.guide === loggedInUserId);
  
    // Map the bookings to include both the place ID and the user who booked the guide
    const userWhoBooked = guideBookings.map(booking => {
      const user = users.find(user => user.id === booking.user);
      return {
        userName: user ? user.name : 'Unknown',
        placeId: booking.place
      };
    });
  
    // Extract the place IDs from the bookings
    const bookedPlaces = guideBookings.map(booking => booking.place);
  
    // Set the guide data
    setGuideData({
      ...guide,
      bookedPlaces,
      userWhoBooked
    });
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGuideData(prevGuideData => ({
      ...prevGuideData,
      [name]: value
    }));
  };

  const handlePlacesKnownChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
    setGuideData(prevGuideData => ({
      ...prevGuideData,
      placesKnown: selectedOptions
    }));
  };

  const handleLanguagesKnownChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setGuideData(prevGuideData => ({
        ...prevGuideData,
        languagesKnown: [...prevGuideData.languagesKnown, value]
      }));
    } else {
      setGuideData(prevGuideData => ({
        ...prevGuideData,
        languagesKnown: prevGuideData.languagesKnown.filter(lang => lang !== value)
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update guide details in local storage
    const guides = JSON.parse(localStorage.getItem('guides')) || [];
    const updatedGuides = guides.map(guide => (guide.id === guideData.id ? guideData : guide));
    localStorage.setItem('guides', JSON.stringify(updatedGuides));
    alert('Guide details updated successfully!');
  };

  return (
    <>
      <NavbarAuth />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1>Welcome, {guideData.name}</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input type="text" id="name" name="name" value={guideData.name} onChange={handleChange} className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" id="email" name="email" value={guideData.email} onChange={handleChange} className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password:</label>
                <input type="password" id="password" name="password" value={guideData.password} onChange={handleChange} className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="placesKnown" className="form-label">Places Known:</label>
                <select id="placesKnown" name="placesKnown" multiple value={guideData.placesKnown} onChange={handlePlacesKnownChange} className="form-control">
                  {placesData.map(place => (
                    <option key={place.id} value={place.id}>{place.name}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Languages Known:</label>
                <div>
                  <label htmlFor="english" className="form-check-label">
                    <input type="checkbox" id="english" name="languagesKnown" value="English" checked={guideData.languagesKnown.includes('English')} onChange={handleLanguagesKnownChange} className="form-check-input" />
                    English
                  </label>
                </div>
                <div>
                  <label htmlFor="hindi" className="form-check-label">
                    <input type="checkbox" id="hindi" name="languagesKnown" value="Hindi" checked={guideData.languagesKnown.includes('Hindi')} onChange={handleLanguagesKnownChange} className="form-check-input" />
                    Hindi
                  </label>
                </div>
                <div>
                  <label htmlFor="malyalam" className="form-check-label">
                    <input type="checkbox" id="malyalam" name="languagesKnown" value="Malayalam" checked={guideData.languagesKnown.includes('Malayalam')} onChange={handleLanguagesKnownChange} className="form-check-input" />
                    Malayalam
                  </label>
                </div>
                <div>
                  <label htmlFor="kannada" className="form-check-label">
                    <input type="checkbox" id="kannada" name="languagesKnown" value="Kannada" checked={guideData.languagesKnown.includes('Kannada')} onChange={handleLanguagesKnownChange} className="form-check-input" />
                    Kannada
                  </label>
                </div>
                <div>
                  <label htmlFor="tamil" className="form-check-label">
                    <input type="checkbox" id="tamil" name="languagesKnown" value="Tamil" checked={guideData.languagesKnown.includes('Tamil')} onChange={handleLanguagesKnownChange} className="form-check-input" />
                    Tamil
                  </label>
                </div>
                <div>
                  <label htmlFor="telugu" className="form-check-label">
                    <input type="checkbox" id="telugu" name="languagesKnown" value="Telugu" checked={guideData.languagesKnown.includes('Telugu')} onChange={handleLanguagesKnownChange} className="form-check-input" />
                    Telugu
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Update Details</button>
            </form>
            <div className="mt-5">
  <h2>Booked Places </h2>
  <ul>
  {guideData.bookedPlaces && guideData.bookedPlaces.map((placeId, index) => {
    const placeName = placesData.find(place => place.id === placeId)?.name;
    const userName = guideData.userWhoBooked[index]?.userName;
    return (
      <li key={index}>
        Place: {placeName}, User: {userName}
      </li>
    );
  })}
</ul>

</div>



          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default GuideDashboard;
