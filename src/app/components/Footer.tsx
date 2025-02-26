import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

export default function Footer() {
  return (
    <div className="min-h-[400px] md:mt-[130px] px-4 md:px-0  mt-[60px] bg-[#151515]">
      <div className="max-w-screen-xl h-full pt-32 place-items-center content-center mx-auto grid md:grid-cols-4 grid-cols-2">
        <div className="space-y-3">
          <Image
            src="/assets/logo.svg"
            width={0}
            height={0}
            alt="Car Doctor Logo"
            className="md:h-16 text-white h-12 w-auto"
          />
          <p className="text-[#adadad]">Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
          <div className="flex items-center gap-3">
            <p className="w-8 h-8 cursor-pointer flex justify-center items-center rounded-full bg-gray-600 text-white"><FaGoogle /></p>
            <p className="w-8 h-8 cursor-pointer flex justify-center items-center rounded-full bg-gray-600 text-white"><FaTwitter /></p>
            <p className="w-8 h-8 cursor-pointer flex justify-center items-center rounded-full bg-gray-600 text-white"><IoLogoInstagram /></p>
            <p className="w-8 h-8 cursor-pointer flex justify-center items-center rounded-full bg-gray-600 text-white"><FaLinkedin /></p>
          </div>
        </div>
        <div className="text-white">
            <h4 className="text-xl font-semibold">About</h4>
            <ul className="mt-6 text-[#adadad] space-y-2">
                <li className="hover:underline"><Link href={"#"}>Home</Link></li>
                <li className="hover:underline"><Link href={"#"}>Service</Link></li>
                <li className="hover:underline"><Link href={"#"}>Contact</Link></li>
            </ul>
        </div>
        <div className="text-white">
            <h4 className="text-xl font-semibold">Company</h4>
            <ul className="mt-6 text-[#adadad] space-y-2">
                <li className="hover:underline"><Link href={"#"}>Why Car Doctor</Link></li>
                <li className="hover:underline"><Link href={"#"}>About</Link></li>
            </ul>
        </div>
        <div className="text-white">
            <h4 className="text-xl font-semibold">Support</h4>
            <ul className="mt-6 text-[#adadad] space-y-2">
                <li className="hover:underline"><Link href={"#"}>Support Center</Link></li>
                <li className="hover:underline"><Link href={"#"}>FeedBack</Link></li>
                <li className="hover:underline"><Link href={"#"}>Accesbility</Link></li>
            </ul>
        </div>
      </div>
    </div>
  );
}
