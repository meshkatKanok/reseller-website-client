import React, { useEffect, useState } from 'react';

const Useseller = (email) => {
    const [isSeller,setSeller]=useState(false)
    useEffect(()=>{
        if(email){
            fetch(`https://carreseller-server-side.vercel.app/user/seler/${email}`)
            .then(res=>res.json())
            .then(data=>{
                setSeller(data.isSeller)
            })
        }
    },[email])
    return [isSeller]
    
     
};

export default Useseller;