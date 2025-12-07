
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

function App() {
  return (
    <Router>
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
            </>
          } />
          <Route path="/rules" element={<Rules />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/themes" element={<ThemesPage />} />
          <Route path="/sponsor-tiers" element={<SponsorsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
