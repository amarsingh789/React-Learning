import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Homepage from './page/Homepage'
import ProductPage from './page/ProductPage'
import ProductView from './page/ProductView'
import CartPage from './page/CartPage'



const App = () => {

  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element={<HeroSection/>}/>
        <Route path='/home' element={<HeroSection/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/product/:id' element={<ProductView/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>

      <Footer/>
    </div>
  )
}

export default App
