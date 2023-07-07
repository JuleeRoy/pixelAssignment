import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from './ProductCard';
const Popular = () => {
 
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow:5,
        slidesToScroll:5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll:4,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll:3,
                },
              },

          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3.2,
              slidesToScroll:3.2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        //   {
        //     breakpoint: 375,
        //     settings: {
        //       slidesToShow: 1.5,
        //       slidesToScroll:1.5,
        //     },
        //   },
        ],
      };
  return (
    <div className>
      <h2>Popular Product</h2>
      <Slider {...settings} style={{width:"95%", margin:"0 auto"}}>
        
          
        
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
      </Slider>
    </div>
  );
};


export default Popular