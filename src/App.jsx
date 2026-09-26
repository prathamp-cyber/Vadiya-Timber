import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import IntroSplash from './components/IntroSplash';
import Home from './pages/Home';
import Services from './pages/Services';
import OurWork from './pages/OurWork';
import StoreDetail from './pages/StoreDetail';
import Contact from './pages/Contact';

export default function App() {
  const [splashDone, setSplashDone] = useState(() => {
    return !!sessionStorage.getItem('vadiya_splash_shown');
  });

  const parentRevealVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18, // 180ms delay between elements: Navbar -> Headline -> Subtext -> Button
        delayChildren: 0.05,
      },
    },
  };

  const handleSplashComplete = () => {
    setSplashDone(true);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white font-body text-text-dark">
        <IntroSplash onComplete={handleSplashComplete} />

        {/* Parent container wrapping Navbar and Hero/Main content for synchronized stagger reveal */}
        <motion.div
          variants={parentRevealVariants}
          initial={splashDone ? 'visible' : 'hidden'}
          animate={splashDone ? 'visible' : 'hidden'}
          className="flex flex-col min-h-screen"
        >
          <Navbar />
          <main className="flex-grow pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/our-work" element={<OurWork />} />
              <Route path="/store/:storeId" element={<StoreDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </motion.div>
      </div>
    </Router>
  );
}
