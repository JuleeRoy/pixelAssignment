import React from 'react'
import Navbar from '../navbar/Navbar'
import './Home.css'
import  arrow from'../../../assets/images/Mask group (1).png'
import ratings from '../../../assets/images/Frame 3707.png'
import design from '../../../assets/images/Design.png';
import shoes from '../../../assets/images/shoes.png'
import shadow from'../../../assets/images/shadow.png'
import discount from '../../../assets/images/Frame 3737.png'
import Popular from '../popularProduct/Popular'
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <section id='home_Section'>
    <article>
    <Navbar/>
     <main id="home_Banner">
        <aside className="leftContent">
            <div>
                <h1>Purchase your shoes now</h1>
            </div>
            <div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam magnam fugiat sed laudantium.</p>
            </div>
            <div>
             <div className='one'>
             <button>
                Shop Now
              {/* <NavLink to='/shop'>  Shop Now</NavLink> */}
           </button>
             </div>
             <div className='two'>
             <img src={arrow} alt="" className='img-fluid arrow'/>
             </div>
            <div className='three mt-5'>
            <img src={ratings}alt="" className='img-fluid ratings' />
            </div>

            </div>
        </aside>
        <aside className="rightContent">
          <div className="shoes">
          <img src={shoes} alt="" className="img-fluid" />
          </div>
           <div className="design">
           <img src={design} alt="" className="img-fluid" />
           </div>
             <div className="shadowImg">
             <img src={shadow} alt="" className="img-fluid" />
             </div>
              <div className="discount" style={{width:"50%"}}>
              <img src={discount} alt="" className="img-fluid" />
              </div>
        </aside>
     </main>
     <main id="product_Banner" className='mt-4'>
        <Popular/>
     </main>
    </article>
     </section>
  )
}

export default Home