import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const ReviewRowInfo = ({review,deleteHandl,textUpdateHandler}) => {
  const [updatMessage, setUpdatMessage] = useState();

  const handleMessageChange = event => {
   const newMassage = event.target.updateMessag.value
    setUpdatMessage(newMassage);
    console.log(event.target.value);
  };
  // end
  const {ServicesName,email,services,_id,message,img,patientName}=review
  const [serviceReview,setServiceReview] = useState({})
  useEffect(()=>{
    fetch(`https://backend-database-server-a11.vercel.app/services/${services}`)
    .then(res=>res.json())
  .then(data=>setServiceReview(data));
  },[services])
 
  
    return (
      
        <tr>
        <th>
          <label>
          <button onClick={()=>deleteHandl(_id)} className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                {
                  serviceReview?.picture &&
                  <img src={img} alt="Avatar Tailwind CSS Component" />
                }
              </div>
            </div>
            <div>
            <div className="font-bold">{patientName}</div>
              <div className="text-sm opacity-50">{email}</div>
            </div>
          </div>
        </td>
        <td>
        {ServicesName}
         
        </td>
        <td>{message}</td>
        <th>
          
          <Link to={`/update/${_id}`}><button>edit review</button> </Link>
          {/* <label htmlFor="my-modal" className="btn" >update</label> */}

{/* Put this part before </body> tag */}
{/* <input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{message}</h3>
    {/* <p className="py-4">{message}</p> */}
    {/* <textarea name="updateMessag" className="textarea textarea-bordered"  placeholder="write comment" required></textarea>
    <button  className="btn" onClick={()=>textUpdateHandler(_id,updatMessage)} onChange={handleMessageChange}>update text</button>
    <div className="modal-action">
      <label htmlFor="my-modal" className="btn">Yay!</label>
    </div>
  </div>
</div>  */}
        </th>
      </tr>
    

      );
};

export default ReviewRowInfo;