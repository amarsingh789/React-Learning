import React from 'react'

const SkeletonGrid = () => {
   return (
    <div className="flex flex-wrap gap-4 justify-center">
      {Array.from({ length: 15 }).map((_, i) => (
        <div key={i} className="w-44">
          <div className="h-40 rounded-xl bg-zinc-800 animate-pulse"></div>
          <div className="mt-2 h-4 rounded bg-zinc-700 animate-pulse"></div>
        </div>
      ))}
    </div>
  );
}

export default SkeletonGrid

