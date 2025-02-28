import Image from "next/image";
import { ChangeStatus } from "./ChangeStatus";

export default function ManageOrdersCard() {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 items-center p-4 sm:p-6 border rounded-lg shadow">
      {/* Left Section */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full">
        <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full text-3xl sm:text-4xl text-white flex justify-center items-center bg-gray-600">
          &times;
        </button>
        <Image
          src={"/assets/images/services/2.jpg"}
          width={120}
          height={120}
          alt="product"
          className="rounded-md"
        />
        <div className="text-center sm:text-left">
          <p className="font-semibold text-lg sm:text-xl text-[#444444]">
            Martha Knit Top
          </p>
          <p className="text-[#A2A2A2]">Color: Green</p>
          <p className="text-[#A2A2A2]">Size: S</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
        <p className="font-semibold text-lg sm:text-xl text-[#444444]">
          $25.00
        </p>
        <p className="font-semibold text-lg sm:text-xl text-[#444444]">
          22-10-2022
        </p>
        <ChangeStatus />
      </div>
    </div>
  );
}
