import React from 'react'
// import SideBar from '../sideBar/SideBar';
import Topbar from '../topBar/Topbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Dashboard from '../dashBoard/Dashboard';
import Account from '../pages/Account';
import Analytics from '../pages/Analytics';
import Comment from '../pages/Comment';
import './shop.css'
import ProductSection from '../productSection/ProductSection';
import IconBar from '../iconBar/IconBar';
const Shop = () => {
  return (
    // <div>
    // <BrowserRouter>
    // <SideBar>
    // <Routes>
    // <Route path="/dashboard" element={<Dashboard/>}/>
    // <Route path="/account" element={<Account/>}/>
    // <Route path="/analytics" element={<Analytics/>}/>
    // <Route path="/comment" element={<Comment/>}/>
    // <Route path="/dashboard" element={<Dashboard/>}/>
    // </Routes>
    // </SideBar>
    // </BrowserRouter>
    // </div>
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