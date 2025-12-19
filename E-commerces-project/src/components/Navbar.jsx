import { Search, ShoppingCart } from 'lucide-react'
import React from 'react'
import axios from 'axios'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-white px-8 py-4 items-center border-b border-gray-200
 shadow-sm'>
      {/* <div className="logo text-2xl font-bold text-indigo-600 tracking-wide">
        PrimeCart
      </div> */}
      <a href="/home" className='logo text-2xl font-bold text-indigo-600 tracking-wide'> PrimeCart</a>
      <div className="hidden md:flex search-bar items-center gap-2 bg-gray-100 rounded-full px-3 py-1 w-full max-w-md">
        <input type="text" placeholder='Search Product...' className='flex-1 bg-transparent px-3 py-2 text-sm text-gray-700 placeholder-gray-400 outline-none'/>
        <button className='bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full transition'><Search size={18}/></button>
      </div>
      <div className="links flex items-center gap-6">
        <a href="/" className='text-gray-700 text-sm font-medium hover:text-indigo-600 transition'>Login</a>
        <a href="/" className='relative flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm transition'><ShoppingCart strokeWidth={1.5} />Cart <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full '>2</span></a>
      </div>
    </div>
  )
}

export default Navbar
