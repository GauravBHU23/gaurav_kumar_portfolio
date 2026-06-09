import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Coding from "@/components/Coding";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Coding />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
