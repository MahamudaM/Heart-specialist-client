import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {tital,name,picture,price,_id}= service;
    console.log(service)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{tital.slice(0,100)} </p>
    <div className="card-actions justify-end">
      <p className='text-xl font-smeblod'>price : {price}$</p>
      <Link to={`/services/${_id}`}><button className="btn btn-primary">View Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;