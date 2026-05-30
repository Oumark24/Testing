import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Mission from './components/Mission';
import Impact from './components/Impact';
import CarePackages from './components/CarePackages';
import Stories from './components/Stories';
import GetInvolved from './components/GetInvolved';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#FAF6EF] text-[#2C2416] font-sans">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function HomePage() {
  return (
    <main>
      <Hero />
      <Story />
      <Mission />
      <Impact />
      <CarePackages />
      <Stories />
      <GetInvolved />
    </main>
  );
}

export default App;
