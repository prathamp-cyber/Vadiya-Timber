import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

export const revealItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Check scroll on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'Contact', path: '/contact' },
  ];

  // Hero banner exists on Home ('/') and StoreDetail ('/store/*')
  const hasHeroBanner = location.pathname === '/' || location.pathname.startsWith('/store/');
  const isTransparent = hasHeroBanner && !isScrolled;

  return (
    <motion.header
      variants={revealItemVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-in-out ${
        isTransparent
          ? 'bg-transparent border-b border-transparent text-white'
          : 'bg-white border-b border-neutral-200 shadow-xs text-text-dark'
      }`}
    >
      <div className="max-w-content mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Brand Logo Text */}
        <Link to="/" className="flex items-center gap-3 group">
          <span
            className={`font-heading text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${
              isTransparent ? 'text-white' : 'text-brown-walnut'
            }`}
          >
            Vadiya Timber Merchant
          </span>
        </Link>

        {/* Right: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`font-body text-sm font-medium transition-colors duration-300 relative py-1.5 group ${
                  isTransparent
                    ? isActive
                      ? 'text-white font-semibold'
                      : 'text-white/85 hover:text-white'
                    : isActive
                    ? 'text-brown-walnut font-semibold'
                    : 'text-text-dark hover:text-brown-walnut'
                }`}
              >
                {link.name}
                {/* Subtle underline on active or hovered link */}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 ${
                    isTransparent ? 'bg-white' : 'bg-brown-walnut'
                  } ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 transition-colors duration-300 ${
            isTransparent ? 'text-white hover:text-white/80' : 'text-brown-walnut hover:text-text-dark'
          }`}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Clean Fade Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className={`md:hidden px-6 py-6 border-b shadow-lg transition-colors duration-300 ${
              isTransparent
                ? 'bg-brown-walnut/95 border-white/10 text-white'
                : 'bg-white border-neutral-200 text-text-dark'
            }`}
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`font-body text-base font-medium py-1 text-left transition-colors ${
                      isTransparent
                        ? isActive
                          ? 'text-white font-semibold underline underline-offset-4'
                          : 'text-white/85 hover:text-white'
                        : isActive
                        ? 'text-brown-walnut font-semibold underline underline-offset-4'
                        : 'text-text-dark hover:text-brown-walnut'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
