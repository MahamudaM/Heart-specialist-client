import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider/AuthProvider';

const PrivetRoutes = ({children}) => {
    const{user,loader}=useContext(authContext)
    const location =useLocation()
    if(loader){
        return <button className="btn loading">loading</button>
        // <button className="btn gap-2">
//   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
//   Button
// </button>
    }
    if(!user){
        return<Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    return children
};

export default PrivetRoutes;