import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircleArrowRight } from "lucide-react";


const Product = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products?limit=6"
    );
    console.log(response.data);
    setData(response.data);
  };

  useEffect(function () {
    getData();
  }, []);

  return (
    <>
    <div className="flex flex-wrap gap-6">
    {
        data.map((elem) => (
            <div key={elem.id} className="w-44 bg-white rounded-lg shadow p-3 hover:shadow-md transition">
                <div className="h-40 flex items-center justify-center">
                    <img src={elem.image} alt={elem.title} className="w-full h-full object-contain" />
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
<div className="flex items-center justify-center mt-8">
  <a href="/product" className="group inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-2.5 rounded-full text-sm transition-all duration-200 shadow-md hover:shadow-lg"><span>View All Products</span> <CircleArrowRight strokeWidth={1.5} className="transition-transform duration-200 group-hover:translate-x-1" /></a>
</div>
    </>
  )
};

export default Product;
