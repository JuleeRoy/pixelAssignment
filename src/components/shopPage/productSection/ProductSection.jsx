import React from 'react'
import ProductBar from './ProductBar'
import './ProductSection.css'
import products from './ProductData'
const ProductSection = () => {

console.log(products)
  return (
    <article className="productSection">
    <ProductBar/>
     <article className='All_products'>
        {
          products.map((item)=>{
           return(
            <div className='each_Product'>
              <img src={item.image} alt="" className='img-fluid'/>
              <p className='p-0 m-0'>{item.name}</p>
              <p>Lorem, ipsum.</p>
            </div>
           )
          })
        }
     </article>
</article>
  )
}

export default ProductSection