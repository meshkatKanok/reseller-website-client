import React from 'react';
import Carosel from './Carusel/Carosel';
import Catagorey from './Caragorey/Catagorey'
import NewSection from './NewSection/NewSection';
import Advertise from './Advetisement/Advertise';

const Home = () => {
    return (
        <div>
            <Carosel/>
            <Catagorey/>  
            <Advertise/>
            <NewSection/>
        </div>
    );
};

export default Home;