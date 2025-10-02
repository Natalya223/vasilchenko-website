import About from "./Components/About";
import Experience from "./Components/Experience";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <About />
    </>
  );
}
