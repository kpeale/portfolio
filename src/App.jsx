import Navbar from './components/Navbar';
import FeaturedCards from './components/sections/FeaturedCards';
import Hero from './components/sections/Hero';
import ShowcaseSection from './components/sections/ShowcaseSection';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <FeaturedCards />
    </>
  );
};

export default App;
