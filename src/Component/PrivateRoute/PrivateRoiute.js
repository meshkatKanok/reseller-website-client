import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoiute = ({children}) => {
     const {userinfo}=useContext(AuthContext)
     const location=useLocation()
     if(userinfo){
        return children
     }
     return <Navigate to="/login" state={{ from: location }} replace />;

};

export default PrivateRoiute;