import dbConnect from "@/lib/dbConnect";
import { CardSection } from "./ui/Card";
import { Button } from "./ui/button";
import Heading from "./ui/Heading";

interface ServiceData {
  _id: string; // Converted from ObjectId to string
  title: string;
  img: string;
  price: number;
}

export default async function Services() {
  const servicesCollection = dbConnect({ collectionName: "services" });
  const data = await servicesCollection.find<ServiceData>({}).toArray();

  // Convert ObjectId to string for better frontend compatibility
  const services = data.map((service) => ({
    ...service,
    _id: service._id.toString(),
  }));

  return (
    <div className="min-h-screen md:mt-[130px] mt-[60px]">
      <Heading
        title="Service"
        subtitle="Our Service Area"
        para={`the majority have suffered alteration in some form, by injected humour, or randomised <br> words which don't look even slightly believable.`}
      />
      <div className="mt-14 grid md:grid-cols-3 grid-cols-1 gap-4">
        {services.map((service) => (
          <CardSection key={service._id} singleServices={service} />
        ))}
      </div>
      <div className="text-center py-10">
        <Button
          variant="outline"
          className="border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white"
        >
          More Services
        </Button>
      </div>
    </div>
  );
}
