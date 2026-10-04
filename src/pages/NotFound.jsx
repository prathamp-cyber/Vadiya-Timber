import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3 }}
      className="min-h-[65vh] flex items-center justify-center px-6 py-16 bg-white text-text-dark text-center"
    >
      <div className="max-w-md mx-auto space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-50 text-amber-600 mb-2 shadow-xs">
          <FaExclamationTriangle className="text-3xl" />
        </div>
        
        <div className="space-y-2">
          <span className="text-xs font-semibold tracking-wider text-amber-700 uppercase">
            Error 404
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-brown-walnut">
            Page Not Found
          </h1>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed pt-1">
            The page you are looking for doesn't exist, has been moved, or the URL was mistyped.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/">
            <Button variant="primary" className="w-full sm:w-auto">
              <FaHome className="mr-2 text-sm" /> Return to Home
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="secondary" className="w-full sm:w-auto">
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
