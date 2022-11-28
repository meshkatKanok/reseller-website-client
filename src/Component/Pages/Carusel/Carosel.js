import React from 'react';
import '../../Share/Style.css'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../Carusel/casudel.css'
import '../Carusel/carudelanimation.css'
 

const Carosel = () => {
    const slides =[
        {
          title: "WELCOME TO THE SGU MARKET",
          description:
            " CHECK YOUR FAVOURITE CAR AND BUY NOW.",
          button: "Buy now",
          image: "http://themes.potenzaglobalsolutions.com/html/cardealer/revolution/assets/e13ec-06-audi-s2.png",
          user: "Luan Gjokaj",
          userProfile: "https://i.imgur.com/JSW6mEk.png"
        },
        {
          title: "WELCOME  TO THE SGU MARKET",
          description:
          " CHECK YOUR FAVOURITE CAR AND BUY NOW.",
          button: "Buy now",
          image: "http://themes.potenzaglobalsolutions.com/html/cardealer/revolution/assets/ec416-03-huydai.png",
          user: "Erich Behrens",
          userProfile: "https://i.imgur.com/0Clfnu7.png"
        },
        {
          title: "WELCOME TO THE SGU MARKET",
          description:
          " CHECK YOUR FAVOURITE CAR AND BUY NOW.",
          button: "Buy now",
          image: "http://themes.potenzaglobalsolutions.com/html/cardealer/revolution/assets/1fa45-02-bmw.png",
          user: "Bruno Vizovskyy",
          userProfile: "https://i.imgur.com/4KeKvtH.png"
        }
      ];
      
    return (
        <div>
 <div className='slider-bg'>
    
    <Slider className="slider-wrapper">
      {slides.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('../../img/carsbg.jpg') no-repeat center center` }}
        >
          <div className="inner">
           <h1><img style={{height:'200px'}} src={item.image}/></h1>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
             
          </div>
        </div>
      ))}
    </Slider>
  </div>
          
        </div>
    );
};

export default Carosel;