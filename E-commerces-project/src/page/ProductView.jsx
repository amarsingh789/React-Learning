import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom'
import ProductSkeleton from '../components/ProductSkeleton';
import ViewSkeleton from '../components/ViewSkeleton';
import { useCart } from "../context/CartContext";

const ProductView = () => {
  const {addToCart} = useCart()
    const { id } = useParams()
    const navigate = useNavigate()

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const getProduct = async()=>{
        setLoading(true)
        const response = await axios.get(
        `https://dummyjson.com/products/${id}`
    )
    setProduct(response.data)
    console.log(response.data);
    setLoading(false)
    
    }
    useEffect(() =>{
        getProduct()
    }, [id])

     // 🔐 GUARD (VERY IMPORTANT)
//   if (!product) {
//     return (
//       <div className="p-10 text-center text-gray-500">
//         Loading product...
//       </div>
//     )
//   }
if(loading){
    return (
        <div className='max-w-7xl mx-auto px-6 py-10'>
            <ViewSkeleton/>
        </div>
    )
}
  return (
    <div className='max-w-7xl mx-auto px-6 pxy-12'>
        {/* Back btn */}
        <button
        onClick={()=> navigate(-1)}
        className='mb-6 text-sm text-indigo-600 hover:underline'>Back to Products</button>

         <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        {/* Image Section */}
      <div className='bg-gray-50 rounded-2xl flex items-center justify-center p-8'>
        <img src={product.thumbnail} alt={product.title} className='h-96 object-contain' />
      </div>
      {/* Product details */}
      <div>
        <h1 className='text-3xl font-bold text-gray-800'>{product.title}</h1>
        <p className='text-gray-600 mt-4 leading-relaxed'>{product.description}</p>
        <p className='text-2xl font-semibold text-indigo-600 mt-6'> ₹{product.price}</p>
        <button onClick={()=> addToCart(product)} className='mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full transition shadow-md hover:shadow-lg'>Add to card</button>
      </div>
    </div>
    </div>
  )
}

export default ProductView
