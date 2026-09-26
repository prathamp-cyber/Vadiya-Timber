import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaCheck, FaAward, FaTruck, FaBuilding, FaArrowRight
} from 'react-icons/fa';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInVariant = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.4, ease: 'easeOut' }
  };

  const servicesList = [
    {
      id: "import-sourcing",
      title: "Timber Import & Sourcing",
      image: "/images/gandhidham.jpg",
      description: "Direct import of certified Burmese Teak, Honne, Sal, and structural hardwoods from sustainable global forest concessions, handling full port logistics through Kandla port.",
      bullets: [
        "Direct import from certified sustainable forests",
        "Teak, Honne, Sal, and exotic imported hardwoods",
        "Strict quality-grading & inspection on log arrival"
      ]
    },
    {
      id: "sawing-milling",
      title: "Log Sawing & Precision Milling",
      image: "/images/gallery-1.jpg",
      description: "State-of-the-art horizontal band saw mills and laser-guided sizing machinery delivering precision cut-to-spec timber planks, beams, and structural logs.",
      bullets: [
        "Laser-guided mill cutting for exact dimensions",
        "Custom plank thickness & heavy beam sizing",
        "Optimized log cutting to minimize grain wastage"
      ]
    },
    {
      id: "kiln-drying",
      title: "Kiln Drying & Thermal Seasoning",
      image: "/images/gallery-2.jpg",
      description: "Scientific thermal seasoning kilns reducing internal wood moisture content to optimal architectural standards, preventing warping, cracking, and decay over decades.",
      bullets: [
        "Controlled moisture reduction (8% - 12% target)",
        "Anti-warping & internal stress prevention",
        "High-pressure anti-termite chemical treatment"
      ]
    },
    {
      id: "architectural-timber",
      title: "Custom Architectural Timber",
      image: "/images/gallery-3.jpg",
      description: "Precision wood profiling for luxury residential wall paneling, tongue-and-groove decking, solid door frames, ceiling beams, and decorative interior mouldings.",
      bullets: [
        "Tongue-and-groove weather-resistant decking",
        "Architectural wood wall cladding & ceiling beams",
        "Custom chamfered door frames & window shutters"
      ]
    },
    {
      id: "wholesale-supply",
      title: "Bulk & Wholesale Supply",
      image: "/images/gallery-4.jpg",
      description: "High-capacity commercial timber supply fulfilling large-scale construction contracts, furniture manufacturers, joinery mills, and retail dealers nationwide.",
      bullets: [
        "Scalable bulk log & sawn timber volume",
        "Competitive direct-importer wholesale pricing",
        "Uniform wood color & grain batch matching"
      ]
    },
    {
      id: "staging-logistics",
      title: "Site Staging & Logistics",
      image: "/images/gallery-5.jpg",
      description: "Dedicated transport networks and regional staging warehouses operating directly from Kandla port to job sites across Gujarat, Karnataka, and major national hubs.",
      bullets: [
        "Direct-to-site scheduled truck delivery",
        "Protective timber wrapping & palletized staging",
        "Regional staging facilities in Gandhidham & Bangalore"
      ]
    }
  ];

  const trustPoints = [
    {
      icon: FaAward,
      title: "Certified Quality",
      description: "100% legally sourced, kiln-seasoned, and structural-grade timber inspected at every processing stage."
    },
    {
      icon: FaTruck,
      title: "On-Time Delivery",
      description: "Dedicated distribution fleets delivering direct to job sites across Gujarat, Karnataka, and nationwide."
    },
    {
      icon: FaBuilding,
      title: "3 Locations, One Standard",
      description: "Seamless quality control across our Kandla port hub in Gandhidham and Bangalore experience centers."
    }
  ];

  return (
    <div className="w-full bg-white text-text-dark">
      {/* 1. PAGE HERO (Compact 30vh height, white/background-secondary, no image banner) */}
      <section className="bg-background-secondary py-16 md:py-20 px-6 border-b border-neutral-100 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl mx-auto space-y-3">
          {/* Breadcrumbs */}
          <nav className="text-xs sm:text-sm font-medium text-text-muted tracking-wide flex items-center justify-center gap-2">
            <Link to="/" className="hover:text-brown-walnut transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-brown-walnut font-semibold">Services</span>
          </nav>

          {/* Heading */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-brown-walnut tracking-tight">
            Our Services
          </h1>

          <div className="w-16 h-[3px] bg-brown-tan mx-auto my-2 rounded-full" style={{ backgroundColor: '#7A5738' }} />

          {/* Subtext */}
          <p className="font-body text-text-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            End-to-end timber solutions — from raw import to finished craftsmanship.
          </p>
        </div>
      </section>

      {/* 2. DETAILED SERVICES LIST (Alternating left-right image+text rows) */}
      <section className="bg-white py-16 md:py-28 px-6 max-w-content mx-auto">
        <div className="space-y-20 md:space-y-28">
          {servicesList.map((service, index) => {
            const isEven = index % 2 === 1;
            return (
              <motion.div
                key={service.id}
                {...fadeInVariant}
                className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2 aspect-16/10 rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-xs">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2 space-y-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-green-deep font-mono">
                    Service 0{index + 1}
                  </span>
                  <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-brown-walnut leading-snug">
                    {service.title}
                  </h2>
                  <p className="font-body text-text-dark text-base md:text-lg leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet list */}
                  <ul className="space-y-2 pt-2 text-sm md:text-base text-text-muted">
                    {service.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-neutral-100 text-green-deep flex items-center justify-center shrink-0">
                          <FaCheck className="w-2.5 h-2.5" />
                        </div>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. WHY CHOOSE US BAND (Dark-green background #2F4A2B, full-width, white text) */}
      <motion.section
        {...fadeInVariant}
        className="bg-green-deep text-white py-16 md:py-24 px-6"
        style={{ backgroundColor: '#2F4A2B' }}
      >
        <div className="max-w-content mx-auto text-center space-y-12">
          <div className="space-y-3">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Why Choose Vadiya Timber Merchant
            </h2>
            <p className="font-body text-white/85 text-base max-w-xl mx-auto">
              Three decades of timber expertise, direct port importing, and uncompromised quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
            {trustPoints.map((point, idx) => {
              const IconComp = point.icon;
              return (
                <div key={idx} className="space-y-4 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white text-2xl">
                    <IconComp />
                  </div>
                  <h3 className="font-heading text-xl font-bold">
                    {point.title}
                  </h3>
                  <p className="font-body text-white/80 text-sm leading-relaxed max-w-xs">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* 4. CTA SECTION (White background, centered heading, dark-green button) */}
      <motion.section
        {...fadeInVariant}
        className="bg-white py-16 md:py-24 px-6 max-w-content mx-auto text-center space-y-6"
      >
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brown-walnut">
            Have a project in mind?
          </h2>
          <p className="font-body text-text-muted text-base md:text-lg leading-relaxed">
            Discuss custom timber specifications, bulk pricing, or architectural guidance with our specialist team.
          </p>
        </div>

        <div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-green-deep text-white font-medium text-base px-8 py-4 rounded-xl hover:bg-opacity-95 shadow-md transition-all duration-200"
            style={{ backgroundColor: '#2F4A2B' }}
          >
            <span>Get a Timber Quote</span>
            <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
