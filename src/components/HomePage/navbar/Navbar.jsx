import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../../../assets/logo/logo icon.png'
import "./Navbar.css";

function Navbar() {
  const [open, setopen] = useState(false);

  const handleopen = () => {
    setopen(!open);
  };

  const location=useLocation()
  return (
<div id="nav">
<div className="logo">
<img src={logo} alt="" />
<p className=''>BIZPUSH</p>
</div>
<div className={`section ${open ? "open" : ""}`}>
    
         <ul className="menu-links">
          <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
            
          </li>
          <li>
          <Link to="/shop" className={location.pathname === '/shop' ? 'active' : ''}>
            Shop</Link>
          </li>
          <li>
          <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>
            Gallery</Link>
          </li>
          <li>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
            Contact</Link>
          </li>
        </ul>
        <ul className="auth">
        <li>
            <i class="fa-solid fa-magnifying-glass"></i>
            </li>
          <li>
          <i class="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
           <span>
           <i class="fa-solid fa-user"></i>
           </span>
          </li>

        </ul>
</div>

     <div onClick={handleopen} className="hamburger">
        
        <span>
        <i className="fa-solid fa-bars"></i>
        </span>
      </div>
    </div>
  

  );
}

export default Navbar;