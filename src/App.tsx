
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import EventDetails from './components/EventDetails';
import RegistrationForm from './components/RegistrationForm';
import { MinecraftNavBar } from './components/MinecraftNavBar';
import MinecraftHUD from './components/MinecraftHUD';
import Rules from './components/Rules';
import Schedule from './components/Schedule';
import SponsorsSection from './components/SponsorsSection';
import LegendarySponsors from './components/LegendarySponsors';
import ThemesPage from './components/ThemesPage';
import SponsorsPage from './components/SponsorsPage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-minecraft-sky font-pixel text-white overflow-x-hidden">
        <MinecraftHUD />
        <MinecraftNavBar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <SponsorsSection />
              <LegendarySponsors />
              <EventDetails />
              <Footer />
            </>
          } />
          <Route path="/rules" element={<><Rules /><Footer /></>} />
          <Route path="/schedule" element={<><Schedule /><Footer /></>} />
          <Route path="/register" element={<><RegistrationForm /><Footer /></>} />
          <Route path="/themes" element={<><ThemesPage /><Footer /></>} />
          <Route path="/sponsor-tiers" element={<><SponsorsPage /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
