import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface TeamSlideProps {
  img: string;
  title: string;
  subtitle: string;
  href: string
}
export default function TeamSlide({ img, title, subtitle,href }: TeamSlideProps) {
  return (
    <Card className="p-6 flex flex-col justify-between space-y-6">
      {/* Team image */}
      <Image
        width={250}
        height={150}
        alt="Team member photo"
        className="w-full rounded-lg"
        src={img}
      />

      <div className="place-items-center space-y-4">
        <h3 className="font-bold text-[#444444] text-2xl">{title}</h3>
        <p className="text-[#FF3811] text-xl font-semibold">{subtitle}</p>

        <div className="flex gap-2 items-center">
          {/* Facebook icon using next/image */}
          <Link href={href}>
            <Image
              width={30}
              height={30}
              src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000"
              alt="Facebook icon"
            />
          </Link>
          <Link href={href}>
            <Image
              width={30}
              height={30}
              src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000"
              alt="x icon"
            />
          </Link>
          <Link href={href}>
            <Image
              width={30}
              height={30}
              src="https://img.icons8.com/?size=100&id=BrU2BBoRXiWq&format=png&color=000000"
              alt="Instagram icon"
            />
          </Link>
          <Link href={href}>
            <Image
              width={30}
              height={30}
              src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
              alt="Linked30 icon"
            />
          </Link>
        </div>
      </div>
    </Card>
  );
}
