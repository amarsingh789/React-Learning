import React from 'react'
import ImageCard from "./ImageCard";
import SkeletonGrid from "./SkeletonGrid"

const Gallery = ({loading, userData}) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
        {/* Condition ? (Agar True hua toh ye) : (Agar False hua toh ye) */}
        {loading ? (
          <SkeletonGrid />
        ) : (
          userData.map((elem) => (
            <ImageCard key={elem.id} elem={elem}/>
          ))
        )}
      </div>
  )
}

export default Gallery
