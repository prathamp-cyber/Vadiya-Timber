import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { stores } from '../data/stores';
import {
  FaRulerCombined, FaTree, FaFire, FaTruck, FaCompass,
  FaCubes, FaLayerGroup, FaDoorOpen, FaAward, FaMapMarkerAlt,
  FaPhoneAlt, FaArrowLeft, FaTimes, FaExternalLinkAlt
} from 'react-icons/fa';

const iconMap = {
  FaRulerCombined,
  FaTree,
  FaFire,
  FaTruck,
  FaCompass,
  FaCubes,
  FaLayerGroup,
  FaDoorOpen,
  FaAward
};

export default function StoreDetail() {
  const { storeId } = useParams();
  const store = stores.find((s) => s.id === storeId) || stores[0];
  const [selectedImage, setSelectedImage] = useState(null);

  // Scroll to top on storeId change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [storeId]);

  const fadeInVariant = {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.4, ease: 'easeOut' }
  };

  const storeMetaDesc = `${store.description} Visit our ${store.city} branch or contact ${store.contactName || 'our team'} at ${store.phone} for quotes.`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="w-full bg-white text-text-dark"
    >
      <Helmet>
        <title>{`${store.name} | Vadiya Impex`}</title>
        <meta name="description" content={storeMetaDesc.slice(0, 160)} />
        <link rel="canonical" href={`https://vadiyaimpex.com/store/${store.id}`} />
      </Helmet>

      {/* 1. STORE HERO BANNER (50vh height, dark overlay, overlaid breadcrumbs & store name) */}
      <section
        className="-mt-20 relative w-full h-[50vh] min-h-[360px] md:min-h-[420px] flex items-center justify-center text-center px-6 pt-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${store.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="max-w-4xl mx-auto space-y-4 relative z-10 px-4 pt-10">
          {/* Breadcrumb */}
          <nav className="text-xs sm:text-sm font-medium text-white/80 tracking-wide flex items-center justify-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/" className="hover:text-white transition-colors">
              Our Branches
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">{store.name}</span>
          </nav>

          {/* Store Name */}
          <h1
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}
          >
            {store.name}
          </h1>
          <p
            className="font-body text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}
          >
            {store.tagline}
          </p>
        </div>
      </section>

      {/* 2. ABOUT THIS BRANCH (Max 700px content width, centered 2-3 paragraphs) */}
      <motion.section
        {...fadeInVariant}
        className="bg-white py-16 md:py-24 px-6 border-b border-neutral-100"
      >
        <div className="max-w-[700px] mx-auto text-center space-y-6">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-brown-walnut">
            About This Branch
          </h2>
          <div className="space-y-1 font-body text-lg md:text-xl font-semibold text-brown-walnut" style={{ color: '#4A2E1A' }}>
            <p>Founder: Ashwin Vadiya</p>
            <p>Co-Founder: Raj Vadiya</p>
          </div>
          <div className="space-y-4 text-text-muted text-base md:text-lg leading-relaxed">
            {store.longDescription ? (
              store.longDescription.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))
            ) : (
              <p>{store.description}</p>
            )}
          </div>
        </div>
      </motion.section>

      {/* 3. PHOTO GALLERY (Responsive grid with lightbox) */}
      <motion.section
        {...fadeInVariant}
        className="bg-white py-16 md:py-24 px-6 max-w-content mx-auto"
      >
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brown-walnut">
            Gallery
          </h2>
          <div className="w-16 h-[3px] bg-brown-tan mx-auto my-3 rounded-full" style={{ backgroundColor: '#7A5738' }} />
          <p className="font-body text-text-muted text-sm md:text-base">
            Take a visual tour of our facilities, wood stock, and finished projects
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {store.images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(img)}
              className="group cursor-pointer rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100 aspect-16/10 relative"
            >
              <img
                src={img}
                alt={`${store.name} gallery image ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center text-white text-xs font-semibold uppercase tracking-wider">
                Click to Enlarge
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-[90vw] max-h-[85vh] rounded-xl overflow-hidden shadow-2xl bg-black"
            >
              <img
                src={selectedImage}
                alt="Enlarged gallery view"
                className="w-full h-full object-contain max-h-[85vh]"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Close Lightbox"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. SERVICES AT THIS BRANCH (Dark-green background band #2F4A2B, white text) */}
      <motion.section
        {...fadeInVariant}
        className="bg-green-deep text-white py-16 px-6"
        style={{ backgroundColor: '#2F4A2B' }}
      >
        <div className="max-w-content mx-auto text-center space-y-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            What We Offer Here
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {store.servicesOffered ? (
              store.servicesOffered.map((srv, idx) => {
                const IconComp = iconMap[srv.icon] || FaTree;
                return (
                  <div key={idx} className="flex flex-col items-center gap-3 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white text-2xl">
                      <IconComp />
                    </div>
                    <span className="font-body text-base font-semibold">
                      {srv.label}
                    </span>
                  </div>
                );
              })
            ) : (
              store.services.map((srv, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white text-2xl">
                    <FaTree />
                  </div>
                  <span className="font-body text-base font-semibold">
                    {srv}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </motion.section>

      {/* 5. VISIT US (Two-column layout with address, phone, directions button & Google Maps iframe) */}
      <motion.section
        {...fadeInVariant}
        className="bg-white py-16 md:py-24 px-6 max-w-content mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Address & Details */}
          <div className="space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brown-walnut">
              Visit This Location
            </h2>
            <div className="space-y-4 text-text-dark">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-5 h-5 text-green-deep shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-base">Address</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{store.fullAddress || store.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaPhoneAlt className="w-5 h-5 text-green-deep shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-base">Phone</h3>
                  {store.contacts ? (
                    <div className="space-y-1 pt-0.5">
                      {store.contacts.map((c, idx) => (
                        <p key={idx} className="text-text-muted text-sm leading-relaxed">
                          <span className="font-sans font-medium text-text-dark">{c.name} &mdash; </span>
                          <a
                            href={`tel:${c.phone.replace(/\s+/g, '')}`}
                            className="hover:text-green-deep transition-colors font-mono"
                          >
                            {c.phone}
                          </a>
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-text-muted text-sm leading-relaxed pt-0.5">
                      {store.contactName && (
                        <span className="font-sans font-medium text-text-dark">{store.contactName} &mdash; </span>
                      )}
                      <a
                        href={`tel:${store.phone.replace(/\s+/g, '')}`}
                        className="hover:text-green-deep transition-colors font-mono"
                      >
                        {store.phone}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={store.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-green-deep text-white font-medium text-base px-6 py-3.5 rounded-xl hover:bg-opacity-95 shadow-md transition-all duration-200"
                style={{ backgroundColor: '#2F4A2B' }}
              >
                <span>Get Directions</span>
                <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="w-full h-[350px] rounded-xl overflow-hidden border border-neutral-200 shadow-sm bg-neutral-100">
            <iframe
              title={`Map location of ${store.name}`}
              src={store.embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </motion.section>

      {/* 6. BACK LINK */}
      <div className="border-t border-neutral-100 py-12 text-center bg-white">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-green-deep font-semibold text-base hover:underline"
        >
          <FaArrowLeft className="text-sm" />
          <span>Back to All Branches</span>
        </Link>
      </div>
    </motion.div>
  );
}
