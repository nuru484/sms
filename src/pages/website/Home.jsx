import TopBar from '../../features/website/components/TopBar';
import NavBar from '../../features/website/components/NavBar';
import Hero from '../../features/website/components/Hero';
import AboutUs from '../../features/website/components/AboutUs';
import Admissions from '../../features/website/components/Admissions';
import Footer from '../../features/website/components/Footer';

const Home = () => {
  return (
    <div>
      <TopBar />
      <NavBar />
      <Hero />
      <AboutUs />
      <Admissions />
      <Footer />
    </div>
  );
};

export default Home;
