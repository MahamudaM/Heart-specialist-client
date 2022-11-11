import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UpdateReview = () => {
  const review =useLoaderData()
const [updateReview,setUpdateRevieq]=useState()

  const updateReviewHandler=event=>{
    event.preventDefault();
 console.log(updateReview)
 const form =event.target;
    const message =form.message.value;
    setUpdateRevieq(message)
    fetch(`https://backend-database-server-a11.vercel.app/reviews/${review._id}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({message})
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
     if(data.modifiedCount>0){
      toast("successful update review");
     }
    })
  }
  
  
    return (
     
      
        <div className='my-10 ml-20'>
          <p>{review.ServicesName}</p>
          <form onSubmit={updateReviewHandler}>
           <textarea name="message"  className="textarea textarea-bordered" placeholder="write comment" required></textarea><br/>
           <button type='submit' className="btn " >update</button>
           </form>
         
           <ToastContainer />
        </div>
        
    );
};

export default UpdateReview;