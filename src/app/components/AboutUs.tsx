import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export default function AboutUs() {
  return (
    <div className=" relative grid md:grid-cols-2 grid-cols-1 gap-12 min-h-[500px] md:mt-[130px] mt-[60px]">
      <div className="relative ">
        <Image
          alt="person"
          width={500}
          height={0}
          className="w-full h-[460px] rounded-lg object-cover"
          src={"/assets/images/about_us/person.jpg"}
        />
        <Image
          alt="person"
          width={370}
          height={0}
          className=" absolute md:h-[330px] h-[250px] z-10 right-0 md:bottom-0 -bottom-10 rounded-lg object-cover"
          src={"/assets/images/about_us/parts.jpg"}
        />
      </div>
      <div className="flex flex-col justify-between space-y-6">
        <h2 className="text-[#FF3811] mt-12 md:mt-0 text-xl font-bold">About Us</h2>
        <p className="md:text-5xl text-3xl text-[#151515] font-bold">
          We are qualified <br></br> & of experience <br></br> in this field
        </p>
        <p className="text-[#737373] text-base">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.
        </p>
        <p className="text-[#737373] text-base">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.
        </p>
        <Button className="bg-[#FF3811] md:w-[160px] w-[120px] md:h-[50px] h-[40px] md:text-base  text-xs hover:bg-[#fc3a37] text-white">
          Get More Info
        </Button>
      </div>
    </div>
  );
}
