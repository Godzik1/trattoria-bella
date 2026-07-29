import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Menu from "@/components/sections/Menu";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Specials from "@/components/sections/Specials";
import Testimonials from "@/components/sections/Testimonials";
import Reservation from "@/components/sections/Reservation";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <About />
        <Gallery />
        <Specials />
        <Testimonials />
        <Reservation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
