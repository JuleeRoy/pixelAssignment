import React ,{useState} from 'react'
import{Link,useLocation} from 'react-router-dom'
import './Topbar.css'
const Topbar = () => {
  const [open, setopen] = useState(false);
   const handleOpen = () => {
          setopen(!open);
          console.log("dfghbfghnf")
        };

        const location=useLocation()
  return (
      <section id="topBar_Section">
        <nav>
             <div className='firstPart'>
                  <span onClick={handleOpen}>
                    <i className='fa-solid fa-bars'></i>
                  </span>
                   
                   <Link to="/shop" className="contractor">
                          Contractor
          </Link>
                  
             </div>
             
          <div className={`secondPart ${open ? "openSecondPart" : ""}`} >
           <ul>

           <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
            </li>
            <li>
            <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>
            Dashboard
          </Link>
              
            </li>
            <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            About Us
          </Link>
            </li>
            <li>
            <Link to="/new" className={location.pathname === '/new' ? 'active' : ''}>
            News
          </Link>
            </li>
            <li>
            <Link to="/userpolicy" className={location.pathname === '/userpolicy' ? 'active' : ''}>
            UserPolicy
          </Link>
            </li>
            <li>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
            Contact
          </Link>
            </li>
            
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