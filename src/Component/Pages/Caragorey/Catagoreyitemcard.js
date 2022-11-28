import React from 'react';
import { Link } from 'react-router-dom';

const Catagoreyitemcard = ({carsCategorey}) => {
    console.log(carsCategorey);
    const {brandimg,carsBrand,_id
    }=carsCategorey
    return (
       
            <section class="wrapper py-5">
        <div class="container-fostrap">
         <div class="content">
                <div class="container">
                    <div class="">
                        <div class="">
                            <div class="card">
                                <div class="img-card">
                                <img src={brandimg} />
                              </div>
                                <div class="card-content">
                                    <h4 class="card-title text-center">
                                         {carsBrand}
                                      
                                    </h4>
                                     
                                </div>
                                <div class="card-read-more">
                                    <Link to={`/catagoreyitem/${_id}`} style={{color:'#FB5B21'}} class="btn btn-link btn-block">
                                         Check All Cars
                                    </Link>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </section>
 
 
       
        
    );
};

export default Catagoreyitemcard;