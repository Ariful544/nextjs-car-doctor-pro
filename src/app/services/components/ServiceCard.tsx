import React from "react";

interface ServiceProps{
  services:{
    name: string,
    details : string
  }    
}
export default function ServiceCard({services}:ServiceProps) {
  return (
    <div className=" bg-[#F3F3F3] p-6 rounded-lg shadow-md border-t-2 border-[#FF3811]">
      <h3 className="text-lg font-bold text-[#444444]">{services.name}</h3>
      <p className="text-[#737373] mt-2 text-sm">
       {services.details}
      </p>
    </div>
  );
}
