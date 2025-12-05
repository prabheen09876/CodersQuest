import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import EventDetails from './components/EventDetails';
import RegistrationForm from './components/RegistrationForm';
import { MinecraftNavBar } from './components/MinecraftNavBar';
import Rules from './components/Rules';
import Schedule from './components/Schedule';
import SponsorsSection from './components/SponsorsSection';
import LegendarySponsors from './components/LegendarySponsors';
import SponsorTiers from './components/SponsorTiers';

function App() {
  const [showRegistration, setShowRegistration] = useState(false);

  const handleRegisterClick = () => {
    setShowRegistration(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setShowRegistration(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (showRegistration) {
    return (
      <div className="min-h-screen font-pixel">
        <RegistrationForm />
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={handleBackToHome}
            className="font-minecraft text-sm uppercase tracking-wider px-6 py-3 bg-gray-800 text-white border-4 border-gray-600 hover:bg-gray-700 transition-colors shadow-pixel"
          >
            ← BACK TO HOME
          </button>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-minecraft-sky font-pixel text-white overflow-x-hidden">
        <MinecraftNavBar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero onRegisterClick={handleRegisterClick} />
              <About />
              <SponsorsSection />
              <LegendarySponsors />
              <SponsorTiers />
              <EventDetails />
            </>
          } />
          <Route path="/rules" element={<Rules />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
