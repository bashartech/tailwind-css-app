import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ServicesPage from "./components/Section-2/Section-2";
import Section3 from "./components/Section-3/Section3";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero />
      <About />
      <ServicesPage />
      <Section3 />
      <Footer />
      
    </div>
  );
}
