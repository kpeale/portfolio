import Navbar from './components/Navbar';
import Experience from './components/sections/Experience';
import FeaturedCards from './components/sections/FeaturedCards';
import Hero from './components/sections/Hero';
import ShowcaseSection from './components/sections/ShowcaseSection';
import TechStack from './components/sections/TechStack';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <FeaturedCards />
      <Experience />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
