import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Catagoreycss.css'
import ResellerItemCard from './ResellerItemCard';
 

const Categoreyitem = () => {
    const data=useLoaderData()
    const {brandData
    }=data
    
    return (
        <div>
            <h1 className='text-center mt-5'>Car Catagorey</h1>
            <div className='row  py-5 px-5'>

{
   brandData?.map((brandData,i)=><ResellerItemCard key={i}
   brandData={brandData} data={data} ></ResellerItemCard>)
}
   </div>
        </div>
    );
};

export default Categoreyitem;