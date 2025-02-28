import Image from "next/image";
import ManageOrdersCard from "./components/ManageOrdersCard";

export default function ManageAllOrders() {
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
          Manage all orders
        </p>
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 md:w-[300px] w-[200px] md:h-12 h-10 bg-[#FF3811] text-white font-medium md:text-lg text-xs flex items-center justify-center 
                  clip-path-trapezoid"
        >
          Home/Manage All Orders
        </div>
      </div>
      {/* card cart */}
      <div className="w-full flex flex-col gap-6 md:mt-[130px]  mt-[60px]">
        <ManageOrdersCard/>
        <ManageOrdersCard/>
        <ManageOrdersCard/>
      </div>
    </div>
  );
}
