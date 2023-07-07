import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import Home from '../HomePage/home/Home'
import Shop from '../shopPage/shop/Shop'
import Contact from '../shopPage/pages/Contact'
import AboutUs from '../shopPage/pages/AboutUs'
import Dashboard from '../shopPage/pages/Dashboard'
import New from '../shopPage/pages/New'
import UserPolicy from '../shopPage/pages/UserPolicy'
const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/new" element={<New/>} />
        <Route path="/userpolicy" element={<UserPolicy/>} />
    </Routes>
    </>
  )
}

export default AllRoutes