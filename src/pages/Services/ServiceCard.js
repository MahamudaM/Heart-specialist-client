import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {tital,name,picture}= service;
    console.log(service)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{tital.slice(0,100)} <Link to='/services'>Details</Link></p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;