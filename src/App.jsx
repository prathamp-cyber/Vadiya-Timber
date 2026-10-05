import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import IntroSplash from './components/IntroSplash';
import Home from './pages/Home';

// Lazy-loaded route components for code splitting & initial bundle size reduction
const Services = lazy(() => import('./pages/Services'));
const OurWork = lazy(() => import('./pages/OurWork'));
const StoreDetail = lazy(() => import('./pages/StoreDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

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
            <Suspense fallback={<div className="min-h-[50vh] bg-white" />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/our-work" element={<OurWork />} />
                <Route path="/store/:storeId" element={<StoreDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </motion.div>
      </div>
    </Router>
  );
}
