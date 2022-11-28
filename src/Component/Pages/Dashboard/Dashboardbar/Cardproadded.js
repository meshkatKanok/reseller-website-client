import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
 

const Cardproadded = ({productdata,refetch}) => {
    const [deletedata,setDelete]=useState(null)
    const [postuser, setpostuser]=useState()
    console.log(productdata.categorey
        );
        const {categorey,
            condition,
            discription,
            location,
            mobile,
            price,
            productname,
            url,
            date,
            resellerprice,
            _id




        }=productdata
       const deleteClick=(id)=>{
        fetch(`https://carreseller-server-side.vercel.app/addpruduct/${id}`,{
            method:'DELETE',
             
         })
         .then(res=>res.json())
         .then(data=>{
           
            if(data.deletedCount>0){
                toast.success('successfully deleted')
                refetch()
                const reaming=deletedata.filter(deleteinfo=>deleteinfo._id!==id)
                setDelete(reaming)
               
               
                
            }
         })
        
       }

       
     
       const AdsProduct=(id)=>{
        console.log(id);
        fetch(`https://carreseller-server-side.vercel.app/ads/${id}`)
        .then(res=>res.json())
        .then(data=>{
            const {categorey,
                condition,
                discription,
                location,
                mobile,
                price,
                productname:carsname,
                url,
                date,
                _id,
                resellerprice: reseleprice}=data[0]
            const Adsproduct={
                categorey,
                    condition,
                    discription,
                    location,
                    mobile,
                    price,
                    carsname,
                    url,
                    date,
                    reseleprice
                   
                   
                
               }
               fetch(`https://carreseller-server-side.vercel.app/ads`,{
                method:"POST",
                headers:{
                    'content-type':'application/json',
                },
                body:JSON.stringify(Adsproduct)
            }) 
            .then(res=>res.json())
            .then(data=>{
                setpostuser(data)
                if(data.acknowledged){
                    toast.success("successfully Ads in Home Section")
                    refetch()

                }
                 
            })
            
       })
    

     }

   
    return (
        <div className=''>
               <div className='w-75 mx-auto'>
        <div className='wrapper'>
            <div className="card mt-3" >
                <img src={url} className="card-img-top" style={{height:'200px'}} alt="..." />
                
                <div className="card-body">
                <span className=''>{discription}</span>
                <div className='d-flex align-items-center mt-2'>
                <h5>{productname}</h5>
                        <h6 className='ms-5'>Categorey : {categorey}</h6>
                </div>
                    <div className="  ">
                        <div className="d-flex flex-row align-items-center">
                            <h4 className="me-1">${resellerprice}</h4>
                            <span className="text-danger"><s>${price}</s></span>
                        </div>
                       <div className='d-flex'>
                        
                       <h6>Location : {location}</h6>
                        <h6 className=' mx-3'>Condition: { condition}</h6> 
                       </div>
                        <div className=''>
                        
                         <span className="text-secondary">Post Time : {date}</span>
                        </div>
                        <p className="text-secondary">Phone : {mobile}</p>
                    </div>
                </div>
                <div class="card-footer">
                    <div className="d-flex flex-column">
                          
                            <Link onClick={()=>AdsProduct(_id)} type="button" style={{ background: '#FB5B21' }} className="btn btn-primary border-0">Adds now</Link>
                          
                    
                        <button onClick={()=>deleteClick(_id)} className="btn btn-outline-primary btn-sm mt-1" type="button">
                            Delete Product
                        </button>
                      
                    </div>
                </div>
            </div>
        </div>
         
        </div>
            
        </div>
    );
};

export default Cardproadded;