import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Homepostproduct = () => {
    const data=useLoaderData()
    console.log(data);
    return (
        <div>
            homepost
        </div>
    );
};

export default Homepostproduct;