import React, { useEffect, useState } from 'react';
import useTital from '../../Hooks/useTital';
import ServiceCard from './ServiceCard';

const Services = () => {
    useTital('Services')
    const [services,setServices]=useState([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
                    <div className='text-center'>
            <p className='text-5xl font-smeblod'>our services</p>

<p className='text-2xl font-smeblod'>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.</p>
<p className='text-2xl font-smeblod'>Override the digital divide with additional clickthroughs.</p>
          </div>
         
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 my-5">
                      
        {
            services.map(service=><ServiceCard service={service}></ServiceCard>)
            
        }
          </div>
        </div>
    );
};

export default Services;