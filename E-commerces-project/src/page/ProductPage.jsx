import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductSkeleton from "../components/ProductSkeleton";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const limit = 15;

  const getData = async () => {
    setLoading(true);
    const skip = (page - 1) * limit;
    const response = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    console.log(response.data);
    setData(response.data.products);
    setTotalPage(Math.ceil(response.data.total / limit));
    setLoading(false);
  };

  useEffect(
    function () {
      getData();
    },
    [page]
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold mb-8 text-gray-800">All Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {loading
          ? Array.from({ length: limit }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))
          : data.map((elem) => (
              <div
                key={elem.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg p-4 transition-all duration-300 cursor-pointer hover:translate-y-1"
              >
                <Link to={`/product/${elem.id}`}>
                  <div className="h-40 flex items-center justify-center bg-gray-50 rounded-lg">
                  <img
                    src={elem.thumbnail}
                    alt={elem.title}
                    className="h-full object-contain"
                  />
                </div>
                <h3 className="text-sm mt-3 font-medium text-gray-700 line-clamp-2">
                  {elem.title}
                </h3>
                <p className="text-indigo-600 font-semibold mt-2 text-base">
                  ₹ {elem.price}
                </p>
                </Link>
              </div>
            ))}
      </div>
      {/* Pagination */}
      <div className="mt-14 flex justify-center">
        <Stack spacing={2}>
        <Pagination
          count={totalPage}
          page={page}
          onChange={(event, value) => setPage(value)}
          shape="rounded"
          color="primary"
          size="large"
        />
      </Stack>
      </div>
    </div>
  );
};

export default ProductPage;
