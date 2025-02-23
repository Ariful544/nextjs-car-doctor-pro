"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { slides } from "../../../public/carouselData";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  const {
    image,
    heading,
    description,
    primaryButtonText,
    secondaryButtonText,
  } = slides[currentSlide];
  return (
    <div className="relative mt-[30px] w-full h-[500px] sm:h-[600px] overflow-hidden">
      {/* Slide Image */}
      <div className="relative  w-full h-full">
        <Image
          src={image}
          alt={heading}
          fill
          className="object-cover w-full h-full rounded-lg  object-center"
          priority
        />
        <div className="absolute rounded-lg inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Slide Content */}
      <div className="absolute inset-0 flex items-center justify-start md:px-20 pl-8 ">
        <div className="text-left max-w-md">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-4">
            {heading}
          </h2>
          <p className="text-sm sm:text-base text-gray-200 mb-6">
            {description}
          </p>
          <div className="flex flex-wrap justify-start gap-4">
            {primaryButtonText && (
              <Button className="bg-[#FF3811] md:py-6 py-3 md:px-8 px-4 hover:bg-[#fc3a37] text-white">
                {primaryButtonText}
              </Button>
            )}
            {secondaryButtonText && (
              <Button
                variant="outline"
                className="text-gray-300 md:py-6 py-3 md:px-8 px-4 border-gray-300 bg-transparent hover:bg-white hover:text-black"
              >
                {secondaryButtonText}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute bottom-16 right-32 z-10 bg-white/30 rounded-full md:p-4 p-2  shadow hover:bg-white/40"
        onClick={goToPrevious}
        aria-label="Previous Slide"
      >
        <ArrowLeft className="h-5 w-5 text-white" />
      </button>
      <button
        className="absolute right-12 bottom-16 z-10 bg-[#FF3811] rounded-full md:p-4 p-2 shadow hover:bg-[#FF3811]"
        onClick={goToNext}
        aria-label="Next Slide"
      >
        <ArrowRight className="h-5 w-5 text-white" />
      </button>
    </div>
  );
}
