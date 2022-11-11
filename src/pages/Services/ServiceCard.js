
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider/AuthProvider';
// 
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({service}) => {
    const {tital,name,picture,price,_id}= service;
    const {user}=useContext(authContext)
    // console.log(service)
    return (
        <div>
          <PhotoProvider>
            <div className="card w-96 bg-base-100 shadow-xl">
            
      <PhotoView src={picture}>
  <img src={picture} alt="Shoes"  className='h-1/3'/>
  </PhotoView>
   
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{tital.slice(0,100)} </p>
    <div className="card-actions justify-end">
    
      <p className='text-xl font-smeblod'>price : {price}$</p>
      {
        user?.uid?
        <>
         {/* <Link to={`/addService/${_id}`}><button className="btn btn-primary">add services</button></Link> */}
      <Link to={`/services/${_id}`}><button className="btn btn-primary">Show Details</button></Link>
        </>
        :
        <Link to={`/services/${_id}`}><button className="btn btn-primary">Show Details</button></Link>
      }
     
    </div>
  </div>
</div>
</PhotoProvider>
        </div>
    );
};

export default ServiceCard;