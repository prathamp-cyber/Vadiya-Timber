import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { stores } from '../data/stores';

export default function Footer() {
  return (
    <footer
      className="bg-brown-walnut text-background-secondary pt-16 pb-8 px-6 border-t border-brown-tan/30"
      style={{ backgroundColor: '#4A2E1A' }}
    >
      <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
        
        {/* Column 1: Business Name + Tagline */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h3 className="font-heading text-2xl font-bold text-white">
              Vadiya Timber Merchant
            </h3>
          </div>
          <p className="font-body text-white/80 text-sm leading-relaxed max-w-sm">
            Crafting Trust & Excellence in Quality Timber across Gandhidham and Bangalore for over three decades.
          </p>
          
          {/* Social Icons */}
          <div className="pt-2 flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-green-deep flex items-center justify-center text-white transition-colors duration-200"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-green-deep flex items-center justify-center text-white transition-colors duration-200"
            >
              <FaWhatsapp className="w-4 h-4" />
            </a>
            <a
              href="mailto:contact@vadiyatimbers.com"
              aria-label="Email"
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-green-deep flex items-center justify-center text-white transition-colors duration-200"
            >
              <FaEnvelope className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2: All 3 Store Addresses */}
        <div className="space-y-4">
          <h4 className="font-heading text-lg font-bold text-white tracking-wide border-b border-white/10 pb-2">
            Our Store Locations
          </h4>
          <div className="space-y-4 text-sm text-white/85">
            {stores.map((store) => (
              <div key={store.id} className="space-y-1">
                <Link
                  to={`/store/${store.id}`}
                  className="font-semibold text-white hover:text-green-sage flex items-center gap-2 transition-colors"
                >
                  <FaMapMarkerAlt className="text-green-sage text-xs shrink-0" />
                  <span>{store.name}</span>
                </Link>
                <p className="text-xs text-white/70 pl-5 leading-tight">{store.address}</p>
                <p className="text-xs text-green-sage pl-5 font-mono flex items-center gap-1.5 pt-0.5">
                  <FaPhoneAlt className="text-[10px]" />
                  <span>{store.phone}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Quick Links */}
        <div className="space-y-4">
          <h4 className="font-heading text-lg font-bold text-white tracking-wide border-b border-white/10 pb-2">
            Quick Navigation
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link to="/" className="text-white/80 hover:text-green-sage transition-colors duration-200 block">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-white/80 hover:text-green-sage transition-colors duration-200 block">
                Services
              </Link>
            </li>
            <li>
              <Link to="/our-work" className="text-white/80 hover:text-green-sage transition-colors duration-200 block">
                Our Work
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white/80 hover:text-green-sage transition-colors duration-200 block">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Strip */}
      <div className="max-w-content mx-auto pt-6 text-center text-xs text-white/60">
        <p>&copy; {new Date().getFullYear()} Vadiya Timber Merchant. All rights reserved.</p>
      </div>
    </footer>
  );
}
