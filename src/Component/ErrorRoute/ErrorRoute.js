import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorRoute.css'

const ErrorRoute = () => {
    return (
        <div className='error'>
             <div class="container mb-5">
	    <div class="row">
		    <div class="col-12 col-md-11 col-lg-7 col-xl-6 mx-auto">
			      
			     
				    <Link class="btn app-btn-primary text-center" to="/">Go to home page</Link>
			     
		    </div> 
	    </div> 
    </div> 
            
        </div>
    );
};

export default ErrorRoute;