import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider/AuthProvider';
import useTital from '../../Hooks/useTital';
import AllReview from '../Services/AllReview/AllReview';
// 
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const ServicesDetails = () => {
  useTital('ServicesDetails')
 
    const {tital,name,picture,details,_id}=useLoaderData()
    const{user} = useContext(authContext)
    
//all review load
const [allReview,setAllReview]=useState([])
    console.log('all review',allReview)
useEffect(()=>{
    fetch('https://backend-database-server-a11.vercel.app/reviews')
    .then(res=>res.json())
    .then(data=>setAllReview(data))
},[])

// event handlr for add reviw
const addReviewHandler=event=>{
  event.preventDefault();
  const form =event.target;
  const userName = form.name.value;
  const img = form.URL.value;
  const email = user?.email || "unRegister"
  const date=new Date().getTime();
  // const userImg = user?.photoURL
  const message =form.message.value;
  const review ={
    services :_id,
    ServicesName:name,
    patientName:userName,
    email,
    img,
    message:message,
    date
  }

  // if(phone.length>10){
  //   alert('number should be 10 carecter')
  // }

fetch('https://backend-database-server-a11.vercel.app/review',{
  method:'POST',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(review)
})
.then(res=>res.json())
.then(data=>{
  console.log(data)
  if(data.acknowledged){
    form.reset();
    // modal start



 toast("successful add Review");
    // modal end
    // alert('add review')
  }
  
})
.catch(error=>console.error(error))
}


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
            {/* show all review section */}

            <div className=" w-full">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Reviewer Name</th>
        <th>Service</th>
        <th>Review</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
    {
  allReview.map(allrev=><AllReview allrev={allrev} key={allrev._id}></AllReview>)
}
    </tbody>
    {/* <!-- foot --> */}
    
  </table>
</div>


           {/* Review section */}
           {
            user?.uid? 
            <div className='my-20'>
           <form onSubmit={addReviewHandler} className='ml-20'>
           <input type="text" name="name" placeholder="name" className="input input-bordered  w-full max-w-xs mb-4" required/><br/>
           <input type="url" name="URL" placeholder="image" defaultValue={user?.photoURL} className="input input-bordered w-full max-w-xs mb-4" required/><br/>
           <input type="email" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered w-full max-w-xs mb-4" readOnly/><br/>
           
           <textarea name="message" className="textarea textarea-bordered mb-4" placeholder="write comment" required></textarea><br/>
           <button type='submit' className="btn btn-wide" >Add Review</button>
           </form>
           </div>
            :
            <p className='text-4xl text-center'>pleace <Link to='/login' className='text-[#f64c72]'>Log In</Link> to add a review</p>

           }

         
<ToastContainer />
        </div>
    );
};

export default ServicesDetails;