import React from 'react'

const ViewSkeleton = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-12 animate-pulse'>
      {/* Image Skeleton */}
      <div className='bg-gray-200 rounded-2xl h-96'></div>
      {/* Detailed Skeleton */}
      <div className='space-y-4'>
        <div className='bg-gray-200 rounded h-6 w-3/4'></div>
        <div className='bg-gray-200 rounded h-4 w-full'></div>
        <div className='bg-gray-200 rounded h-4 w-5/6'></div>
        <div className='bg-gray-300 rounded h-8 w-1/3 mt-6'></div>
        <div className='bg-gray-300 rounded h-12 w-40 mt-8'></div>
      </div>
    </div>
  )
}

export default ViewSkeleton
