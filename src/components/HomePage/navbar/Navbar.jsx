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
<div className={`section ${open ? "open" : ""}`}
>
    
         <ul className="menu-links">
          <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
            
          </li>
          <li>
          <Link to="/shop">Shop</Link>
          </li>
          <li>
          <Link to="/">Gallery</Link>
          </li>
          <li>
          <Link to="/">Contact</Link>
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
        {/* {open ? <span>
            <i class="fa-solid fa-x"></i>
        </span>
        :  <span>
        <i className="fa-solid fa-bars"></i>
        </span>} */}
        <span>
        <i className="fa-solid fa-bars"></i>
        </span>
      </div>
    </div>
  

  );
}

export default Navbar;