import AboutUs from "./components/AboutUs";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import CoreFeatures from "./components/CoreFeatures";
import MeetOurTeam from "./components/MeetOurTeam";
import PopularProduct from "./components/PopularProduct";
import Services from "./components/Services";
import Testimonial from "./components/ui/Testimonial";

export default function Home() {
  return (
   <>
     <Carousel />
     {/* about us section */}
     <AboutUs/>
     {/* services section */}
     <Services/>
     {/* contact section */}
     <Contact/>
     {/* popular product */}
     <PopularProduct/>
     {/* Meet our Team */}
     <MeetOurTeam/>
     {/* Core Features section */}
     <CoreFeatures/>
     {/* Testimonial section */}
     <Testimonial/>
   </>
  );
}
