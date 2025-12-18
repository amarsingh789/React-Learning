import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-4 px-8 bg-cyan-800'>
      <h2 className='text-2xl font-bold'>Airway</h2>
      <div className="flex gap-10">
        <Link className='text-lg font-mediums' to='/'>Home</Link>
        <Link className='text-lg font-mediums' to='/about'>About</Link>
        <Link className='text-lg font-mediums' to='/contact'>Contact</Link>
        <Link className='text-lg font-mediums' to='/product'>Product</Link>
        <Link className='text-lg font-mediums' to='/courses'>Courses</Link>
        {/* <a className='text-lg font-mediums' href="/">Home</a>
        <a className='text-lg font-mediums' href="/about">About</a>
        <a className='text-lg font-mediums' href="/contact">Contact</a> */}
      </div>
    </div>
  )
}

export default Navbar
