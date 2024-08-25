import React from 'react';
import { Link } from 'react-router-dom';

const HeritageSite = ({ imageUrl, title, place, id }) => {
  return (
    <Link to={`/places/${id}`} className="text-decoration-none">
      <div className="card bg-dark text-white my-3" style={{ height: '380px' }}>
        <img className="card-img h-100 " src={imageUrl} alt="Card" />
        <div className="card-img-overlay d-flex flex-column justify-content-end">
          <div className="mt-auto">
            <h5 className="card-title m-auto">{title}</h5>
            <p className="card-text m-auto">{place}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HeritageSite;
