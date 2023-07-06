import React from 'react'
import shoe from '../../../assets/images/shoes.png'
import heart from '../../../assets/images/heart.png'
import star from '../../../assets/images/star (1).png'
import './Popular.css'
const ProductCard = () => {
  return (
    <div className='productCard'>
         <div>
             <div className='imgBox'>
                <img src={shoe} alt="" className="img-fluid" />
                <img src={heart} alt="" className='heart' />
             </div>
             <div className="imgContent">
               <div className="one">
                <img src={star} alt="" className='img-fluid' />
                <p>(101 ratings)</p>
               </div>
               <div className="two">
                <p>Nike Running shoe</p>
               </div>
               <div className="three">
                 <p className="price fw-bold">
                    500$
                 </p>
                 <p className="soldOut">
                    <strike>(500 Sold Out)</strike>
                 </p>
                 <button className="buyNow">
                    BuyNow
                 </button>
               </div>
             </div>
            
    </div>
    </div>
  )
}

export default ProductCard