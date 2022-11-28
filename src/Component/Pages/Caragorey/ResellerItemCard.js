import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Categoreymodal from '../CategoreyModal/Categoreymodal';

const ResellerItemCard = ({ brandData
}) => {
    const [resellerdata,setRellerdata]=useState(null)
    const { carsname, img, location, orginalprice, reseleprice,use,posttime,_id

    } = brandData
    
    return (
        <div className='col-12 col-md-6 col-lg-4'>
            <div className='wrapper'>
                <div className="card mt-3" style={{ height: "460px" }}>
                    <img src={img} className="card-img-top" style={{height:'200px'}} alt="..." />
                    <div className="card-body">
                        <div className="  ">
                            <h4>{carsname}</h4>
                            <div className="d-flex flex-row align-items-center">
                                <h4 className="me-1">{reseleprice}</h4>
                                <span className="text-danger"><s>{orginalprice}</s></span>
                            </div>
                            <h6 className="text-primary">Location : {location}</h6>
                            <div className='d-flex'>
                            <h6 className='text-warning me-3'>Use : {use}</h6> 
                             <span className="text-secondary">Post Time : {posttime} Ago</span>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div className="d-flex flex-column">
                        <button onClick={()=>setRellerdata(brandData)}  style={{ background: '#FB5B21' }}  type="button" className="btn btn-primary border-0" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Book Now</button>
                            <button className="btn btn-outline-primary btn-sm mt-1" type="button">
                                Add to wishlist
                            </button>
                          
                        </div>
                    </div>
                </div>
            </div>
            {
               resellerdata &&  <Categoreymodal img={img
               }
               resellerdata={resellerdata} setRellerdata={setRellerdata}/>
            }

        </div>
    );
};

export default ResellerItemCard;