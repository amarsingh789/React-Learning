import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './page/About'
import { Route, Routes } from 'react-router-dom'
import Home  from './page/Home'
import Contact from './page/Contact'
import NotFound from './page/NotFound'
import Product from './page/Product'
import Men from './page/Men'
import Women from './page/Women'
import Kids from './page/Kids'
import Courses from './page/Courses'
import CoursesDetails from './page/CoursesDetails'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div className='bg-black h-screen text-white'>
      <Navbar/>
      <Navbar2/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses/:id' element={<CoursesDetails/>}/>  {/* Dynamic Route use /:id */}
        <Route path='/product' element={<Product/>}>   {/* Nested Route use /:id */}
          <Route path='men' element={<Men/>} />
          <Route path='women' element={<Women/>} />
          <Route path='kids' element={<Kids/>} />
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
