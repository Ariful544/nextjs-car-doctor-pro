import AboutUs from "./components/AboutUs";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import MeetOurTeam from "./components/MeetOurTeam";
import PopularProduct from "./components/PopularProduct";
import Services from "./components/Services";

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
   </>
  );
}
