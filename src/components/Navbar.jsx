import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import logoIcon from '../assets/logo/vadiya-impex-icon-transparent.webp';

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

const mobileOverlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: 'easeOut',
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 1, 0.5, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.15,
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

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-in-out ${isTransparent
        ? 'bg-transparent border-b border-transparent text-white'
        : 'bg-white border-b border-neutral-200 shadow-xs text-text-dark'
        }`}
    >
      <div className="max-w-content mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Brand Logo Icon + Text & GST */}
        <Link to="/" className="flex items-center gap-2.5 text-left group justify-center py-1">
          <img
            src={logoIcon}
            alt="Vadiya Impex"
            width={49}
            height={63}
            className="h-[36px] md:h-[42px] w-auto object-contain shrink-0"
          />
          <div className="flex flex-col text-left">
            <span
              className={`font-heading text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${isTransparent ? 'text-white' : 'text-brown-walnut'
                }`}
            >
              Vadiya Impex
            </span>
            <span
              className={`font-body text-[10px] sm:text-[11px] font-medium tracking-wide transition-colors duration-300 leading-tight pt-0.5 ${isTransparent ? 'text-white/80' : 'text-text-muted'
                }`}
              style={isTransparent ? { textShadow: '0 1px 4px rgba(0,0,0,0.5)' } : {}}
            >
              GST No. 24AASFV6101B1ZF
            </span>
          </div>
        </Link>

        {/* Right: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`font-body text-sm font-medium transition-colors duration-300 relative py-1.5 group ${isTransparent
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
                  className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 ${isTransparent ? 'bg-white' : 'bg-brown-walnut'
                    } ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 transition-colors duration-300 ${isTransparent ? 'text-white hover:text-white/80' : 'text-brown-walnut hover:text-text-dark'
            }`}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        >
          {mobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={mobileOverlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[60] bg-[#2A1810] text-white flex flex-col md:hidden overflow-y-auto"
            style={{ backgroundColor: '#2A1810' }}
          >
            {/* Top Header Bar */}
            <div className="h-20 px-6 flex items-center justify-between shrink-0">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 text-left py-1"
              >
                <img
                  src={logoIcon}
                  alt="Vadiya Impex"
                  width={49}
                  height={63}
                  className="h-[36px] w-auto object-contain shrink-0"
                />
                <span className="font-heading text-xl font-bold tracking-tight text-white">
                  Vadiya Impex
                </span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white hover:text-white/80 transition-colors"
                aria-label="Close Navigation Menu"
              >
                <HiX className="w-6 h-6" />
              </button>
            </div>

            {/* Links & Footer Content */}
            <div className="flex-1 px-8 py-10 flex flex-col justify-between">
              <nav className="flex flex-col gap-7 items-start my-auto">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div key={link.name} variants={mobileLinkVariants}>
                      <Link
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="font-heading text-3xl font-bold text-white relative inline-block py-1"
                      >
                        {link.name}
                        {isActive && (
                          <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#A67B5B] rounded-full" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div variants={mobileLinkVariants} className="pt-8">
                <span className="font-body text-xs text-white/60 font-medium tracking-wide">
                  GST No. 24AASFV6101B1ZF
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
