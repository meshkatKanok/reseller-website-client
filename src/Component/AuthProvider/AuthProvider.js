import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from '../firebase/firebase.confiq';
 
export const AuthContext=createContext()
const auth=getAuth(app)
const provider=new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [loading,setLodaing]=useState(true)
    const [islight,setLight]=useState(true)
    const [userinfo,setUserinfo]=useState({})
    const creatUser=(email,password)=>{
          return createUserWithEmailAndPassword(auth,email,password);
    }
const signin=(email,password)=>{
    setLodaing(false)
    return signInWithEmailAndPassword(auth,email,password)
}
const signout=()=>{
    setLodaing(false)
    return signOut(auth)
}
const updatePro=(displayname)=>{
    setLodaing(false)

    return updateProfile(auth.currentUser,displayname)
}
const resetEmail=(email)=>{
    setLodaing(false)
    return sendPasswordResetEmail(auth,email)
}

useEffect(()=>{
 const unsubsCribe=onAuthStateChanged(auth,currentUser=>{
         setLodaing(false)
        setUserinfo(currentUser)
    });
    return ()=>unsubsCribe();
},[]);
const googleLogin=()=>{
    return signInWithPopup(auth,provider);

}

    const info={
        resetEmail,
        creatUser,
        signin,
        userinfo,
        signout,
        updatePro,
        islight,
        setLight,
        loading,
        googleLogin

    }
    return (
         <AuthContext.Provider value={info}>
             {children}
         </AuthContext.Provider>
    );
};

export default AuthProvider;