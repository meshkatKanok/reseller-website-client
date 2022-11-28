import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Catagoreyitemcard from './Catagoreyitemcard';
import './categorey.css'

const Catagorey = () => {
    const {isLoading,error,data:carsCategorey}=useQuery({
        queryKey:['categorydata'],
        queryFn:()=>fetch(`https://carreseller-server-side.vercel.app/categorey`)
        .then(res=>res.json())
        .then(data=>{
            return data;
        })
    })
    return (
        <div>
            <h1 className='text-center mt-5' style={{color:'#FB5B21'}}>Car Brand</h1>
           <div className=''>
          <div className='d-lg-flex'>
          {
                carsCategorey?.map((carsCategorey)=><Catagoreyitemcard key={carsCategorey._id} carsCategorey={carsCategorey}></Catagoreyitemcard>)
            } 
          </div>
           </div>
            
        </div>
    );
};

export default Catagorey;