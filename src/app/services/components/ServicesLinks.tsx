import { ArrowRight } from "lucide-react";

export default function ServicesLinks({title}:{title:string}) {
  return (
     <li className="py-4 px-3 group transition duration-150 cursor-pointer rounded-md hover:bg-[#FF3811] bg-white text-[#151515] flex justify-between items-center font-semibold"><p className="group-hover:text-white">{title}</p><p className="text-[#FF3811] group-hover:text-white "><ArrowRight/></p></li>
  )
}
