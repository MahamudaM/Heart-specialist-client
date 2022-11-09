import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../Context/AuthProvider/AuthProvider';
import ReviewRowInfo from '../MyReviews/ReviewRowInfo'


const MyReviews = () => {
    const {user} = useContext(authContext)
const [reviews,setReviews]=useState([])
console.log(reviews)
    useEffect(()=>{
        fetch(`http://localhost:5000/review?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[user?.email])
    return (
        <div>
           
            <h1>you have {reviews.length} review</h1>
            {/* review table */}
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}

      {
        reviews?.map(review=><ReviewRowInfo key={review._id} review={review}></ReviewRowInfo>)
      }
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default MyReviews;