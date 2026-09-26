import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { stores } from '../data/stores';
import Button from '../components/Button';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaDirections,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle
} from 'react-icons/fa';

export default function Contact() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message content is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for that field as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Contact Form Data Submitted:', formData);
      setSubmitted(true);
    }
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'General Inquiry',
      message: ''
    });
    setErrors({});
    setSubmitted(false);
  };

  const fadeInVariant = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: 'easeOut' }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full bg-white text-text-dark"
    >
      {/* 1. PAGE HERO (Compact ~30vh height, background-secondary #FAF8F5, same style as Services/Our Work hero) */}
      <section className="bg-background-secondary py-16 md:py-20 px-6 border-b border-neutral-100 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl mx-auto space-y-3">
          {/* Breadcrumb */}
          <nav className="text-xs sm:text-sm font-medium text-text-muted tracking-wide flex items-center justify-center gap-2">
            <Link to="/" className="hover:text-brown-walnut transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-brown-walnut font-semibold">Contact</span>
          </nav>

          {/* Heading */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-brown-walnut tracking-tight">
            Get in Touch
          </h1>

          {/* Brown-tan underline accent */}
          <div className="w-16 h-[3px] bg-brown-tan mx-auto my-2.5 rounded-full" style={{ backgroundColor: '#7A5738' }} />

          {/* Subtext */}
          <p className="font-body text-text-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Reach out for quotes, bulk orders, or to visit any of our branches
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTACT SECTION (Two-column layout, stacks on mobile) */}
      <section className="bg-white py-16 md:py-24 px-6 max-w-content mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN — Contact Form */}
          <motion.div {...fadeInVariant} className="lg:col-span-7">
            <div className="bg-white border border-neutral-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
              <div className="space-y-1">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brown-walnut">
                  Send Us a Message
                </h2>
                <p className="font-body text-text-muted text-sm leading-relaxed">
                  Fill out the form below for customized timber specifications, pricing estimates, or bulk log inquiries.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 bg-background-secondary border border-green-deep/20 rounded-xl text-center space-y-4 my-4"
                  >
                    <div className="w-14 h-14 bg-green-deep/10 text-green-deep rounded-full flex items-center justify-center mx-auto text-2xl">
                      <FaCheckCircle className="text-green-deep" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-brown-walnut">
                        Thanks, we'll get back to you shortly
                      </h3>
                      <p className="font-body text-text-muted text-sm max-w-md mx-auto leading-relaxed">
                        We have received your inquiry. One of our timber specialists from Gandhidham or Bangalore will reach out to you within 24 hours.
                      </p>
                    </div>
                    <div className="pt-2">
                      <Button
                        type="button"
                        variant="secondary"
                        onClick={handleResetForm}
                        className="text-xs uppercase tracking-wider font-semibold"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    {/* Name & Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Full Name */}
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Rajesh Patel"
                          className={`w-full px-4 py-3 rounded-lg border text-sm text-text-dark transition-all duration-200 focus:outline-none ${
                            errors.name
                              ? 'border-red-400 bg-red-50/20 focus:border-red-500'
                              : 'border-neutral-200 focus:border-green-deep focus:ring-2 focus:ring-green-deep/10 bg-white'
                          }`}
                        />
                        {errors.name && (
                          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                            <FaExclamationCircle className="text-[10px]" />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5"
                        >
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className={`w-full px-4 py-3 rounded-lg border text-sm text-text-dark transition-all duration-200 focus:outline-none ${
                            errors.phone
                              ? 'border-red-400 bg-red-50/20 focus:border-red-500'
                              : 'border-neutral-200 focus:border-green-deep focus:ring-2 focus:ring-green-deep/10 bg-white'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                            <FaExclamationCircle className="text-[10px]" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="rajesh@example.com"
                        className={`w-full px-4 py-3 rounded-lg border text-sm text-text-dark transition-all duration-200 focus:outline-none ${
                          errors.email
                            ? 'border-red-400 bg-red-50/20 focus:border-red-500'
                            : 'border-neutral-200 focus:border-green-deep focus:ring-2 focus:ring-green-deep/10 bg-white'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <FaExclamationCircle className="text-[10px]" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Subject Dropdown */}
                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5"
                      >
                        Subject
                      </label>
                      <select
                        id="contact-subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-sm text-text-dark transition-all duration-200 focus:outline-none focus:border-green-deep focus:ring-2 focus:ring-green-deep/10 bg-white cursor-pointer"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Bulk Order">Bulk Order</option>
                        <option value="Site Visit">Site Visit</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5"
                      >
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Specify timber species (Burmese Teak, Honne, Sal), required dimensions, volume, or project details..."
                        className={`w-full px-4 py-3 rounded-lg border text-sm text-text-dark transition-all duration-200 focus:outline-none ${
                          errors.message
                            ? 'border-red-400 bg-red-50/20 focus:border-red-500'
                            : 'border-neutral-200 focus:border-green-deep focus:ring-2 focus:ring-green-deep/10 bg-white'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <FaExclamationCircle className="text-[10px]" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        className="w-full py-3.5 text-base font-medium flex items-center justify-center gap-2"
                        style={{ backgroundColor: '#2F4A2B' }}
                      >
                        <span>Submit Message</span>
                        <FaPaperPlane className="text-xs" />
                      </Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* RIGHT COLUMN — Direct Contact Info */}
          <motion.div {...fadeInVariant} className="lg:col-span-5 space-y-6">
            <div className="space-y-1">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brown-walnut">
                Direct Contact & Locations
              </h2>
              <p className="font-body text-text-muted text-sm leading-relaxed">
                Connect directly with our branch managers or visit our facilities.
              </p>
            </div>

            {/* 3 Branch Store Cards */}
            <div className="space-y-4">
              {stores.map((store) => (
                <div
                  key={store.id}
                  className="bg-white border border-neutral-200 rounded-xl p-6 shadow-xs hover:border-neutral-300 transition-all duration-200 space-y-3"
                >
                  <div className="space-y-1">
                    <h3 className="font-heading text-lg font-bold text-brown-walnut">
                      {store.name}
                    </h3>
                    <p className="font-body text-xs text-text-muted font-medium">
                      {store.tagline}
                    </p>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-2.5 text-xs text-text-muted leading-relaxed">
                    <FaMapMarkerAlt className="w-3.5 h-3.5 text-green-deep shrink-0 mt-0.5" />
                    <span>{store.address}</span>
                  </div>

                  {/* Phone Clickable Link */}
                  <div className="flex items-center gap-2.5 text-xs font-mono text-text-dark">
                    <FaPhoneAlt className="w-3.5 h-3.5 text-green-deep shrink-0" />
                    <a
                      href={`tel:${store.phone.replace(/[^+\d]/g, '')}`}
                      className="hover:text-green-deep transition-colors font-medium hover:underline"
                    >
                      {store.phone}
                    </a>
                  </div>

                  {/* Get Directions Text Link */}
                  <div className="pt-1 border-t border-neutral-100 flex items-center justify-between">
                    <a
                      href={store.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-deep hover:underline transition-colors"
                      style={{ color: '#2F4A2B' }}
                    >
                      <span>Get Directions</span>
                      <FaDirections className="text-sm" />
                    </a>
                    <Link
                      to={`/store/${store.id}`}
                      className="text-xs font-medium text-brown-walnut hover:text-brown-tan transition-colors"
                    >
                      View Details &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* General Email & WhatsApp Card */}
            <div className="bg-background-secondary border border-neutral-200 rounded-xl p-6 shadow-xs space-y-4">
              <h3 className="font-heading text-base font-bold text-brown-walnut">
                General Inquiries & Support
              </h3>

              <div className="space-y-3 text-sm">
                {/* General Email */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-neutral-200 text-green-deep flex items-center justify-center shrink-0 shadow-2xs">
                    <FaEnvelope className="w-4 h-4 text-green-deep" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-text-muted">
                      Email Us
                    </span>
                    <a
                      href="mailto:contact@vadiyatimbers.com"
                      className="font-medium text-text-dark hover:text-green-deep transition-colors text-sm"
                    >
                      contact@vadiyatimbers.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp Click-to-Chat */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <FaWhatsapp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-text-muted">
                      WhatsApp Quick Chat
                    </span>
                    <a
                      href="https://wa.me/919876543210?text=Hello%20Vadiya%20Timbers%2C%20I%20would%20like%20to%20inquire%20about..."
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-emerald-700 hover:text-emerald-800 hover:underline transition-colors text-sm flex items-center gap-1"
                    >
                      <span>+91 98765 43210</span>
                      <span className="text-xs font-normal text-emerald-600">(Click to Chat)</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 3. MAP SECTION (Three side-by-side embedded Google maps, full-width section) */}
      <section className="bg-background-secondary py-16 md:py-24 px-6 border-t border-neutral-200">
        <div className="max-w-content mx-auto space-y-12">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brown-walnut">
              Our Store Locations Map
            </h2>
            <div className="w-16 h-[3px] bg-brown-tan mx-auto my-2 rounded-full" style={{ backgroundColor: '#7A5738' }} />
            <p className="font-body text-text-muted text-base leading-relaxed">
              Find our primary importing hub and regional experience centers on Google Maps.
            </p>
          </div>

          {/* Three Side-by-Side Embedded Maps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {stores.map((store) => (
              <div
                key={store.id}
                className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-xs flex flex-col justify-between"
              >
                {/* Embedded Map Frame */}
                <div className="w-full h-64 sm:h-72 bg-neutral-100 relative">
                  <iframe
                    title={`Google Map - ${store.name}`}
                    src={store.embedMapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>

                {/* Card Info Footer */}
                <div className="p-5 space-y-3 bg-white">
                  <h3 className="font-heading text-base font-bold text-brown-walnut leading-snug">
                    {store.name}
                  </h3>
                  <p className="text-xs text-text-muted flex items-start gap-1.5 leading-relaxed line-clamp-2">
                    <FaMapMarkerAlt className="text-green-deep text-xs shrink-0 mt-0.5" />
                    <span>{store.address}</span>
                  </p>
                  <a
                    href={store.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-deep hover:underline transition-colors pt-1"
                    style={{ color: '#2F4A2B' }}
                  >
                    <span>Open in Google Maps</span>
                    <FaDirections className="text-xs" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </motion.div>
  );
}
