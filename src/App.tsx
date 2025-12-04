import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import EventDetails from './components/EventDetails';
import { MinecraftNavBar } from './components/MinecraftNavBar';
import Rules from './components/Rules';
import Schedule from './components/Schedule';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-minecraft-sky font-pixel text-white overflow-x-hidden">
        <MinecraftNavBar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
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
