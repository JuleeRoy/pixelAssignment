import React from 'react'
import './Topbar.css'
const Topbar = () => {
  return (
      <section id="topBar_Section">
        <nav>
             <div className='firstPart'>
                  <span>
                    <i className='fa-solid fa-bars'></i>
                  </span>
                  <p>
                    constructor
                  </p>
             </div>
             
             <div className='secondPart'>
           <ul>
            <li>Dashboard</li>
            <li>About Us</li>
            <li>News</li>
            <li>User Policy</li>
            <li>Contact</li>
            <li>...</li>
           </ul>
             </div>
             <div className='thirdPart'>
                <form action="">
                    <span>
                        <i className='fa-solid fa-magnifying-glass'></i>
                    </span>
                    <input type="text" placeholder='search your documents' />
                </form>
             </div>
             <div className='fourthPart'>
                <ul>
                    <li>
                        <span>
                            <i className='fa-solid fa-user'></i>
                        </span>
                    </li>
                    <li>
                        <p>userName</p>
                    </li>
                    <li>
                    <span id='searchBar'>
                        <i className='fa-solid fa-magnifying-glass'></i>
                    </span>
                    </li>
                    <li>
                        <span>
                            <i className='fa-solid fa-bell'></i>
                        </span>
                    </li>
                    <li>
                        <span>
                            <i className='fa-solid fa-close'>

                            </i>
                        </span>
                    </li>
                </ul>
             </div>
             <div className="user">
             <span>
            <i className='fa-solid fa-user'></i>
            </span>
             </div>
        </nav>
      </section>
  )
}

export default Topbar