import AboutSection from "@/components/partials/about-section";
import DivisionSection from "@/components/partials/division/division-section";
import Footer from "@/components/partials/footer";
import Jumbotron from "@/components/partials/jumbotron";
import Navbar from "@/components/partials/navbar";


export default function Home() {
  
  return (
    <div className="bg-[url('/pattern.svg')] bg-no-repeat object-cover">
      <Navbar />
      
      {/* jumbotron */}
      <Jumbotron />

      {/* about section */}
      <AboutSection />

      {/* division section */}
      <DivisionSection />

      {/* footer */}
      <Footer />
    </div>
  );
}
