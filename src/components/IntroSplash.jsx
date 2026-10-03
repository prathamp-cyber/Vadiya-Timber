import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroSplash({ onComplete }) {
  const [isVisible, setIsVisible] = useState(() => {
    // Check if splash has already been shown in this browser session
    const splashShown = sessionStorage.getItem('vadiya_splash_shown');
    return !splashShown;
  });

  useEffect(() => {
    if (!isVisible) {
      if (onComplete) onComplete();
      return;
    }

    // Lock body scroll while splash overlay is active
    document.body.style.overflow = 'hidden';

    // Timing breakdown:
    // 0ms - 1700ms: Letter-by-letter stagger reveal (85ms per character)
    // 1700ms - 2600ms: Pristine hold state (~900ms hold)
    // 2600ms: Trigger exit animation (600ms exit transition)
    // Total duration from load to complete unmount: ~3.2 seconds
    const holdTimer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('vadiya_splash_shown', 'true');
    }, 2600);

    return () => {
      clearTimeout(holdTimer);
      document.body.style.overflow = '';
    };
  }, [isVisible, onComplete]);

  const handleExitComplete = () => {
    document.body.style.overflow = '';
    if (onComplete) {
      onComplete();
    }
  };

  const titleText = "VADIYA IMPEX";
  const letters = Array.from(titleText);

  // Framer Motion Animation Variants
  const overlayVariants = {
    initial: { opacity: 1, scale: 1 },
    animate: { opacity: 1, scale: 1 },
    exit: {
      opacity: 0,
      scale: 1.04,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1], // Custom smooth easeInOut curve
      },
    },
  };

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.085, // Slower 85ms delay between letters for deliberate readability
        delayChildren: 0.15,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.94 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: 'easeOut',
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 0.85,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 1.4,
        ease: 'easeOut',
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 1.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isVisible && (
        <motion.div
          key="splash-overlay"
          variants={overlayVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#2A1810] text-[#FAF8F5] select-none pointer-events-auto"
          style={{ backgroundColor: '#2A1810' }}
        >
          <div className="relative px-6 text-center flex flex-col items-center justify-center space-y-4">
            {/* Staggered Letter Reveal for Brand Name with Times New Roman serif font */}
            <motion.h1
              variants={textContainerVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FAF8F5] flex items-center justify-center flex-wrap"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              {letters.map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>

            {/* Warm Accent Line */}
            <motion.div
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="w-20 h-[3px] bg-[#7A5738] rounded-full origin-center"
              style={{ backgroundColor: '#7A5738' }}
            />

            {/* Subtitle Tagline */}
            <motion.p
              variants={subtitleVariants}
              initial="hidden"
              animate="visible"
              className="font-body text-xs sm:text-sm uppercase tracking-[0.25em] text-[#E5C3A6] font-medium"
            >
              Timber merchants of import and export
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
