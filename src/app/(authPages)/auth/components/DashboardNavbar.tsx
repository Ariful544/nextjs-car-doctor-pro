import { cn } from "@/lib/utils";
import { Menu, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";

export default function DashboardNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const user = true;
  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const navLinks = (
    <>
      <li>
        <Link
          href="/"
          className="font-medium text-gray-700 transition-colors hover:text-black"
        >
          Order
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className=" font-medium text-gray-700 transition-colors hover:text-black"
        >
          Order Review
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="font-medium text-gray-700 transition-colors hover:text-black"
        >
          Manage Inventory
        </Link>
      </li>
      {user ? (
        <>
          {/* Icons */}
          <div className="flex items-center gap-4">
            <HiOutlineShoppingBag className="h-5 w-5 cursor-pointer text-gray-700 hover:text-black" />
            <Search className="h-5 w-5 cursor-pointer text-gray-700 hover:text-black" />
            <CiHeart className="h-5 w-5 cursor-pointer text-gray-700 hover:text-black" />
            <FaRegUser className="h-5 w-5 cursor-pointer text-gray-700 hover:text-black" />
          </div>
        </>
      ) : (
        <li>
          <Link
            href="/"
            className="font-medium text-gray-700 transition-colors hover:text-black"
          >
            Login
          </Link>
        </li>
      )}
    </>
  );
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
            Order
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-black"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Order Review
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-black"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Manage Inventory
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-black"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Login
          </Link>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <HiOutlineShoppingBag className="h-5 w-5 cursor-pointer text-gray-700 hover:text-black" />
            <Search className="h-5 w-5 cursor-pointer text-gray-700 hover:text-black" />
            <CiHeart className="h-5 w-5 cursor-pointer text-gray-700 hover:text-black" />
            <FaRegUser className="h-5 w-5 cursor-pointer text-gray-700 hover:text-black" />
          </div>
        </div>
      </div>
    </nav>
  );
}
