import React from "react";
import { CardSection } from "./ui/Card";
import { Button } from "./ui/button";
import Heading from "./ui/Heading";

export default function Services() {
  return (
    <div className="min-h-screen mt-[130px]">
      <Heading
        title="Service"
        subtitle="Our Service Area"
        para={`the majority have suffered alteration in some form, by injected humour, or randomised <br> words which don't look even slightly believable. `}
      />
      <div className="mt-14 grid md:grid-cols-3 grid-cols-1 gap-4">
        <CardSection />
        <CardSection />
        <CardSection />
        <CardSection />
        <CardSection />
        <CardSection />
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
