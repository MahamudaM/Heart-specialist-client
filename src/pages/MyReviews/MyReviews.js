import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../Context/AuthProvider/AuthProvider';
import useTital from '../../Hooks/useTital';
import ReviewRowInfo from '../MyReviews/ReviewRowInfo'


const MyReviews = () => {
  useTital('MyReviews')
    const {user,logOut} = useContext(authContext)
const [reviews,setReviews]=useState([])
console.log(reviews)
    useEffect(()=>{
        fetch(`http://localhost:5000/review?email=${user?.email}`,{
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
    const proceed = window.confirm('delete review')
    if(proceed){
      fetch(`http://localhost:5000/review/${id}`,{
        method:'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.deletedCount>0){
         
          const remaining = reviews.filter(review=>review._id !== id)
          setReviews(remaining)
          alert('deleted successfully')
        }
      })
    }
  }
const textUpdateHandler = (id,updatMessage)=>{
  fetch(`http://localhost:5000/review/${id}`,{
    method:'PATCH',
    headers:{
      'content-type': 'application/json'
    },
    body:JSON.stringify({status:'approved'})
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    if(data.modifiedCount>0){
      const remaining =reviews.filter(review=>review._id!==id)
      const approving =reviews.find(rev=>rev._id===id)
      approving.message=updatMessage
      const newReviews = [approving,...remaining]
      setReviews(newReviews)
    }
  })
}


// start review table
if(reviews.length> 0){
return <div className="overflow-x-auto w-full">
<table className="table w-full">
  {/* <!-- head --> */}
  <thead>
    <tr>
      <th>
        <label>
          {/* <input type="checkbox" className="checkbox" /> */}
        </label>
      </th>
      <th>Reviewer</th>
      <th>Name</th>
      {/* <th>Favorite Color</th> */}
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
        textUpdateHandler={textUpdateHandler}
      ></ReviewRowInfo>)
    }
  </tbody>
  
  
</table>
  </div>
}
else{
return <p className='text-5xl text-center my-10'>no review added</p>
}



// end


 
};

export default MyReviews;