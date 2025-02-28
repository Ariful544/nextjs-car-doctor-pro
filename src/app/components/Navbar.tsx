"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Search, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import DashboardNavbar from "../(authPages)/auth/components/DashboardNavbar";

const navLinks = (
  <>
    <li>
      <Link
        href="/"
        className="font-medium text-gray-700 transition-colors hover:text-black"
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        href="/"
        className="font-medium text-gray-700 transition-colors hover:text-black"
      >
        About
      </Link>
    </li>
    <li>
      <Link
        href="/"
        className="font-medium text-gray-700 transition-colors hover:text-black"
      >
        Services
      </Link>
    </li>
    <li>
      <Link
        href="/"
        className="font-medium text-gray-700 transition-colors hover:text-black"
      >
        Blog
      </Link>
    </li>
    <li>
      <Link
        href="/"
        className="font-medium text-gray-700 transition-colors hover:text-black"
      >
        Contact
      </Link>
    </li>
  </>
);

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  if (!pathname.includes("auth") && !pathname.includes("cartDetails")) {
    return (
      <nav className=" bg-white">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-4 md:px-8">
          {/* Left: Logo */}
          <Image
            src="/assets/logo.svg"
            width={0}
            height={0}
            alt="Car Doctor Logo"
            className="md:h-16 h-12 w-auto"
          />

          {/* Desktop Menu */}
          <div className="hidden items-center gap-6 md:flex">
            <ul className="md:flex hidden items-center gap-6">{navLinks}</ul>
          </div>

          {/* Desktop Icons & Button */}
          <div className="hidden items-center gap-4 md:flex">
            <ShoppingCart className="h-5 w-5 cursor-pointer text-gray-700 hover:text-black" />
            <Search className="h-5 w-5 cursor-pointer text-gray-700 hover:text-black" />

            <Separator orientation="vertical" className="h-6 bg-gray-300" />

            <Button
              variant="outline"
              className="border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white"
            >
              Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-gray-700 md:hidden"
            onClick={handleToggleMobileMenu}
            aria-label="Toggle Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={cn(
            "md:hidden transition-all duration-200 ease-in-out",
            isMobileMenuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
          )}
        >
          <div className="flex flex-col gap-4 px-4 py-4">
            {/* Links */}
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <ShoppingCart className="h-5 w-5 cursor-pointer text-gray-700 hover:text-black" />
              <Search className="h-5 w-5 cursor-pointer text-gray-700 hover:text-black" />
            </div>

            {/* Appointment Button */}
            <Button
              variant="outline"
              className="border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Appointment
            </Button>
          </div>
        </div>
      </nav>
    );
  }
  else{
    return (
      <>
        <DashboardNavbar/>
      </>
    )
  }
}
