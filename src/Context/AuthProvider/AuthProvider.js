import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from 'firebase/auth'
export const authContext= createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)
const [loader,setLoader]=useState(true)

const creatUsre =(email,password)=>{
    setLoader(true);
    return createUserWithEmailAndPassword(auth,email,password);
}

useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
        console.log(currentUser,'current user')
        setUser(currentUser)
        setLoader(false)
    })
    return ()=>{
        unSubscribe();
    }
},[])
const authInfo = {user,creatUsre,loader}
    return (
        <div>
           <authContext.Provider value={authInfo}>
            {children}
           </authContext.Provider>
        </div>
    );
};

export default AuthProvider;