import React, { useState } from 'react';
import Categoreymodal from '../CategoreyModal/Categoreymodal';

const AdvertiseCard = ({postdeta}) => {
    const [resellerdata,setRellerdata]=useState(null)
    const{ categorey,
        condition,
        discription,
        location,
        mobile,
        price,
        carsname,
        url,
        date,
        reseleprice
         
    }=postdeta

    
    return (
        <div className='py-5'>
             <div className=' mx-auto'>
        <div className='wrapper'>
            <div className="card mt-3" style={{height:'550px'}} >
                <img src={url} className="card-img-top" style={{height:'200px'}} alt="..." />
                
                <div className="card-body">
                <span className=''>{discription.length>200?<>{discription.slice(0,100)+'...'}</>:<>{discription}</>}</span>
                <div className='d-flex align-items-center mt-2'>
                <h5>{carsname}</h5>
                        <h6 className='ms-5'>Categorey : {categorey}</h6>
                </div>
                    <div className="  ">
                        <div className="d-flex flex-row align-items-center">
                            <h4 className="me-1">${reseleprice}</h4>
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
                        <button onClick={()=>setRellerdata(postdeta)}  style={{ background: '#FB5B21' }}  type="button" className="btn btn-primary border-0" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Book Now</button>
                            <button className="btn btn-outline-primary btn-sm mt-1" type="button">
                                Add to wishlist
                            </button>
                          
                        </div>
                    </div>
            </div>
        </div>
         
        </div>
        {
               resellerdata &&  <Categoreymodal url={url
               }
               resellerdata={resellerdata}  setRellerdata={setRellerdata}/>
            }
        </div>
    );
};

export default AdvertiseCard;