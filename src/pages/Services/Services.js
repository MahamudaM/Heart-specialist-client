import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../Context/AuthProvider/AuthProvider';
import useTital from '../../Hooks/useTital';
import AddServicCard from '../AddService/AddServicCard';
import ServiceCard from './ServiceCard';

const Services = () => {
    useTital('Services')
    const [services,setServices]=useState([])
    const {user} = useContext(authContext)
    useEffect(()=>{
        fetch('https://backend-database-server-a11.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
// show all order service
const [orderedService,setOrderedService]=useState([])
console.log('add srvic',orderedService)
    useEffect(()=>{
        fetch(`https://backend-database-server-a11.vercel.app/addServices`)
        .then(res=>res.json())
        .then(data=>setOrderedService(data))
    },[])


    return (
        <div className='main'>
        <div className='my-30'>
                    <div className='text-center mt-10'>
            <p className='text-5xl font-smeblod mb-4'>our services</p>

<p className='text-2xl font-smeblod'>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.</p>
<p className='text-2xl font-smeblod'>Override the digital divide with additional clickthroughs.</p>
          </div>
         
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 my-5">
                      
        {
            services.map(service=><ServiceCard service={service} key={service._id}></ServiceCard>)
            
        }
          </div>
        </div>
        {/* see all orderservices */}
        <div>
            <h1 className='text-5xl font-smeblod mt-20 mb-4 text-center'>Added Service</h1>
<p className="mb-5 text-center">Individuals can apply for an innovation grant to
facilitate innovation in the fields of cardiology andcardiothoracic
surgery with a focus<br/>  on heart transplantation, artificial hearts and
artificial valves </p>
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
        </div>
    );
};

export default Services;