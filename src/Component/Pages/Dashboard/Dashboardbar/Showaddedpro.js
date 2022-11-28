 
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Loading from '../../../Loading/Loading';
import Cardproadded from './Cardproadded';
 

const Showaddedpro = () => {
    const [praddeddata,setProaddeddata]=useState()
    const {data,refetch}=useQuery({
        queryKey:['addproduct'],
        queryFn: ()=>{
            fetch(`https://carreseller-server-side.vercel.app/addpruduct`,
            )
            .then(res=>res.json())
            .then(data=>{
               <Loading/>
                setProaddeddata(data)
            })
        }
           
     
})
   

    return (
       
            <div>
            {
                praddeddata?.map(productdata=><Cardproadded refetch={refetch} key={productdata._id} productdata={productdata}/>)
            }
            </div>
         
      
        
     
    );
};

export default Showaddedpro;