import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
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
      <Experience />
      <SectionSeparator small={true} />
      <About />
      <SectionSeparator />
      <Testimonials />
      <SectionSeparator />
      <Contact />
      <SectionSeparator small={true} />
      <Footer />
    </>
  );
}
