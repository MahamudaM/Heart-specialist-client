import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider/AuthProvider';

const AddService = () => {
    const {name,picture,_id,price}=useLoaderData()
    const{user} = useContext(authContext)
    const addReviewHandler=event=>{
        event.preventDefault();
        const form =event.target;
        const userName = form.name.value;
       const phone =form.phone.value
       const img = form.URL.value;
        const email = user?.email || "unRegister"
        // const userImg = user?.photoURL
        const message =form.message.value;
        const orderService ={
          services :_id,
          ServicesName:name,
          patientName:userName,
          email,
          message,
         phone,
         img,
         price
        }
      
        // if(phone.length>10){
        //   alert('number should be 10 carecter')
        // }
      
      fetch('http://localhost:5000/addService',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(orderService)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.acknowledged){
          form.reset();
          // modal start
      
          // modal end
          alert('Add service successfully')
        }
      })
      .catch(error=>console.error(error))
      }
    return (
        
        <div>
            <div className=''>
           <form onSubmit={addReviewHandler}>
           <input type="text" name="name" placeholder="name" className="input input-bordered  w-full max-w-xs mb-4" /><br/>
           <input type="text" name="phone" placeholder="phon"  className="input input-bordered w-full max-w-xs mb-4" required/><br/>
           <input type="url" name="URL" placeholder="user image"  className="input input-bordered w-full max-w-xs mb-4" required/><br/>
           <input type="email" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered w-full max-w-xs mb-4" readOnly/><br/>
           
           <textarea name="message" className="textarea textarea-bordered" placeholder="write comment" required></textarea><br/>
           <button type='submit' className="btn btn-wide" >Add service</button>
           </form>
           </div>
        </div>
    );
};

export default AddService;