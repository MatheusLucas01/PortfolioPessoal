import Skills from "./components/Skills";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
