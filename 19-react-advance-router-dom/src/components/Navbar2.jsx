import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const navigate = useNavigate();
  return (
    <div className="py-2 px-5 bg-cyan-800">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-emerald-900 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Return To Home
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-emerald-900 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className="bg-emerald-900 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
