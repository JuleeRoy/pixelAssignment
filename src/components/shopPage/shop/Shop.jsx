import React from 'react'
// import SideBar from '../sideBar/SideBar';
import Topbar from '../topBar/Topbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Dashboard from '../dashBoard/Dashboard';

import './shop.css'
import ProductSection from '../productSection/ProductSection';
import IconBar from '../iconBar/IconBar';
const Shop = () => {
  return (
    
    <section className='bg-light'>
      <article id="shop_Page_Section">
          <Topbar/>
          <main>
            <aside id="iconBar">
              <IconBar/>
            </aside>
            <aside id="product_Section">
                   <ProductSection/>
            </aside>
            <aside id='dashboard'>
              <Dashboard/>
            </aside>
            
          </main>
      </article>
    </section>
  )
}

export default Shop