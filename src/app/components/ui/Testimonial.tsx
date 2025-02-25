import React from "react";
import Heading from "./Heading";
import CustomerCard from "./CustomerCard";

export default function Testimonial() {
  return (
    <div className="md:h-[550px] h-[650px] md:mt-[130px] mt-[60px]">
      <Heading
        title="Testimonial"
        subtitle="What Customer Says"
        para={`the majority have suffered alteration in some form, by injected humour, or randomised <br> words which don't look even slightly believable. `}
      />
      <div className="mt-14">
        <CustomerCard/>
      </div>
    </div>
  );
}
