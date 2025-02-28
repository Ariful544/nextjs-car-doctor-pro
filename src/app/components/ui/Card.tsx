import * as React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServicesProps {
  singleServices: {
    _id: string;
    title: string;
    img: string;
    price: number;
  };
}

export function CardSection({ singleServices }: ServicesProps) {
  return (
    <Card className="p-6 flex flex-col justify-between space-y-6">
      <Image
        width={314}
        height={208}
        alt="Service1"
        className="w-full h-full rounded-lg"
        src={singleServices.img}
      />
      <h3 className="text-2xl font-bold text-[#444444]">
        {singleServices.title}
      </h3>
      <div className="flex justify-between items-center">
        <p className="text-[#FF3811] text-xl font-semibold">
          Price : <span>${singleServices.price}</span>
        </p>
        <Link href={`/services/${singleServices._id}`} className="text-[#FF3811] text-base cursor-pointer">
          <ArrowRight />
        </Link>
      </div>
    </Card>
  );
}
