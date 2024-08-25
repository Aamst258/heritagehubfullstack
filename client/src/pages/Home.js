import React from 'react';
import Navbar from '../components/Navbar.js';
import '../Styles/App.css';
import HeritageSite from '../components/Heritagesite.js';
import Footer from '../components/Footer.js';
import placesData from '../data/placesData.json';

function Home() {
  const places1To4 = placesData.filter(place => parseInt(place.id) <= 4);
  const places5To8 = placesData.filter(place => parseInt(place.id) > 4 && parseInt(place.id) <= 8);

  return (
    <>
      <Navbar />
      <div className="container text-center my-1 mt-5">
        <p className="text-center p-0 m-0" style={{ fontFamily: 'Alex Brush', fontSize: '8vw', color: '#DD9529' }}>Top</p>
        <p className="fw-bold m-0 p-0" style={{ fontFamily: 'Poppins', fontSize: '6vw', margin: '0' }}>Heritage Sites</p>
        <p className="rounded-pill text-center m-auto" style={{ backgroundColor: '#C23138', width: '5vw', height: '3vw' }}></p>
        <p className="p-0 m-0" style={{ fontFamily: 'Poppins', fontSize: '2.5vw', margin: '0' }}>Heritage Hub is a comprehensive online platform designed to showcase the richness of Indian heritage, offering a curated collection of historical places, cultural insights, and immersive experiences.</p>
        <div className="container text-center my-1">
          <div className="row">
            {places1To4.map(place => (
              <div key={place.id} className="col-lg-3 col-md-6 col-sm-6 col-12">
                <HeritageSite
                  imageUrl={place.image}
                  title={place.name}
                  place={place.city}
                  id={place.id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container text-center my-1">
        <p className="text-center p-0 m-0" style={{ fontFamily: 'Alex Brush', fontSize: '8vw', color: '#DD9529' }}>More</p>
        <p className="fw-bold m-0 p-0" style={{ fontFamily: 'Poppins', fontSize: '6vw', margin: '0' }}>Destinations</p>
        <p className="rounded-pill text-center m-auto" style={{ backgroundColor: '#DD9529', width: '5vw', height: '3vw' }}></p>
        <p className="p-0 m-0" style={{ fontFamily: 'Poppins', fontSize: '2.5vw', margin: '0' }}>Embark on a journey through India's captivating past and awe-inspiring architecture as we uncover hidden gems and iconic heritage sites</p>
        <div className="container text-center my-1">
          <div className="row">
            {places5To8.map(place => (
              <div key={place.id} className="col-lg-3 col-md-6 col-sm-6 col-12">
                <HeritageSite
                  imageUrl={place.image}
                  title={place.name}
                  place={place.city}
                  id={place.id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
