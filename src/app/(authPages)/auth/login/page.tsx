import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function LoginPages() {
  return (
    <div className="mt-6 min-h-[650px] grid md:grid-cols-2 grid-cols-1">
      <div className="md:flex justify-center items-center hidden">
        <Image
          src={"/assets/images/login/login.svg"}
          width={500}
          height={300}
          alt="login"
        />
      </div>
      <div className=" rounded-lg border-2 p-10 space-y-8 border-gray-200">
        <h1 className="font-semibold text-6xl text-center text-[#444444]">
          Login
        </h1>
        <form className="space-y-6">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email" className="font-semibold text-lg">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Your email"
              className="border-2 border-gray-200 focus-visible:border-0"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="Password" className="font-semibold text-lg">
              Password
            </Label>
            <Input
              id="Password"
              type="password"
              placeholder="Your password"
              className="border-2 border-gray-200 focus-visible:border-0"
            />
          </div>
          <Button
            className="w-full h-[50px] text-xl font-semibold bg-[#FF3811] hover:bg-[#fd3f35] text-white hover:text-white"
            variant="outline"
          >
            Sign In
          </Button>
        </form>
        <p className="text-center text-lg font-medium text-[#444444]">
          Or Sign In with
        </p>

        {/* Login with social media */}
        <div className="flex items-center justify-center gap-4">
          <div className="w-14 h-14 flex items-center justify-center bg-gray-200 rounded-full">
            <button>
              <FaFacebookF className="text-[#3B5998] text-2xl font-semibold" />
            </button>
          </div>
          <div className="w-14 h-14 flex items-center justify-center bg-gray-200 rounded-full">
            <button>
              <FaLinkedinIn className="text-[#3B5998] text-2xl font-semibold" />
            </button>
          </div>
          <div className="w-14 h-14 flex items-center justify-center bg-gray-200 rounded-full">
            <button>
              <FcGoogle className="text-[#3B5998] text-2xl font-semibold" />
            </button>
          </div>
        </div>
        <p className="text-[#737373] text-center text-lg">
          Have an account?{" "}
          <Link
            href="/auth/register"
            className="text-[#FF3811] font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
