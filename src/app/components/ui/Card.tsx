import * as React from "react"

import { Card} from "@/components/ui/card"
import Image from "next/image"
import { ArrowRight } from "lucide-react"


export function CardSection() {
  return (
    <Card className="p-6 flex flex-col justify-between space-y-6">
      <Image width={300} height={200} alt="Service1" className="w-full rounded-lg" src={"/assets/images/services/1.jpg"}/>
      <h3 className="text-2xl font-bold text-[#444444]">Electrical System</h3>
      <div className="flex justify-between items-center">
        <p className="text-[#FF3811] text-xl font-semibold">Price : <span>$20.00</span></p>
        <p className="text-[#FF3811] text-base cursor-pointer"><ArrowRight/></p>
      </div>
    </Card>
  )
}

