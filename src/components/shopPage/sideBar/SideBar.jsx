import React, { useState } from 'react'
import {
    FaTh,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaBars
} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import "./sideBar.css"

const SideBar = ({children}) => {
    const[isOpen,setisOpen]=useState(false);
    const toggle=()=>setisOpen(!isOpen);
    const menuItems=[
        {
         path:"/dashboard",
         name:"Dashboard",
         icon:<FaTh/>
        },
        {
            path:"/account",
            name:"Account",
            icon:<FaUserAlt/>
           },
           {
            path:"/comment",
            name:"Comment",
            icon:<FaCommentAlt/>
           },
           {
            path:"/analytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
           },
    ]
  return (
    <div className='container'>
        <div style={{width: isOpen? "300px":"50px"}} className="sidebar">
            <div className="top_section">
            <h1 style={{display:isOpen ? "block" :"none"}
            }
            >logo</h1>
              <div className="bars"
               style={{marginLeft:isOpen?"50px":"0px"}}
               
              >
                <FaBars onClick={toggle}/>
                </div>  
            </div>
            {
                menuItems.map((item,index)=>{
                   return(
                    <NavLink to={item.path} key={index}
                    className="link"
                    activeclassName="active" >
                        <div className="icon">
                            {item.icon}
                        </div>
                        <div className="link_text"
                        style={{display:isOpen?"block":"none"}}
                        >
                            {item.name}
                        </div>

                    </NavLink>
                   )


                })
            }
        </div>
        <main>{children}</main>

    </div>
  )
}

export default SideBar