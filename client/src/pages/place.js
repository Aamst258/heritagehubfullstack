import React from 'react';
import { useParams } from 'react-router-dom';
import placesData from '../data/placesData.json';
import NavbarAuth from '../components/NavbarAuth';
import Footer from '../components/Footer'; 
import '@fortawesome/fontawesome-free/css/all.css';


function Place() {
  const { id } = useParams();
  const place = placesData.find(place => place.id === id);
   console.log(place)
  if (!place) {
    return (
      <div>Place not found</div>
    );
  }  
  // Get guides array from local storage
  const guides = JSON.parse(localStorage.getItem('guides')) || [];
  
  // Filter guides available for the current place
  const guidesForPlace = guides.filter(guide => guide.placesKnown.includes(place.id)); 
  const renderRating = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i} className="fa fa-star checked" style={{ color: 'goldenrod' }}></span>);
    }
    return stars;
  };


  return (
    <>
      <NavbarAuth />
      <div className="container-fluid">
        <div className="position-relative">
          <img src={place.image} alt={place.name} className="img-fluid w-100" style={{ marginBottom: '30px', height: '350px' }} />
          <h1 className="text-center position-absolute top-50 start-50 translate-middle text-white fw-bold" style={{ fontSize: '60px' }}>{place.name}</h1>
        </div>
        <div className="container">
          <div className="mt-4">
            <div className="section my-3">
              <h2 className="mb-4">Description</h2>
              <p className='text-justify' style={{textAlign:'justify'}}>{place.description}</p>
              <p className='fw-bold'>{place.city}, {place.state}</p>
            </div>    
            <div className="section my-3">
              <h2 className="mb-4">Rating</h2>
              <p>{renderRating(place.rating)}</p>
            </div>  
            <div className="section my-3">
              <h2 className="mb-4">Virtual 360 Image</h2>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  src={place.virtual360image}
                  title="Virtual 360 Image"
                  className="embed-responsive-item"
                  allowFullScreen
                  style={{ width: '100%', height: '70vh' }}
                ></iframe>
              </div>
            </div>     
            <div className="section my-3">
              <h2 className="mb-4">Guides Available for {place.name}</h2>
              <ul>
                {guidesForPlace.map(guide => (
                  <li key={guide.id}>
                    <p>Name: {guide.name}</p>
                    <p>Email: {guide.email}</p>
                    <p>Languages Known: {guide.languagesKnown.join(', ')}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="section my-3">
  <h2 className="mb-4 ">Map</h2>
  <div style={{ width: '50%', height: '350px' }}>
    <iframe
      title="Map"
      src={place.mapimage}
      style={{ border: '0', width: '100%', height: '100%' }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Place;
