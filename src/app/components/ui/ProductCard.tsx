'use client'
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";

export default function ProductCard() {
    const [rating, setRating] = useState<number>(0)
    const handleRating = (rate: number) => {
        setRating(rate)
    }
  return (
    <Card className="p-6 flex flex-col justify-between space-y-6">
      <div className="bg-[#F3F3F3] h-[300px] place-items-center place-content-center rounded-lg">
        <Image
          width={250}
          height={150}
          alt="Service1"
          className=""
          src={"/assets/images/products/1.png"}
        />
      </div>
      <div className="place-items-center space-y-4">
      <Rating onClick={handleRating} initialValue={rating} />
        <h3 className="font-bold text-[#444444] text-2xl">Car Engine Plug</h3>
        <p className="text-[#FF3811] text-xl font-semibold">$20.00</p>
      </div>
    </Card>
  );
}
