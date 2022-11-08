import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider/AuthProvider';

const PrivetRoutes = ({children}) => {
    const{user,loader}=useContext(authContext)
    const location =useLocation()
    if(loader){
        return <>
        <button type="button" class="bg-indigo-500 ..." disabled>
  <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
   
  </svg>
  Processing...
</button>
        </>
    }
    if(!user){
        return<Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    return children
};

export default PrivetRoutes;