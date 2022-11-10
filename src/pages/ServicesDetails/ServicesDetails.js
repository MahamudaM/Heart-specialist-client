import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider/AuthProvider';

const ServicesDetails = () => {
    const {tital,name,picture,details,_id}=useLoaderData()
    const{user} = useContext(authContext)


// event handlr for add reviw
const addReviewHandler=event=>{
  event.preventDefault();
  const form =event.target;
  const userName = form.name.value;
  const img = form.URL.value;
  const email = user?.email || "unRegister"
  // const userImg = user?.photoURL
  const message =form.message.value;
  const review ={
    services :_id,
    ServicesName:name,
    patientName:userName,
    email,
    img,
    message,
   
  }

  // if(phone.length>10){
  //   alert('number should be 10 carecter')
  // }

fetch('http://localhost:5000/review',{
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

    // modal end
    alert('add review')
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

           {/* Review section */}
           {
            user?.uid? 
            <div className=''>
           <form onSubmit={addReviewHandler}>
           <input type="text" name="name" placeholder="name" className="input input-bordered  w-full max-w-xs mb-4" /><br/>
           <input type="url" name="URL" placeholder="user image" defaultValue={user?.photoURL} className="input input-bordered w-full max-w-xs mb-4" required/><br/>
           <input type="email" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered w-full max-w-xs mb-4" readOnly/><br/>
           
           <textarea name="message" className="textarea textarea-bordered" placeholder="write comment" required></textarea><br/>
           <button type='submit' className="btn btn-wide" >Add Review</button>
           </form>
           </div>
            :
            <p>pleace <Link to='/login' className='text-[#f64c72]'>Log In</Link> to add a review</p>

           }

         

        </div>
    );
};

export default ServicesDetails;