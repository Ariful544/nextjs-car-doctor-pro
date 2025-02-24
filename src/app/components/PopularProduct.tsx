import React from "react";
import { Button } from "./ui/button";
import ProductCard from "./ui/ProductCard";

export default function PopularProduct() {
  return (
    <div className="min-h-screen mt-[130px]">
      <div className="text-center space-y-4">
        <h2 className="text-[#FF3811]  text-xl font-bold">Popular Products</h2>
        <p className="md:text-5xl text-3xl text-[#151515] font-bold">
        Browse Our Products
        </p>
        <p className="text-[#737373] text-base">
        the majority have suffered alteration in some form, by injected humour, or randomised <br></br> words which do not look even slightly believable. 
        </p>
      </div>
      <div className="mt-14 grid md:grid-cols-3 grid-cols-1 gap-4">
        <ProductCard/>
      </div>
      <div className="text-center py-10">
        <Button
          variant="outline"
          className="border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white"
        >
          More Services
        </Button>
      </div>
    </div>
  );
}
