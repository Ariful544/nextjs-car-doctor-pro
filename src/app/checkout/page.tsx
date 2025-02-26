import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";

export default function CheckOutPage() {
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
          Check Out
        </p>
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 md:w-[300px] w-[200px] md:h-12 h-10 bg-[#FF3811] text-white font-medium md:text-lg text-xs flex items-center justify-center 
            clip-path-trapezoid"
        >
          Home/Checkout
        </div>
      </div>
      {/* form */}
      <form className="w-full space-y-8 min-h-[600px] md:mt-[130px] md:p-20 p-10 rounded-lg mt-[60px] bg-[#F3F3F3]">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <Input type="text" placeholder="First Name" />
          <Input type="text" placeholder="Last Name" />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <Input type="number" placeholder="Your Phone" />
          <Input type="email" placeholder="Your Email" />
        </div>
        <Textarea placeholder="Your message" />
        <Button className="w-full h-[50px] text-xl font-semibold bg-[#FF3811] hover:bg-[#fd3f35] text-white hover:text-white" variant="outline">Order Confirm</Button>
      </form>
    </div>
  );
}
