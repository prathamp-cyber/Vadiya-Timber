import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaTimes, FaArrowRight, FaBuilding, FaMapMarkerAlt, FaAward } from 'react-icons/fa';

export default function OurWork() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ["All", "Residential", "Commercial", "Architectural", "Wholesale Supply"];

  const projects = [
    {
      id: 1,
      title: "Luxury Villa Teak Ceiling & Paneling",
      category: "Residential",
      location: "Bangalore",
      image: "/images/project-residence.jpg",
      aspectRatio: "aspect-16/10",
      description: "Custom solid Burmese teak wood ceiling beams and matching acoustic wall cladding crafted for a private contemporary residence."
    },
    {
      id: 2,
      title: "Floating Teak Timber Staircase",
      category: "Architectural",
      location: "Bangalore",
      image: "/images/project-staircase.jpg",
      aspectRatio: "aspect-3/4",
      description: "Hand-selected, kiln-seasoned teak treads engineered for a seamless floating cantilever staircase with minimalist aesthetic."
    },
    {
      id: 3,
      title: "Resort Outdoor Teak Decking",
      category: "Residential",
      location: "Coorg, Karnataka",
      image: "/images/project-decking.jpg",
      aspectRatio: "aspect-4/3",
      description: "Weather-resistant tongue-and-groove teak decking planks surrounding an outdoor infinity pool and lounge pavilion."
    },
    {
      id: 4,
      title: "Corporate Slat Wall & Reception",
      category: "Commercial",
      location: "Bangalore (Anjanapura)",
      image: "/images/project-office.jpg",
      aspectRatio: "aspect-16/10",
      description: "Custom teak wood acoustic slat wall cladding and sculpted solid timber reception desk for a tech corporate headquarters."
    },
    {
      id: 5,
      title: "Kandla Port Bulk Log Sizing Hub",
      category: "Wholesale Supply",
      location: "Gandhidham Hub",
      image: "/images/gandhidham.jpg",
      aspectRatio: "aspect-4/3",
      description: "Primary log sizing, thermal seasoning, and wholesale distribution facility handling over 5,000 metric tons of imported timber annually."
    },
    {
      id: 6,
      title: "Architectural Hardwood Showroom",
      category: "Architectural",
      location: "Anjanapura Showroom",
      image: "/images/bangalore-1.jpg",
      aspectRatio: "aspect-3/4",
      description: "A showcase of Burmese teak flooring samples, custom moulding edge profiles, and exotic hardwood wall cladding mockups."
    },
    {
      id: 7,
      title: "Bespoke Woodcraft & Solid Door Center",
      category: "Residential",
      location: "Jigni, Bangalore",
      image: "/images/bangalore-2.jpg",
      aspectRatio: "aspect-16/10",
      description: "Tailored timber cuts for luxury home renovation, solid entrance doors, and handcrafted wooden furniture displays."
    },
    {
      id: 8,
      title: "Precision Sawing & Milling Operations",
      category: "Wholesale Supply",
      location: "Gandhidham Sawmills",
      image: "/images/gallery-1.jpg",
      aspectRatio: "aspect-4/3",
      description: "Laser-guided horizontal band saw mills cutting heavy structural logs into custom dimensioned planks and beams."
    },
    {
      id: 9,
      title: "Seasoned Teak Plank Staging Yard",
      category: "Wholesale Supply",
      location: "Gandhidham Hub",
      image: "/images/gallery-2.jpg",
      aspectRatio: "aspect-3/4",
      description: "Kiln-dried hardwood plank storage and palletized staging for nationwide commercial site delivery."
    },
    {
      id: 10,
      title: "Exotic Hardwood Veneer & Cladding Display",
      category: "Architectural",
      location: "Bangalore (Anjanapura)",
      image: "/images/gallery-3.jpg",
      aspectRatio: "aspect-16/10",
      description: "High-grade decorative wood veneers and architectural timber panel displays for commercial interior design projects."
    },
    {
      id: 11,
      title: "Custom Solid Burmese Teak Entrance Door",
      category: "Residential",
      location: "Indiranagar, Bangalore",
      image: "/images/gallery-4.jpg",
      aspectRatio: "aspect-4/3",
      description: "Precision-carved solid Burmese teak double entrance door with natural hand-rubbed oil finish."
    },
    {
      id: 12,
      title: "Bespoke Furniture Joinery & Wood Cuts",
      category: "Commercial",
      location: "Bangalore (Jigni)",
      image: "/images/gallery-5.jpg",
      aspectRatio: "aspect-3/4",
      description: "Finely sanded furniture-grade teak wood planks and joinery cuts for boutique hotel and restaurant interiors."
    }
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const fadeInVariant = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.4, ease: 'easeOut' }
  };

  return (
    <div className="w-full bg-white text-text-dark">
      {/* 1. PAGE HERO (Compact ~30vh height, background-secondary #FAF8F5, no image banner) */}
      <section className="bg-background-secondary py-16 md:py-20 px-6 border-b border-neutral-100 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl mx-auto space-y-3">
          {/* Breadcrumb */}
          <nav className="text-xs sm:text-sm font-medium text-text-muted tracking-wide flex items-center justify-center gap-2">
            <Link to="/" className="hover:text-brown-walnut transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-brown-walnut font-semibold">Our Work</span>
          </nav>

          {/* Heading */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-brown-walnut tracking-tight">
            Our Work
          </h1>

          <div className="w-16 h-[3px] bg-brown-tan mx-auto my-2 rounded-full" style={{ backgroundColor: '#7A5738' }} />

          {/* Subtext */}
          <p className="font-body text-text-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            A showcase of projects delivered across Gujarat and Karnataka — from raw timber to finished spaces.
          </p>
        </div>
      </section>

      {/* 2. FILTER TABS */}
      <section className="bg-white pt-12 pb-6 px-6 max-w-content mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-green-deep text-white shadow-sm'
                    : 'bg-white border border-neutral-200 text-text-dark hover:border-neutral-300 hover:text-brown-walnut'
                }`}
                style={isActive ? { backgroundColor: '#2F4A2B' } : {}}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. PORTFOLIO GALLERY GRID (Masonry layout rhythm with lightbox) */}
      <section className="bg-white py-8 md:py-16 px-6 max-w-content mx-auto">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              {...fadeInVariant}
              onClick={() => setSelectedProject(project)}
              className={`group cursor-pointer relative rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100 ${project.aspectRatio} flex flex-col justify-end shadow-xs`}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 absolute inset-0"
              />

              {/* Hover Dark Overlay (fades in on hover with project name, category badge, and location) */}
              <div className="absolute inset-0 bg-green-deep/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-6 flex flex-col justify-end text-white z-10" style={{ backgroundColor: 'rgba(47, 74, 43, 0.92)' }}>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-white/80">
                    <span className="font-semibold uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-md">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1 font-mono">
                      <FaMapMarkerAlt className="text-[10px]" />
                      {project.location}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white leading-snug">
                    {project.title}
                  </h3>
                  <p className="font-body text-xs text-white/90 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="pt-2 text-xs font-semibold text-white inline-flex items-center gap-1">
                    <span>View Project</span>
                    <FaArrowRight className="text-[10px]" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Lightbox Modal (Reused pattern) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Image Left */}
              <div className="md:w-3/5 bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain max-h-[60vh] md:max-h-[80vh]"
                />
              </div>

              {/* Details Right */}
              <div className="md:w-2/5 p-6 md:p-8 space-y-4 flex flex-col justify-between bg-white text-text-dark overflow-y-auto">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span className="font-semibold text-green-deep uppercase tracking-wider bg-neutral-100 px-2.5 py-1 rounded-md">
                      {selectedProject.category}
                    </span>
                    <span className="flex items-center gap-1 font-mono">
                      <FaMapMarkerAlt className="text-green-deep text-xs" />
                      {selectedProject.location}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-brown-walnut">
                    {selectedProject.title}
                  </h3>

                  <p className="font-body text-text-muted text-sm leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 space-y-3">
                  <Link
                    to="/contact"
                    onClick={() => setSelectedProject(null)}
                    className="w-full bg-green-deep text-white font-medium text-sm py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-opacity-95 transition-colors"
                    style={{ backgroundColor: '#2F4A2B' }}
                  >
                    <span>Inquire About Similar Timber</span>
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors z-20"
                aria-label="Close Lightbox"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. STATS/TRUST STRIP (Full-width dark-brown-walnut band #4A2E1A with white text) */}
      <motion.section
        {...fadeInVariant}
        className="bg-brown-walnut text-white py-16 px-6"
        style={{ backgroundColor: '#4A2E1A' }}
      >
        <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-1">
            <h3 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">
              150+ Projects
            </h3>
            <p className="font-body text-white/85 text-sm md:text-base font-medium">
              Luxury Villas, Commercial & Sawmill Contracts
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">
              2 States Served
            </h3>
            <p className="font-body text-white/85 text-sm md:text-base font-medium">
              Active Distribution Hubs in Gujarat & Karnataka
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">
              10+ Years
            </h3>
            <p className="font-body text-white/85 text-sm md:text-base font-medium">
              Unrivaled Mastery in Teak Import & Sizing
            </p>
          </div>
        </div>
      </motion.section>

      {/* 5. CTA SECTION (White background, centered content) */}
      <motion.section
        {...fadeInVariant}
        className="bg-white py-16 md:py-24 px-6 max-w-content mx-auto text-center space-y-6"
      >
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brown-walnut">
            Like what you see?
          </h2>
          <p className="font-body text-text-muted text-base md:text-lg leading-relaxed">
            Partner with Vadiya Impex for your next architectural, commercial, or residential project.
          </p>
        </div>

        <div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-green-deep text-white font-medium text-base px-8 py-4 rounded-xl hover:bg-opacity-95 shadow-md transition-all duration-200"
            style={{ backgroundColor: '#2F4A2B' }}
          >
            <span>Start a Project Inquiry</span>
            <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
