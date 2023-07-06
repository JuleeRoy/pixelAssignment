import React ,{useState} from 'react'
import "./ProductBar.css"
import { NavLink } from 'react-router-dom'
const ProductBar = () => {

const[dropdown ,setDropdown]=useState(false)
const handleDropDown=()=>{
    setDropdown(!dropdown)
}
  return (
<>
<nav className="productTopBar">
      <div>
      <span>
      <i className="fa-solid fa-bag-shopping"></i>
         </span>
        <p className='fw-bold'>
         Products
        </p>
      </div>
      <div>
        <ul>
        <li>Active</li>
         <li>Draft</li>
        <li>Assembly</li>
        <li className='arrowDown' onClick={handleDropDown}>
         <span>
         <i className={dropdown ?"fa-solid fa-angle-up":"fa-solid fa-angle-down"}></i> 
         </span>
         </li>
         {
            dropdown ? <Drop/> : ""
         }
        </ul>
      </div>
      <div>
        <div>
        <span className='plus'>
         <i className='fa-solid fa-plus'>
        </i></span>
        <span id='AddProduct'> Add Product</span>
        <span id='add'> Add </span>
        </div>
      </div>
</nav>
<nav className="productSecondBar">
    
</nav>
</>
  )
}

const Drop=()=>{
    return(
      <div id="dropDownBox">
      <li>Draft</li>
        <li>Assembly</li>
      </div>
    )
}

export default ProductBar