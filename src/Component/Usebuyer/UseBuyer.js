import React, { useEffect, useState } from 'react';

const UseBuyer = (email) => {
    const [isBuyer,setBuyer]=useState(false)
    useEffect(()=>{
        if(email){
            fetch(`https://carreseller-server-side.vercel.app/user/buyer/${email}`)
            .then(res=>res.json())
            .then(data=>{
                setBuyer(data.isBuyer)
            })
        }
    },[email])
    return [isBuyer]
    
     
 

 
     
};

export default UseBuyer;