import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarAuth from '../components/NavbarAuth';
import placesData from '../data/placesData.json';
import Footer from '../components/Footer';

function Places() {
  const [searchTerm, setSearchTerm] = useState('');
  const [stateFilter, setStateFilter] = useState('');

  const filteredPlacesBySearch = placesData.filter(place =>
    place.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPlacesByState = filteredPlacesBySearch.filter(place =>
    place.state.toLowerCase().includes(stateFilter.toLowerCase())
  );

  return (
    <>
      <div>
        <NavbarAuth />
        <div className="container my-2"> 
          <h1 className="text-center">Destinations</h1>
          <div className="mb-3">
            <p className="text-center mb-0">Explore India’s Timeless Treasures</p>
            <p className="text-center mb-2">Discover India's diverse tapestry of heritage sites, spanning ancient temples, majestic forts, serene palaces, and more, each steeped in history and cultural significance.</p>
          </div>
          <div className="row mb-3">
            <div className="col-md-6 my-1">
              <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="col-md-6  my-1">
              <input
                type="text"
                placeholder="Search by  state"
                value={stateFilter}
                onChange={(e) => setStateFilter(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            {filteredPlacesByState.map(place => (
              <div key={place.id} className="col-md-4 mb-3">
                <div className="card">
                  <img src={place.image} className="card-img-top img-responsive" style={{ height: '200px' }} alt={place.name} />
                  <div className="card-body">
                    <h5 className="card-title">{place.name}</h5>
                    <p className="card-text">{place.city}, {place.state}</p>
                    <Link to={`/places/${place.id}`} className="btn btn-primary">View Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> 
      <Footer />
    </>
  );
}

export default Places;
