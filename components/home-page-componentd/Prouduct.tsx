"use client";
import Image from "next/image";
import { useState } from "react";

const Product = ({ product }:any) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleImageLoad = () => {
    setIsLoading(false); 
  };

  return (
    <div onClick={handleClick}
      className={`grid place-items-center cursor-pointer ${isAnimating ? 'animate-custom' : ''} `}
    >
      <div className="bg-white py-2 transition-all duration-300 grid rounded-3xl border-2 text-MineShaft relative">
        {isLoading && (
          <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-50">
            <div className="lds-dual-ring"></div>
          </div>
        )}
        <Image
          className="h-[280px] object-contain"
          src={product.picture}
          alt="ProductImage"
          onLoadingComplete={handleImageLoad}
          priority
        />
        <div className="p-4 rounded-b-3xl">
          <h2 className="text-lg xl:text-DisplayS text-Observatory">
            {product.title}
          </h2>
          <p className="text-BodyM py-4 sm:py-6">
            {product.category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
