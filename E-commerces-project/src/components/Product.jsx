import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircleArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


const Product = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://dummyjson.com/products?limit=6&skip=78" 
    );
    console.log(response.data);
    setData(response.data.products);
  };

  useEffect(function () {
    getData();
  }, []);

  return (
    <>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
    {
        data.map((elem) => (
            <div key={elem.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg p-4 transition-all duration-300 cursor-pointer hover:translate-y-1">
              <Link to={`/product/${elem.id}`}>
                  <div className="h-40 flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
                    <img src={elem.thumbnail} alt={elem.title} className="h-full object-contain transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-sm mt-4 font-medium text-gray-800 line-clamp-2">
                    {elem.title}
                </h3>
                <p className="text-indigo-600 font-semibold mt-2 text-base">
                    ₹ {elem.price}
                </p>
              </Link>
                
            </div>
        ))
    }
</div>
<div className="flex items-center justify-center mt-10">
  <a href="/product" className="group inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full text-sm transition-all duration-200 shadow-md hover:shadow-lg"><span>View All Products</span> <CircleArrowRight strokeWidth={1.5} className="transition-transform duration-200 group-hover:translate-x-1" /></a>
</div>
    </>
  )
};

export default Product;
