import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
    const {tital,name,picture,price,details}=useLoaderData()
    return (
        <div>
{/* service details section */}
            <div className='serviceSection my-5'>

            <div className="card w-96 bg-base-100 shadow-xl image-full mx-auto">
<figure><img src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{tital}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
  {/* details */}
</div>
<div className='container mx-auto  px-4'>
<h1 className='text-2xl font-bold'>{name}</h1>
  <h5 className='text-xl font-medium'>{tital}</h5>
  <p className=''>{details}</p>
</div>

            </div>

           {/* Review section */}
           <div className=''>
           <input type="text" placeholder="name" className="input input-bordered  w-full max-w-xs mb-4" /><br/>
           <input type="phone" placeholder="phone" className="input input-bordered w-full max-w-xs mb-4" /><br/>
           <input type="email" placeholder="email" className="input input-bordered w-full max-w-xs mb-4" /><br/>
           
           <textarea className="textarea textarea-bordered" placeholder="write comment"></textarea>
           </div>
        </div>
    );
};

export default ServicesDetails;