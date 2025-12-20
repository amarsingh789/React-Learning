import React from 'react'

const ProductSkeleton = () => {
  return (
    <div className='bg-white rounded-xl shadow-sm p-4 animate-pulse'>
        {/* Image box */}
        <div className='h-40 bg-gray-200 rounded-lg flex items-center justify-center'>
          <div className='h-24 w-24 bg-gray-200 rounded'></div>
        </div>
        {/* Tittle box */}
        <div className='mt-4 space-y-2'>
          <div className='h-3 bg-gray-200 rounded '></div>
        <div className='h-3 bg-gray-200 rounded w-3/4 '></div>
        </div>
        {/* Price */}
        <div className='h-4 bg-gray-300 rounded mt-4 w-1/2'></div>
    </div>
  )
}

export default ProductSkeleton
