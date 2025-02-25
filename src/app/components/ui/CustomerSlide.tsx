"use client";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";

interface CustomerSlideProps{
    img: string,
    name: string,
    ocupation: string,
    comments: string,
    rating: number,
}
export default function CustomerSlide({img,name,ocupation,comments,rating}:CustomerSlideProps) {
  return (
    <Card className="ml-10 p-6 space-y-4">
      <div className="flex justify-between items-center gap-6">
        <div className="flex justify-between items-center gap-4">
          <div className="w-[70px] h-[70px] rounded-full flex justify-center items-center bg-gray-200 border">
            <Image
              src={img}
              width={50}
              height={50}
              alt="person"
            />
          </div>
          <div>
            <h4 className="text-[#444444] text-2xl font-bold">
              {name}
            </h4>
            <p className="text-xl text-[#737373] font-semibold">{ocupation}</p>
          </div>
        </div>
        <div>
          <Quote className="w-12 h-12 text-[#FF3811]/30" />
        </div>
      </div>
      <p className="text-[#737373] pr-8">
       {comments}
      </p>
      <div>
        <Rating size={30} initialValue={rating} />
      </div>
    </Card>
  );
}
