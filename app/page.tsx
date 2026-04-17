import About from "./Components/About";
import Awards from "./Components/Awards";
import Career from "./Components/Career";
import Contact from "./Components/Contact";
import Publications from "./Components/Publications";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import SectionSeparator from "./Components/SectionSeparator";
import Testimonials from "./Components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionSeparator small={true} />
      <About />
      <SectionSeparator />
      <Awards />
      <SectionSeparator />
      <Career />
      <SectionSeparator />
      <Publications />
      <SectionSeparator />
      <Testimonials />
      <SectionSeparator small={true} />
      <Contact />
      <SectionSeparator small={true} />
      <Footer />
    </>
  );
}
