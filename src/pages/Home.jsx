import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { stores } from '../data/stores';
import { FaArrowRight, FaQuoteLeft } from 'react-icons/fa';
import heroBg from '../assets/images/hero-bg.jpg';
import { revealItemVariants } from '../components/Navbar';

export default function Home() {
  const fadeInVariant = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.4, ease: 'easeOut' }
  };

  const processSteps = [
    {
      number: "01",
      title: "Sourcing",
      description: "Direct import from certified sustainable global forest concessions."
    },
    {
      number: "02",
      title: "Milling",
      description: "Laser-guided precision sawing to custom contract specifications."
    },
    {
      number: "03",
      title: "Seasoning",
      description: "Controlled thermal kiln drying for decade-long dimensional stability."
    },
    {
      number: "04",
      title: "Delivery",
      description: "Direct scheduled transport logistics right to your job site."
    }
  ];

  const timberSpecies = [
    {
      id: "burma-border",
      name: "Burma Border",
      image: "/images/gallery-4.jpg",
      note: "Prized for exceptional natural oils, rich golden grain, and unmatched weather resistance."
    },
    {
      id: "teak-wood",
      name: "Teak wood",
      image: "/images/gallery-2.jpg",
      note: "Renowned for high structural density, deep reddish-brown tones, and termite resistance."
    }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "Vadiya Timbers provided kiln-seasoned Burmese Teak for our luxury villa project in Bangalore. The grain consistency and exact cut-to-spec sizing saved us weeks on site.",
      client: "Arun Raghavan",
      role: "Principal Architect, Bangalore"
    },
    {
      id: 2,
      quote: "We rely on their Gandhidham port hub for bulk Sal and hardwood imports. Their pricing is unbeatable and truck delivery to our Gujarat site was right on schedule.",
      client: "Kishore Patel",
      role: "Infrastructure Contractor, Gujarat"
    },
    {
      id: 3,
      quote: "The solid teak door frames and customized interior mouldings from their Jigni store elevated our entire home renovation. Exceptional timber craftsmanship!",
      client: "Priya Sundaram",
      role: "Interior Designer & Homeowner, Bangalore"
    }
  ];

  return (
    <div className="w-full bg-white text-text-dark">
      {/* 1. HERO BANNER SECTION (Static background image, static container) */}
      <section
        className="-mt-20 relative w-full min-h-screen min-h-[100svh] flex flex-col justify-between px-6 pt-24 md:pt-28 pb-12 text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(43,43,43,0.65), rgba(43,43,43,0.65)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Center Hero Content */}
        <div className="max-w-4xl mx-auto space-y-6 relative z-10 px-4 py-8 my-auto text-center">
          {/* Item 2 in Reveal Sequence: Hero Headline */}
          <motion.h1
            variants={revealItemVariants}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}
          >
            Crafting Trust in Every Timber
          </motion.h1>

          {/* Item 3 in Reveal Sequence: Hero Subtext */}
          <motion.p
            variants={revealItemVariants}
            className="font-body text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}
          >
            Importing and processing premium teak, architectural hardwoods, red sal, honne and custom timbers.
          </motion.p>

          {/* Item 4 in Reveal Sequence: Explore Stores Button */}
          <motion.div variants={revealItemVariants} className="pt-4">
            <Link
              to="/store/gandhidham"
              className="inline-flex items-center gap-2 bg-green-deep text-white font-medium text-base px-8 py-4 rounded-xl hover:bg-opacity-95 shadow-md transition-all duration-200"
              style={{ backgroundColor: '#2F4A2B' }}
            >
              <span>Explore Our Stores</span>
              <FaArrowRight className="text-sm" />
            </Link>
          </motion.div>
        </div>

        {/* Spacer div to balance flex justify-between */}
        <div className="w-full max-w-content mx-auto" />
      </section>

      {/* 2. THREE STORE BOXES */}
      <motion.section
        {...fadeInVariant}
        className="bg-white py-16 md:py-28 px-6 max-w-content mx-auto"
      >
        {/* Section Heading Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brown-walnut">
            Our Branches
          </h2>
          <div className="w-16 h-[3px] bg-brown-tan mx-auto my-3 rounded-full" style={{ backgroundColor: '#7A5738' }} />
          <p className="font-body text-text-muted text-base md:text-lg leading-relaxed">
            Visit our primary hubs and branch facilities across Gandhidham and Bangalore
          </p>
        </div>

        {/* Store Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stores.map((store) => (
            <div
              key={store.id}
              className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-200 flex flex-col justify-between shadow-xs"
            >
              <div>
                {/* Store Image */}
                <div className="aspect-16/10 bg-neutral-100 overflow-hidden border-b border-neutral-100">
                  <img
                    src={store.image}
                    alt={store.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Store Card Content */}
                <div className="p-5 md:p-6 space-y-2">
                  <h3 className="font-heading text-lg md:text-xl font-bold text-brown-walnut leading-snug">
                    {store.name}
                  </h3>
                  <p className="font-body text-text-muted text-xs sm:text-sm leading-relaxed">
                    {store.tagline}
                  </p>
                </div>
              </div>

              {/* View Details Link */}
              <div className="px-5 md:px-6 pb-5 md:pb-6 pt-2">
                {store.id === 'vadiya-associates' ? (
                  <span className="inline-flex items-center gap-1.5 font-body text-xs sm:text-sm font-semibold text-text-muted cursor-default">
                    <span>Details Coming Soon</span>
                  </span>
                ) : (
                  <Link
                    to={`/store/${store.id}`}
                    className="inline-flex items-center gap-1.5 font-body text-xs sm:text-sm font-semibold text-green-deep hover:underline"
                  >
                    <span>View Details</span>
                    <FaArrowRight className="text-xs" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 3. ABOUT VADIYA TIMBER MERCHANT TEXT BLOCK */}
      <motion.section
        {...fadeInVariant}
        className="bg-white py-16 md:py-24 px-6 border-t border-neutral-100"
      >
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-brown-walnut">
            About Vadiya Impex
          </h2>
          <p className="font-body text-text-muted text-base md:text-lg leading-relaxed">
            Vadiya Impex is a premier timber importer and primary processor headquartered in Gandhidham with specialized architectural showrooms in Bangalore. For over years, we have supplied master craftsmen, architects, and builders with certified high-grade teak, hardwoods, and precision-sawn timber. Our unwavering commitment to sustainability, structural integrity, and tailored client service makes us a trusted leader across India.
          </p>
        </div>
      </motion.section>

      {/* 4. OUR PROCESS */}
      <motion.section
        {...fadeInVariant}
        className="bg-white py-16 md:py-24 px-6 border-t border-neutral-100 max-w-content mx-auto"
      >
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brown-walnut">
            From Forest to Finish
          </h2>
          <div className="w-16 h-[3px] bg-brown-tan mx-auto my-3 rounded-full" style={{ backgroundColor: '#7A5738' }} />
          <p className="font-body text-text-muted text-base md:text-lg leading-relaxed">
            Our end-to-end quality controlled timber supply workflow
          </p>
        </div>

        {/* Horizontal Timeline Container */}
        <div className="relative">
          {/* Connecting Line between steps (Desktop only) */}
          <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-[2px] bg-neutral-200 z-0" />

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1, ease: 'easeOut' }}
                className="flex flex-col items-center text-center space-y-4 group"
              >
                {/* Numbered Circle */}
                <div
                  className="w-14 h-14 rounded-full bg-green-deep text-white font-heading font-bold text-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200 border-4 border-white"
                  style={{ backgroundColor: '#2F4A2B' }}
                >
                  {step.number}
                </div>

                {/* Step Details */}
                <div className="space-y-2 max-w-xs">
                  <h3 className="font-heading text-xl font-bold text-brown-walnut">
                    {step.title}
                  </h3>
                  <p className="font-body text-text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 5. TIMBER WE WORK WITH */}
      <motion.section
        {...fadeInVariant}
        className="bg-background-secondary py-16 md:py-24 px-6 border-t border-b border-neutral-200"
      >
        <div className="max-w-content mx-auto space-y-12">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brown-walnut">
              Timber We Work With
            </h2>
            <div className="w-16 h-[3px] bg-brown-tan mx-auto my-3 rounded-full" style={{ backgroundColor: '#7A5738' }} />
            <p className="font-body text-text-muted text-base md:text-lg leading-relaxed">
              Handpicked species harvested for exceptional grain, strength, and durability
            </p>
          </div>

          {/* Timber Cards Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {timberSpecies.map((timber, idx) => (
              <motion.div
                key={timber.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: 'easeOut' }}
                className="group bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container with Subtle Hover Zoom */}
                <div className="aspect-16/10 overflow-hidden bg-neutral-100 relative">
                  <img
                    src={timber.image}
                    alt={timber.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Card Text Content */}
                <div className="p-6 space-y-2">
                  <h3 className="font-heading text-xl font-bold text-brown-walnut group-hover:text-green-deep transition-colors">
                    {timber.name}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-text-muted leading-relaxed">
                    {timber.note}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 6. WHAT CLIENTS SAY */}
      <motion.section
        {...fadeInVariant}
        className="bg-white py-16 md:py-24 px-6 max-w-content mx-auto"
      >
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brown-walnut">
            What Clients Say
          </h2>
          <div className="w-16 h-[3px] bg-brown-tan mx-auto my-3 rounded-full" style={{ backgroundColor: '#7A5738' }} />
          <p className="font-body text-text-muted text-base md:text-lg leading-relaxed">
            Feedback from architects, builders, and homeowners across India
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1, ease: 'easeOut' }}
              className="bg-white border border-neutral-200 rounded-xl p-8 shadow-xs hover:border-neutral-300 transition-all duration-200 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <FaQuoteLeft className="text-green-deep/25 text-2xl" style={{ color: '#2F4A2B' }} />
                <p className="font-body text-text-dark text-sm sm:text-base leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 space-y-0.5">
                <h4 className="font-heading font-bold text-brown-walnut text-base">
                  {item.client}
                </h4>
                <p className="font-body text-xs font-semibold text-green-deep uppercase tracking-wider" style={{ color: '#2F4A2B' }}>
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 7. ONE SOLID-COLOR BAND SECTION */}
      <motion.section
        {...fadeInVariant}
        className="bg-green-deep text-white py-16 px-6"
        style={{ backgroundColor: '#2F4A2B' }}
      >
        <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-1">
            <h3 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">
              Years
            </h3>
            <p className="font-body text-white/85 text-sm md:text-base font-medium">
              Industry Experience & Legacy
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">
              3 Locations
            </h3>
            <p className="font-body text-white/85 text-sm md:text-base font-medium">
              Gandhidham & Bangalore Facilities
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">
              1,000+ Projects
            </h3>
            <p className="font-body text-white/85 text-sm md:text-base font-medium">
              Architectural & Commercial Delivery
            </p>
          </div>
        </div>
      </motion.section>

      {/* 8. BRIEF TEASER ROW */}
      <motion.section
        {...fadeInVariant}
        className="bg-white py-16 md:py-24 px-6 max-w-content mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* Services Teaser */}
          <div className="bg-white border border-neutral-200 rounded-xl p-8 md:p-10 space-y-4 flex flex-col justify-between shadow-xs">
            <div className="space-y-2">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-brown-walnut">
                Our Services
              </h3>
              <p className="font-body text-text-muted text-sm md:text-base leading-relaxed">
                Explore our comprehensive timber capabilities — from direct import and custom sawing to kiln drying, profiling, and site staging.
              </p>
            </div>
            <div>
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 font-body text-sm md:text-base font-semibold text-green-deep hover:underline pt-2"
              >
                <span>Explore Services</span>
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>

          {/* Our Work Teaser */}
          <div className="bg-white border border-neutral-200 rounded-xl p-8 md:p-10 space-y-4 flex flex-col justify-between shadow-xs">
            <div className="space-y-2">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-brown-walnut">
                Our Work
              </h3>
              <p className="font-body text-text-muted text-sm md:text-base leading-relaxed">
                Browse our portfolio of completed timber projects, custom architectural wood paneling, teak staircases, and log import operations.
              </p>
            </div>
            <div>
              <Link
                to="/our-work"
                className="inline-flex items-center gap-1.5 font-body text-sm md:text-base font-semibold text-green-deep hover:underline pt-2"
              >
                <span>View Portfolio</span>
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
