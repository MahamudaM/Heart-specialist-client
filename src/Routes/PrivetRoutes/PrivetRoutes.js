import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider/AuthProvider';

const PrivetRoutes = ({children}) => {
    const{user,loader}=useContext(authContext)
    const location =useLocation()
    if(loader){
        return <button className="btn loading">loading</button>
        
    }
    if(!user){
        return<Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    return children
};

export default PrivetRoutes;