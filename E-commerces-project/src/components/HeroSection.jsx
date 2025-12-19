import React from "react";
import heroImg from "../assets/hero-banner.jpg";
import petImg from "../assets/Pet-Care_WEB.jpg";
import pharmacyImg from "../assets/pharmacy-WEB.jpg";
import babyImg from "../assets/babycare-WEB.jpg";
import itemImg from '../assets/item.png'
import Product from "./Product";

const HeroSection = () => {
  return (
    <>
      <section className="heroimage w-full">
        <img src={heroImg} alt="PrimeCart shopping banner" className="w-full object-cover" />
      </section>
      <section className="shopcategory max-w-7xl m-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6">Shop By Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src={petImg} className="rounded-lg shadow-sm hover:scale-105 transition cursor-pointer" alt="Pet Care" />
          <img src={pharmacyImg} className="rounded-lg shadow-sm hover:scale-105 transition cursor-pointer" alt="Pharmacy" />
          <img src={babyImg} className="rounded-lg shadow-sm hover:scale-105 transition cursor-pointer" alt="Baby Care" />
          {/* <img src={itemImg} className="rounded-lg shadow-sm hover:scale-105 transition" alt="Zero fee" /> */}
        </div>
      </section>
      <div className="featured-item max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6">Featured Product</h2>
            <Product/>
      </div>
    </>
  );
};

export default HeroSection;
