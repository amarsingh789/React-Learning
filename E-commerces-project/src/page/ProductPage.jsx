import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductSkeleton from '../components/ProductSkeleton';


const ProductPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    setLoading(true)
    const response = await axios.get(
      'https://dummyjson.com/products?limit=60'
    );
    console.log(response.data);
    setData(response.data.products);
    setLoading(false)
  };

  useEffect(function () {
    getData();
  }, []);

  return (
    <div className='max-w-7xl mx-auto px-6 py-10'>
        <h2 className='text-2xl font-semibold mb-6'>All Products</h2>
        <div className="flex flex-wrap gap-6">
    {
        loading
        ? Array.from({ length:12}).map((_,i)=>(
             <ProductSkeleton key={i}/>
        ))
        :data.map((elem) => (
            <div key={elem.id} className="w-44 bg-white rounded-lg shadow p-3 hover:shadow-md transition">
                <div className="h-40 flex items-center justify-center">
                    <img src={elem.thumbnail} alt={elem.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-sm mt-2 font-medium line-clamp-2">
                    {elem.title}
                </h3>
                <p className="text-indigo-600 font-semibold mt-1">
                    ₹ {elem.price}
                </p>
            </div>
        ))
    }

  </div>;
    </div>
  )
};


export default ProductPage
