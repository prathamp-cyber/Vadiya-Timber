import React from 'react';
import { motion } from 'framer-motion';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyles = "px-6 py-3 rounded-xl font-medium transition-colors inline-flex items-center justify-center gap-2 cursor-pointer";
  const variants = {
    primary: "bg-green-deep text-background-primary hover:bg-green-sage shadow-sm",
    secondary: "bg-brown-walnut text-background-primary hover:bg-brown-tan shadow-sm",
    outline: "border-2 border-green-deep text-green-deep hover:bg-green-deep hover:text-background-primary"
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`} 
      {...props}
    >
      {children}
    </motion.button>
  );
}
