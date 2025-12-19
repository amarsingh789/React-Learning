import React from 'react'

const ProductSkeleton = () => {
  return (
    <div className='w-44 bg-white rounded-lg shadow p-3 animate-pulse'>
        {/* Image box */}
        <div className='h-40 bg-gray-200 rounded'></div>
        {/* Tittle box */}
        <div className='h-3 bg-gray-200 rounded mt-3 '></div>
        <div className='h-3 bg-gray-200 rounded mt-2 w-3/4 '></div>
        {/* Price */}
        <div className='h-4 bg-gray-300 rounded mt-3 w-1/2'></div>
    </div>
  )
}

export default ProductSkeleton
