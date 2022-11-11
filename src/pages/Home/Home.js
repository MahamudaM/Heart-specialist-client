import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider/AuthProvider';
import useTital from '../../Hooks/useTital';
import AddServicCard from '../AddService/AddServicCard';
import ServiceCard from '../Services/ServiceCard';
import banarImg from '../Home/img/banar1.jpg'
import doctorImg from '../Home/img/doctor.jpg'
const Home = () => {
  useTital('Home')
    const [services,setServices]=useState([])
    const {user} = useContext(authContext)
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[]
    )
    // add srvice state
    const [orderedService,setOrderedService]=useState([])
console.log('add srvic',orderedService)
    useEffect(()=>{
        fetch(`http://localhost:5000/addService?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setOrderedService(data))
    },[user?.email])
    return (
        <div>
          {/* img */}
          <div className=''>
          <div className="hero min-h-screen mb-10" style={{ backgroundImage: `url(${banarImg})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Care your heart ,<br/>stay healthy</h1>
      <p className="mb-5">Globally harness multimedia based collaboration and idea-sharing with backend products.Continually whiteboard superior opportunities via covalent scenarios. </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
          </div>
          {/* srervic */}
          <div>
          <div className='text-center'>
            <p className='text-5xl font-smeblod mb-4 mt-20'>our services</p>

<p className='text-2xl font-smeblod'>Dr junaer was an original thinker and was involved in the development of various cardiothoracic devices.</p>
<p className='text-2xl font-smeblod mb-10'>Override the digital divide with additional clickthroughs.</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 my-5">
                      
        {
            services.map(service=><ServiceCard service={service}></ServiceCard>)
            
        }
          </div>
         
          
          </div>
          <div className='text-center'>
         <Link to='/services'><button className="btn btn-outline btn-error my-20 ">See All</button></Link>
         </div>
           {/* side img and text */}
          
           <div className="hero  min-h-screen bg-base-300">
           
  <div className="hero-content flex-col lg:flex-row">
    <img src={doctorImg} alt='' className="w-1/3 rounded-lg shadow-2xl h-96 hover:h-full mr-10" />
    <div className='w-1/3 '>
      <h1 className="text-5xl font-bold"> DR JUNAED WORK</h1>
      <p className="py-6">A memoir of internationally acclaimed heart surgeon DR junaed (1936-1991), written by his daughter and Foundation CEO, Nikola Tesla.Her book talks about his career in heart surgery and the first heart-lung transplant to the development of an artificial heart.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
          {/* service end */}
          {
            user?.uid? 
            <div className='mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 my-5'>
              {
                orderedService.map(orderServic=><AddServicCard orderServic={orderServic} key={orderServic._id}></AddServicCard>)
              }
            
            </div>
            :
            ''
          }
          <div className='text-center'>
         <Link to='/services'><button className="btn btn-outline btn-error my-5 ">See All</button></Link>
         </div>
         {/* 7 day free service */}
         
          <div className="hero min-h-screen bg-base-300 mb-20">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now online</h1>
      <p className="py-6">Before applying, please read the selection criteria for the Victor Chang Surgical Fellowship before applying; this document also outlines acquittal procedures.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href=" " className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
          
        </div>
    );
};

export default Home;