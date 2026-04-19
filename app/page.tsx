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
import FadeIn from "./Components/FadeIn";

export default function Home() {
  return (
    <>
      <Navbar />
      <FadeIn>
        <Hero />
      </FadeIn>
      <SectionSeparator small={true} />
      <FadeIn>
        <About />
      </FadeIn>
      <SectionSeparator />
      <FadeIn>
        <Awards />
      </FadeIn>
      <SectionSeparator />
      <FadeIn>
        <Career />
      </FadeIn>
      <SectionSeparator />
      <FadeIn>
        <Publications />
      </FadeIn>
      <SectionSeparator />
      <FadeIn>
        <Testimonials />
      </FadeIn>
      <SectionSeparator small={true} />
      <FadeIn>
        <Contact />
      </FadeIn>
      <SectionSeparator small={true} />
      <Footer />
    </>
  );
}
