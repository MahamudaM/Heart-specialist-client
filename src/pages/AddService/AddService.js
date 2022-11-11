import React, { useContext} from 'react';
// import { useLoaderData } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider/AuthProvider';
import useTital from '../../Hooks/useTital';
// 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddService = () => {
  useTital('AddService')
    // const {name,picture,_id,price}=useLoaderData()

 
    const{user} = useContext(authContext)
    const addServiceEventHandler=event=>{
        event.preventDefault();
        const form =event.target;
        const userName = form.name.value;
       const phone =form.phone.value
       const img = form.URL.value;
       const price =form.price.value
       const serviceName = form.ServicesName.value
        const email = user?.email || "unRegister"
        // const userImg = user?.photoURL
        const message =form.message.value;
        const orderService ={
          
          serviceName,
          patientName:userName,
          email,
          message,
         phone,
         img,
         price
        }
      
        
      
      fetch('https://backend-database-server-a11.vercel.app/addService',{
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
          toast("successful added Service");
          
        }
      })
      .catch(error=>console.error(error))
      }
    return (
        
        <div className='grid justify-items-center' >
            <div className='my-10 ml-30 '>
           <form onSubmit={addServiceEventHandler} >
           <input type="text" name="name" placeholder=" name" className="input input-bordered  w-full max-w-xs mb-4" required/><br/>
           <input type="text" name="phone" placeholder="phon"  className="input input-bordered w-full max-w-xs mb-4" /><br/>
           <input type="url" name="URL" placeholder="user image"  className="input input-bordered w-full max-w-xs mb-4" required/><br/>
           <input type="email" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered w-full max-w-xs mb-4" readOnly/><br/>
           <input type="text" name="price" placeholder="price" className="input input-bordered  w-full max-w-xs mb-4" /><br/>
           <input type="text" name="ServicesName" placeholder="service name"  className="input input-bordered w-full max-w-xs mb-4" required/><br/>
           
           <textarea name="message" className="textarea textarea-bordered mb-4" placeholder="write comment" required></textarea><br/>
           <button type='submit' className="btn btn-wide"  >Add service</button>
           </form>

           
           <ToastContainer />
           </div>
        </div>
    );
};

export default AddService;