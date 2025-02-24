import { CalendarClock, MapPinHouse, PhoneForwarded } from "lucide-react";
import React from "react";

export default function Contact() {
  return (
    <div className="h-[300px] px-20 rounded-lg grid md:grid-cols-3 grid-cols-1 bg-[#151515] mt-[130px]">
        {/* calender */}
      <div className="flex items-center gap-3 text-white">
        <div>
          <CalendarClock className="md:w-14 md:h-14 w-10 h-10"/>
        </div>
        <div>
          <p className="font-medium text-xs">We are open monday-friday</p>
          <p className="md:text-2xl text-lg font-bold">7:00 am - 9:00 pm</p>
        </div>
      </div>
      {/* have question */}
      <div className="flex items-center gap-3 text-white">
        <div>
          <PhoneForwarded className="md:w-14 md:h-14 w-10 h-10"/>
        </div>
        <div>
          <p className="font-medium text-xs">Have a question?</p>
          <p className="md:text-2xl text-lg font-bold">+2546 251 2658</p>
        </div>
      </div>
      {/* Repair */}
      <div className="flex items-center gap-3 text-white">
        <div>
          <MapPinHouse className="md:w-14 md:h-14 w-10 h-10"/>
        </div>
        <div>
          <p className="font-medium text-xs">Need a repair? our address</p>
          <p className="md:text-2xl text-lg font-bold">Liza Street, New York</p>
        </div>
      </div>
    </div>
  );
}
