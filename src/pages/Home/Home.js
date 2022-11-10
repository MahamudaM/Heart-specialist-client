import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider/AuthProvider';
import AddServicCard from '../AddService/AddServicCard';
import ServiceCard from '../Services/ServiceCard';

const Home = () => {
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