import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { stores } from '../data/stores';

export default function Footer() {
  const [tooltip, setTooltip] = useState(null);

  const handleComingSoon = (e, type) => {
    e.preventDefault();
    setTooltip(type);
    setTimeout(() => setTooltip(null), 2500);
  };

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
              Vadiya Impex
            </h3>
          </div>
          <p className="font-body text-white/80 text-sm leading-relaxed max-w-sm">
            Crafting Trust & Excellence in Quality Timber across Gandhidham and Bangalore for over a decade.
          </p>

          {/* Social Icons */}
          <div className="pt-2 flex items-center gap-3 relative">
            {/* Instagram Icon with Coming Soon Tooltip */}
            <div className="relative inline-block">
              <button
                type="button"
                onClick={(e) => handleComingSoon(e, 'Instagram')}
                title="Instagram coming soon"
                aria-label="Instagram coming soon"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-green-deep flex items-center justify-center text-white transition-colors duration-200 cursor-pointer"
              >
                <FaInstagram className="w-4 h-4" />
              </button>
              {tooltip === 'Instagram' && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-xs font-medium text-white bg-black/90 rounded shadow-md whitespace-nowrap z-50 pointer-events-none">
                  Instagram coming soon
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black/90" />
                </div>
              )}
            </div>

            {/* WhatsApp Click-to-Chat Link */}
            <a
              href="https://wa.me/919106335110?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20Vadiya%20Impex%27s%20timber%20services."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-green-deep flex items-center justify-center text-white transition-colors duration-200"
            >
              <FaWhatsapp className="w-4 h-4" />
            </a>

            {/* Email Icon with Coming Soon Tooltip */}
            <div className="relative inline-block">
              <button
                type="button"
                onClick={(e) => handleComingSoon(e, 'Email')}
                title="Email coming soon"
                aria-label="Email coming soon"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-green-deep flex items-center justify-center text-white transition-colors duration-200 cursor-pointer"
              >
                <FaEnvelope className="w-4 h-4" />
              </button>
              {tooltip === 'Email' && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-xs font-medium text-white bg-black/90 rounded shadow-md whitespace-nowrap z-50 pointer-events-none">
                  Email coming soon
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black/90" />
                </div>
              )}
            </div>
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
                <p className="text-xs text-white/70 pl-5 leading-tight">{store.fullAddress || store.address}</p>
                {store.contacts ? (
                  <div className="space-y-0.5 pt-0.5">
                    {store.contacts.map((c, idx) => (
                      <p key={idx} className="text-xs text-green-sage pl-5 flex items-center gap-1.5">
                        <FaPhoneAlt className="text-[10px] shrink-0" />
                        <span>
                          <span className="font-sans font-medium text-white/90">{c.name} &mdash; </span>
                          <a
                            href={`tel:${c.phone.replace(/[^+\d]/g, '')}`}
                            className="font-mono hover:underline hover:text-white transition-colors"
                          >
                            {c.phone}
                          </a>
                        </span>
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-green-sage pl-5 flex items-center gap-1.5 pt-0.5">
                    <FaPhoneAlt className="text-[10px] shrink-0" />
                    <span>
                      {store.contactName && (
                        <span className="font-sans font-medium text-white/90">{store.contactName} &mdash; </span>
                      )}
                      <a
                        href={`tel:${store.phone.replace(/[^+\d]/g, '')}`}
                        className="font-mono hover:underline hover:text-white transition-colors"
                      >
                        {store.phone}
                      </a>
                    </span>
                  </p>
                )}
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
