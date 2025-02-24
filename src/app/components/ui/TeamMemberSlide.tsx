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
import TeamSlide from "./TeamSlide";

export default function TeamMemberSlide() {
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
        className="absolute z-10 top-1/2 left-2 transform -translate-y-1/2 bg-[#FF3811] p-4 rounded-full hover:bg-[#FF3811] shadow "
      >
        <ArrowLeft size={20}  className="text-white"/>
      </button>
      <button
        onClick={handleNext}
        className="absolute z-10 top-1/2 right-2 bg-[#FF3811] transform -translate-y-1/2 p-4 rounded-full shadow hover:bg-[#FF3811]"
      >
        <ArrowRight size={20} className="text-white" />
      </button>

      <Swiper
        onSwiper={(swiper) => {
          // Set the swiper instance to the ref once it is ready
          swiperRef.current = swiper;
        }}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Navigation, Pagination]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1, // Mobile
          },
          768: {
            slidesPerView: 2, // Tablet and larger
          },
          1024: {
            slidesPerView: 3, // Tablet and larger
          },
        }}
      >
        <SwiperSlide>
          <TeamSlide img={"/assets/images/team/1.jpg"} title="Car Engine Plug" subtitle="Engine Expert" href="#"/>
        </SwiperSlide>
        <SwiperSlide>
          <TeamSlide img={"/assets/images/team/2.jpg"} title="Car Engine Plug" subtitle="Engine Expert" href="#"/>
        </SwiperSlide>
        <SwiperSlide>
          <TeamSlide img={"/assets/images/team/3.jpg"} title="Car Engine Plug" subtitle="Engine Expert" href="#"/>
        </SwiperSlide>
        <SwiperSlide>
          <TeamSlide img={"/assets/images/team/3.jpg"} title="Car Engine Plug" subtitle="Engine Expert" href="#"/>
        </SwiperSlide>
        <SwiperSlide>
          <TeamSlide img={"/assets/images/team/3.jpg"} title="Car Engine Plug" subtitle="Engine Expert" href="#"/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
