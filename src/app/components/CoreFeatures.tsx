import React from "react";
import Heading from "./ui/Heading";
import { Clock, Headset, Hourglass, ShieldCheck, Users, Wrench } from "lucide-react";
import CoreFeatureCard from "./ui/CoreFeatureCard";

export default function CoreFeatures() {
  return (
    <div className="min-h-[400px] md:mt-[130px] mt-[60px]">
      <Heading
        title="Core Features"
        subtitle="Why Choose Us"
        para={`the majority have suffered alteration in some form, by injected humour, or randomised <br> words which don't look even slightly believable. `}
      />
      <div className="mt-14 grid lg:grid-cols-6 md:grid-cols-3 gap-4 grid-cols-2 ">
        {/* expert team */}
        <CoreFeatureCard icon={Users} title="Expert Team" />
        {/* Timely Delivery */}
        <CoreFeatureCard icon={Clock} title="Timely Delivery" />
        {/* 24/7 Support */}
        <CoreFeatureCard icon={Headset} title="24/7 Support" />
        {/* Best Equipment */}
        <CoreFeatureCard icon={Wrench} title="Best Equipment" />
        {/* Guranty */}
        <CoreFeatureCard icon={ShieldCheck} title="100% Guranty" />
        {/* Timely Delivery */}
        <CoreFeatureCard icon={Hourglass} title="Timely Delivery" />
      </div>
    </div>
  );
}
