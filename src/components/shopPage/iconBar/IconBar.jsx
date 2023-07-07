import React from "react";
import  avatar from '../../../assets/products/Avatar.png'
import "./IconBar.css";
const IconBar = () => {
  return (
    <div id="icon_Bar">
      <div id="icons">
        <li>
          <span>
            <i class="fa-brands fa-instagram"></i>
          </span>
        </li>
        <li>
          <span>
            <i class="fa-brands fa-facebook-messenger"></i>
          </span>
        </li>
        <li>
          <span>
          <i class="fa-solid fa-star"></i>
          </span>
        </li>
        <li>
          <span><i class="fa-solid fa-compass"></i></span>
        </li>
        <li>
          <span>
          <i class="fa-solid fa-earth-americas"></i>
          </span>
        </li>
        <li>
          <span>
          <i class="fa-regular fa-building"></i>
          </span>
        </li>
      </div>
      <div id="users">
        
        <li>
          <span>
            <img src={avatar} alt="" className="img-fluid" />
          </span>
        </li>
        <li>
          <span>
            <i className="fa-solid fa-user"></i>
          </span>
        </li>
        <li>
        <span>
            <i className="fa-solid fa-user"></i>
          </span>
        </li>
        <li>
        <span>
            <i className="fa-solid fa-user"></i>
          </span>
        </li>
        <li>
        <span>
            <i className="fa-solid fa-user"></i>
          </span>
        </li>
        <li>
        <span>
            <i className="fa-solid fa-user"></i>
          </span>
        </li>
       
      </div>
    </div>
  );
};

export default IconBar;
