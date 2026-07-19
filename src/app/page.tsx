import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Programs from "@/components/Programs";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CallToAction />
        <AboutUs />
       
        <Programs />
       
      </main>
      <Footer />
    </>
  );
}
