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
        fetch('http://localhost:5000/services')
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
          <div>
          <div className="hero min-h-screen" style={{ backgroundImage: `url(${banarImg})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Care your heart ,<br/>stay healthy</h1>
      <p className="mb-5">Globally harness multimedia based collaboration and idea-sharing with backend products. Continually whiteboard superior opportunities via covalent scenarios.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
          </div>
          {/* srervic */}
          <div>
          <div className='text-center'>
            <p className='text-5xl font-smeblod'>our services</p>

<p className='text-2xl font-smeblod'>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.</p>
<p className='text-2xl font-smeblod'>Override the digital divide with additional clickthroughs.</p>
          </div>
          <p>services {services.length}</p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 my-5">
                      
        {
            services.map(service=><ServiceCard service={service}></ServiceCard>)
            
        }
          </div>
          <Link to='/services'><button className="btn btn-outline btn-error my-5">See All</button></Link>
          
          </div>
           {/* side img and text */}
          
           <div className="hero  min-h-screen bg-base-300">
           
  <div className="hero-content flex-col lg:flex-row">
    <img src={doctorImg} alt='' className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">My duty is to serve you</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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
         
          
        </div>
    );
};

export default Home;