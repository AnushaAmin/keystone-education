import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Subjects from "./components/Subjects";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import HowItWorks from "./components/HowItWorks";
// import Contact from "./components/Contact";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Subjects />
      <WhyUs />
      <HowItWorks />
      {/* ADD REVIEWS HERE */}
      <Reviews />

      <Testimonials />
      {/* <Contact /> */}

      {/* ADD FOOTER LAST */}
      <Footer />
    </>
  );
}