import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../Context/AuthProvider/AuthProvider';
import useTital from '../../Hooks/useTital';
import ReviewRowInfo from '../MyReviews/ReviewRowInfo'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReviews = () => {
  useTital('MyReviews')
    const {user,logOut} = useContext(authContext)
const [reviews,setReviews]=useState([])
console.log(reviews)
    useEffect(()=>{
        fetch(`https://backend-database-server-a11.vercel.app/review?email=${user?.email}`,{
          headers:{
            authorization: `Bearer ${localStorage.getItem('secret-token')}`
          }
        })
        .then(res=>{
          if(res.status === 401 || res.status === 403){
            logOut()
          }
          return res.json()
        })
        .then(data=>setReviews(data))
    },[user?.email])

     // event handler for delete review
  const deleteHandl=id=>{
    const proceed = window.confirm('Delete review')
    if(proceed){
      fetch(`https://backend-database-server-a11.vercel.app/review/${id}`,{
        method:'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.deletedCount>0){
         
          const remaining = reviews.filter(review=>review._id !== id)
          setReviews(remaining)
          toast("successful Delete review");
        }
      })
    }
  }



// start review table
if(reviews.length> 0){
return <div className=" w-full">
<table className="table w-full">
  {/* <!-- head --> */}
  <thead>
    <tr>
      <th>
        <label>
       
        </label>
      </th>
      <th>Reviewer</th>
      <th>service name</th>
      <th>Review</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {/* <!-- row 1 --> */}

    {
      reviews?.map(review=><ReviewRowInfo
         key={review._id} 
        review={review}
        deleteHandl={deleteHandl}
        // textUpdateHandler={textUpdateHandler}
      ></ReviewRowInfo>)
    }
  </tbody>
  
 
</table>
<ToastContainer />
  </div>
}
else{
return <p className='text-5xl text-center my-10'>no review added</p>
}



// end


 
};

export default MyReviews;