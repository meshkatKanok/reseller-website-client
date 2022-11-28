import React, { useEffect, useState } from 'react';
import { set } from 'react-hook-form';

const UseAdmin = (email) => {
    const [isAdmin,setAdmin]=useState(false)
    useEffect(()=>{
        if(email){
            fetch(`https://carreseller-server-side.vercel.app/user/admin/${email}`)
            .then(res=>res.json())
            .then(data=>{
                setAdmin(data.isAdmin)
            })
        }
    },[email])
    return [isAdmin]
};

export default UseAdmin;