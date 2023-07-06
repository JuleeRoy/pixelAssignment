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












// osama code


// import React from 'react'
// import shoes from '../../../assets/images/shoes.png'
// import star1 from "../../../assets/images/star (4).png"
// import shoesproduct from '../../../assets/images/shoeProduct.png'
// import heart from '../../../assets/images/heart.png'
// import star from '../../../assets/images/star (1).png'

// import './Popular.css'
// const ProductCard = () => {

//     const products = [
//         {
//           image: shoes,
//           rating: "11.4k Reviews",
//           name: "Nike Running Shoe",
//           price: 100,
//           discount: 500,
//         },
//         {
//           image: shoesproduct,
//           rating: "17.4k Reviews",
//           name: "Nike shoe Airmax",
//           price: 115,
//           discount: 100,
//         },
//         {
//           image: star1,
//           rating: "17.4k Reviews",
//           name: "Jordan Sneaker",
//           price: 50,
//           discount: 1500,
//         },
//         {
//           image: shoes,
//           rating: "17.4k Reviews",
//           name: "Nike Running Shoe 2",
//           price: 220,
//           discount: 210,
//         },
//       ];

//   return (

//    <div>
//     {
        
//      products.map((item)=>
//            {
//             let{image,rating,name,price,discount}=item
//             return(
//             <div className='productCard'>
//              <div>
//              <div className='imgBox'>
//              <img src={image} alt="" className="img-fluid" />
//              <img src={heart} alt="" className='heart' />
//           </div>
//           <div className="imgContent">
//             <div className="one">
//              <img src={star} alt="" className='img-fluid' />
//              <p>({rating})</p>
//             </div>
//             <div className="two">
//              <p>{name}</p>
//             </div>
//             <div className="three">
//               <p className="price fw-bold">
//                  {price}
//               </p>
//               <p className="soldOut">
//                  <strike>{discount} soldOut</strike>
//               </p>
//               <button className="buyNow">
//                  BuyNow
//               </button>
//             </div>
//           </div>
//              </div>
               
                
        
//         </div>
//             )
//            }
    
//            )
//         }
        
//    </div>
    
//   )
// }

// export default ProductCard