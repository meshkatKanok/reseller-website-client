import React, { useEffect, useState } from 'react';
import AdvertiseCard from './AdvertiseCard';

const Advertise = () => {
    const [postdata,setPostdata]=useState()
    useEffect(()=>{
        fetch(`https://carreseller-server-side.vercel.app/ads`)
        .then(res=>res.json())
        .then(data=>{
            setPostdata(data)

        })
    })
    return (
        <div>
            <h1 className='mt-3 text-center mb-3' style={{color:'rgb(251, 91, 33)'}}>ReSeller Price Car Categorey</h1>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
            {
                postdata?.map(postdeta=><AdvertiseCard key={postdeta._id} postdeta={postdeta}></AdvertiseCard>)
            }
        </div>
        </div>
    );
};

export default Advertise;