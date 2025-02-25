import React from "react";
interface FeatureProps{
    icon: React.ElementType; // using React.ElementType to allow components
    title: string
}
export default function CoreFeatureCard({icon:Icon,title}:FeatureProps) {
  return (
    <div className="w-[170px] h-[155px] group flex flex-col gap-2 cursor-pointer justify-center items-center transition-all border rounded-lg shadow hover:bg-[#FF3811]">
      <Icon size={50} className=" text-[#FF3811] group-hover:text-white transition-colors duration-300" />
      <p className="text-[#444444] text-lg font-bold group-hover:text-white transition-colors duration-300">
        {title}
      </p>
    </div>
  );
}
