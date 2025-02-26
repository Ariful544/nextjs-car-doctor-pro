import Image from "next/image";
import React from "react";
import ServiceCard from "../components/ServiceCard";
import StepCard from "../components/StepCard";
import VideoThumbnail from "../components/VideoThumbnail";
import ServicesLinks from "../components/ServicesLinks";
import { GrNotes } from "react-icons/gr";
import { ArrowRight } from "lucide-react";

export default function ServiceDetails() {
  return (
    <>
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
          Service Details
        </p>
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 md:w-[300px] w-[200px] md:h-12 h-10 bg-[#FF3811] text-white font-medium md:text-lg text-xs flex items-center justify-center 
      clip-path-trapezoid"
        >
          Home/Service Details
        </div>
      </div>
      {/* services details */}
      <div className="grid grid-cols-12 gap-6 min-h-screen  w-full md:mt-[130px] mt-[60px]">
        <div className="md:col-span-9 col-span-12 space-y-10">
          <Image
            src={"/assets/images/services/1.jpg"}
            alt="service"
            width={850}
            height={400}
            className="w-full h-[400px] object-cover rounded-lg "
          />
          <h2 className="md:text-4xl text-2xl text-[#151515] font-bold">
            Unique Car Engine Service
          </h2>
          <p className="text-[#737373]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there is not anything embarrassing hidden in the
            middle of text.{" "}
          </p>
          <div className="grid gap-6 md:grid-cols-2 grid-cols-1">
            <ServiceCard
              title="Instant Car Services"
              para={
                "It uses a dictionary of over 200 Latin words, combined with a model sentence structures."
              }
            />
            <ServiceCard
              title="24/7 Quality Service"
              para={
                "It uses a dictionary of over 200 Latin words, combined with a model sentence structures."
              }
            />
            <ServiceCard
              title="Easy Customer Service"
              para={
                "It uses a dictionary of over 200 Latin words, combined with a model sentence structures."
              }
            />
            <ServiceCard
              title="Quality Cost Service"
              para={
                "It uses a dictionary of over 200 Latin words, combined with a model sentence structures."
              }
            />
          </div>
          <p className="text-[#737373]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there is not anything embarrassing hidden in the
            middle of text.{" "}
          </p>
          <h3 className="md:text-4xl text-2xl text-[#151515] font-bold">
            3 Simple Steps to Process
          </h3>
          <p className="text-[#737373]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there is not anything embarrassing hidden in the
            middle of text.{" "}
          </p>
          <div className="grid gap-6 md:grid-cols-3 grid-cols-1">
            <StepCard
              count={"01"}
              title="Step One"
              para={"It uses a dictionary <br> of over 200 ."}
            />
            <StepCard
              count={"02"}
              title="Step two"
              para={"It uses a dictionary <br> of over 200 ."}
            />
            <StepCard
              count={"03"}
              title="Step three"
              para={"It uses a dictionary <br> of over 200 ."}
            />
          </div>
          <VideoThumbnail />
        </div>
        <div className="md:col-span-3 col-span-12">
          {/* services */}
          <div className="bg-[#F3F3F3] p-4 rounded-lg">
            <h2 className="text-[#151515] font-bold text-2xl">Services</h2>
            <ul className="space-y-4 mt-4">
              <ServicesLinks title="Full Car Repair" />
              <ServicesLinks title="Engine Repair" />
              <ServicesLinks title="Automatic Services" />
              <ServicesLinks title="Engine Oil Change" />
              <ServicesLinks title="Battery Charge" />
            </ul>
          </div>
          {/* download */}
          <div className="h-[260px] w-full p-6 text-white bg-[#151515] rounded-lg mt-8">
            <h2 className="font-bold text-2xl">Download</h2>
            <ul className="space-y-6 mt-4 ">
              <li className="flex justify-between cursor-pointer items-center">
                <div className="flex gap-2 items-center">
                  <p>
                    <GrNotes className="text-4xl" />
                  </p>
                  <div>
                    <p className="text-lg font-semibold">Our Brochure</p>
                    <p className="text-[#A2A2A2]">Download</p>
                  </div>
                </div>
                <p className="w-12 h-12 rounded-lg bg-[#FF3811] flex justify-center items-center">
                  <ArrowRight />
                </p>
              </li>
              <li className="flex justify-between cursor-pointer items-center">
                <div className="flex gap-2 items-center">
                  <p>
                    <GrNotes className="text-4xl" />
                  </p>
                  <div>
                    <p className="text-lg font-semibold">Company Details</p>
                    <p className="text-[#A2A2A2]">Download</p>
                  </div>
                </div>
                <p className="w-12 h-12 rounded-lg bg-[#FF3811] flex justify-center items-center">
                  <ArrowRight />
                </p>
              </li>
            </ul>
          </div>
          {/* Need help */}
          <div className="h-[490px] w-full p-6 flex flex-col justify-center items-center text-white bg-[#151515] rounded-lg mt-8 text-center space-y-6">
            <Image
              src={"/assets/logo.svg"}
              width={100}
              height={150}
              alt="logo"
            />
            <p className="text-xl font-bold">
              Need Help? We Are Here<br></br>
              To Help You
            </p>
            <div className="w-[270px] relative h-[120px] rounded-lg bg-white">
              <p className="text-[#151515] text-xl font-bold mt-6">
                <span className="text-[#FF3811] font-bold">Car Doctor</span>{" "}
                Special
              </p>
              <p className="text-[#FF3811] text-base font-semibold">
                <span className="text-[#737373] font-bold">Save up to </span>60%
                off
              </p>
              <div className="w-[170px] h-14 absolute flex justify-center items-center left-1/2 -bottom-6 rounded-lg -translate-x-1/2 bg-[#FF3811]">
                <button className="text-white font-semibold text-lg">Get A Quote</button>
              </div>
            </div>
          </div>
          <div>
            <p className="text-[#151515] md:text-4xl md:text-left text-center text-2xl font-bold my-[30px]">Price $250.00</p>
          </div>
          <div className="w-full h-[56px] bg-[#FF3811] flex justify-center items-center rounded-lg">
              <button type="button" className="text-white font-bold text-lg">Proceed Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}
