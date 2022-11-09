import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../Context/AuthProvider/AuthProvider';

const MyReviews = () => {
    const {user} = useContext(authContext)
const [review,setReview]=useState({})

    useEffect(()=>{
        fetch(`http://localhost:5000/review?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[user?.email])
    return (
        <div>
           
            <h>you have {review.length} review</h>
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
      
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default MyReviews;