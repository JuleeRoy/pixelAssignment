import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import Home from '../HomePage/home/Home'
import Shop from '../shopPage/shop/Shop'

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>} />
        
        <Route path="/shop" element={<Shop/>} />
    </Routes>
    </>
  )
}

export default AllRoutes