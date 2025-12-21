import React from 'react'
import { Link } from 'react-router-dom';
import {useCart} from '../context/CartContext'


const CartPage = () => {
  
  const {cartItems, removeFromCart, updateQty} = useCart();

  const subTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,0
  );
  if(cartItems.length === 0){
    return (
      <div className='flex flex-col items-center justify-center py-24 text-center'>
        <h2 className='text-3xl font-semibold text-gray-800'>Your cart is empty 🛒</h2>
        <p className='text-gray-500 mt-2'>Looks like you haven’t added anything yet</p>
        <Link to="/product" className='mt-6 bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition'>
        Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className='max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10'>
      <div className='md:col-span-2 space-y-6'>
        <h2 className='text-3xl font-semibold mb-4 text-gray-800'>Shopping Cart</h2>
      {cartItems.map((item)=>{
        return(
          <div key={item.id} className='flex gap-6 bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition'>
          <img src={item.thumbnail} alt={item.title} className='w-24 h-24 object-contain bg-gray-50 rounded-xl' />
          <div className='flex-1'>
            <h3 className='font-medium text-gray-800 line-clamp-2'>{item.title}</h3>
            <p className='text-indigo-600 font-semibold mt-1'>
              ₹ {item.price}
            </p>
            <div className='flex items-center gap-3 mt-4'>
              <button onClick={()=> updateQty(item.id, item.qty - 1)} className='w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-100'>-</button>
              <span className='font-medium'>{item.qty}</span>
              <button onClick={()=> updateQty(item.id, item.qty + 1)} className='w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-100'>
                +
              </button>
            </div>
          </div>
          <button onClick={()=> removeFromCart(item.id)} className='text-sm text-red-500 hover:underline'>
            Remove
          </button>
        </div>
        )
      })}
      </div>
      <div className="bg-gray-50 p-6 rounded-2xl h-fit sticky top-24">
        <h3 className='text-xl font-semibold text-gray-800 mb-4'>Order Summary</h3>
        <div className='flex justify-between text-gray-600 mb-2'> <span>Subtotal</span> <span>₹ {subTotal}</span></div>
        <div className='flex justify-between text-gray-600 mb-4'>
          <span>Shipping</span>
          <span className='text-green-600'>Free</span>
        </div>
        <div className='border-t pt-4 flex justify-between text-lg font-semibold'>
          <span>Total</span>
          <span>₹ {subTotal}</span>
        </div>
        <button className='mt-6 w-full bg-indigo-600 text-white hover:bg-indigo-700 py-3 rounded-full transition shadow-md'>Proceed to Checkout</button>
      </div>
    </div>
  )
}

export default CartPage
