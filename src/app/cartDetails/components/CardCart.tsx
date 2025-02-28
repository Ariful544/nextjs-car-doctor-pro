import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CardCart() {
  return (
    <div className="w-full flex justify-between gap-6 items-center h-[150px]">
      <div className="flex justify-between items-center gap-6">
        <button className="w-12 h-12 rounded-full text-4xl text-white flex justify-center items-center bg-gray-600">
          &times;
        </button>
        <Image
          src={"/assets/images/services/2.jpg"}
          width={150}
          height={150}
          alt="product"
        />
        <div>
          <p className="font-semibold text-xl text-[#444444]">
            Martha Knit Top
          </p>
          <p className="text-[#A2A2A2]">Color: Green</p>
          <p className="text-[#A2A2A2]">Size: S</p>
        </div>
      </div>
      <p className="font-semibold text-xl text-[#444444]">$25.00</p>
      <p className="font-semibold text-xl text-[#444444]">22-10-2022</p>
      <Button size={"lg"} className="bg-[#FF3811] hover:bg-[#f84636] text-lg">
        Pending
      </Button>
    </div>
  );
}
