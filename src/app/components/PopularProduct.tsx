import React from "react";
import { Button } from "./ui/button";
import ProductCard from "./ui/ProductCard";
import Heading from "./ui/Heading";

export default async function PopularProduct() {
  return (
    <div className="min-h-screen md:mt-[130px] mt-[60px]">
      <Heading
        title="Popular Products"
        subtitle="Browse Our Products"
        para={`the majority have suffered alteration in some form, by injected humour, or randomised<br>words which don't look even slightly believable.`}
      />
      <div className="mt-14 grid md:grid-cols-3 grid-cols-1 gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
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
