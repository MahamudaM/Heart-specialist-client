import React from 'react';

const AddServicCard = ({orderServic}) => {
    const {ServicesName,img,email,patientName,price}=orderServic
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{ServicesName}</h2>
   
<p> patient name : {patientName}</p>
<p>email : {email}</p>
    <div className="card-actions">
     <p>price : {price}$</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default AddServicCard;