import Image from "next/image";
import CardCart from "./components/CardCart";
import { HiArrowUturnLeft } from "react-icons/hi2";
import { FaRegTrashAlt } from "react-icons/fa";

export default function CartDetails() {
  return (
    <div>
      <div className="relative">
        <Image
          src={"/assets/images/checkout/checkout.png"}
          width={1100}
          height={300}
          alt="service detail"
          className="object-cover w-full h-full rounded-lg  mt-[30px]"
        />
        <div className="bg-black bg-opacity-60 rounded-lg absolute inset-0 w-full h-full"></div>
        <p className=" absolute md:text-5xl text-2xl font-bold md:top-1/2 top-6 md:left-[300px] left-1/2 -translate-x-1/2 text-white">
          Cart Details
        </p>
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 md:w-[300px] w-[200px] md:h-12 h-10 bg-[#FF3811] text-white font-medium md:text-lg text-xs flex items-center justify-center 
                  clip-path-trapezoid"
        >
          Home/Cart Details
        </div>
      </div>
      {/* card cart */}
      <div className="w-full md:mt-[130px] mt-[60px]">
        <CardCart />
        <CardCart />
        <CardCart />
        <div className="mt-4 flex items-center justify-between">
           <p className="text-xl text-[#444444] flex items-center gap-4"><HiArrowUturnLeft /> Continue Shopping</p>
           <p className="text-xl text-[#444444] flex items-center gap-4"><FaRegTrashAlt />Clear Shopping Cart</p>
        </div>
      </div>
    </div>
  );
}
