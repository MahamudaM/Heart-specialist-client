import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
export const authContext= createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)
const [loader,setLoader]=useState(true)

const creatUsre =(email,password)=>{
    setLoader(true);
    return createUserWithEmailAndPassword(auth,email,password);
}

const logInEmailAndPass=(email,password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth,email,password)
}
// logout
const logOut =()=>{
    setLoader(true)
    return signOut(auth)
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
const authInfo = {user,creatUsre,loader,logInEmailAndPass,logOut}
    return (
        <div>
           <authContext.Provider value={authInfo}>
            {children}
           </authContext.Provider>
        </div>
    );
};

export default AuthProvider;