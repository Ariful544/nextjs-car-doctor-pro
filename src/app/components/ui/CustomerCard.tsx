"use client";

import { useRef } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CustomerSlide from "./CustomerSlide";

export default function CustomerCard() {
  // Reference for swiper instance
  const swiperRef = useRef<SwiperClass | null>(null);

  // Functions to navigate
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="relative w-full">
      {/* Custom Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute z-10 top-1/2 left-2 transform -translate-y-1/2 bg-[#FF3811] md:p-4 p-2 rounded-full hover:bg-[#FF3811] shadow "
      >
        <ArrowLeft size={20}  className="text-white"/>
      </button>
      <button
        onClick={handleNext}
        className="absolute z-10 top-1/2 right-0 bg-[#FF3811] transform -translate-y-1/2 md:p-4 p-2 rounded-full shadow hover:bg-[#FF3811]"
      >
        <ArrowRight size={20} className="text-white" />
      </button>

      <Swiper
        onSwiper={(swiper) => {
          // Set the swiper instance to the ref once it is ready
          swiperRef.current = swiper;
        }}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode, Navigation, Pagination]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1, // Mobile
          },
          1024: {
            slidesPerView: 2, // Tablet and larger
          },
         
        }}
      >
        <SwiperSlide>
          <CustomerSlide img={"https://img.icons8.com/?size=100&id=x0qTmzjcFRhW&format=png&color=000000"} name="MD Ariful Islam" ocupation="Worker" comments="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. " rating={5}/>
        </SwiperSlide>
        <SwiperSlide>
          <CustomerSlide img={"https://img.icons8.com/?size=100&id=x0qTmzjcFRhW&format=png&color=000000"} name="Salman Khan" ocupation="Businessman" comments="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. " rating={4}/>
        </SwiperSlide>
        <SwiperSlide>
          <CustomerSlide img={"https://img.icons8.com/?size=100&id=x0qTmzjcFRhW&format=png&color=000000"} name="Anas bin Arif" ocupation="Enterpeuner" comments="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. " rating={3}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
