"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate frontend form submission
    setTimeout(() => setIsSubmitted(true), 1000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-neutral-50 font-sans selection:bg-amber-500/30">

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/50 to-[#0A0A0A] z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Contact YatraVerse" 
            className="w-full h-full object-cover opacity-50 scale-105 transform motion-safe:animate-[pulse_20s_ease-in-out_infinite_alternate]"
          />
        </div>
        
        <div className="relative z-20 text-center px-6 w-full max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl text-neutral-50 font-serif"
          >
            Begin Your <span className="text-amber-500 italic">Journey</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl font-light text-neutral-300 max-w-2xl mx-auto leading-relaxed"
          >
            Connect with our luxury travel advisors to start planning your bespoke, deeply personal Indian experience.
          </motion.p>
        </div>
      </motion.section>

      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 border border-white/10 p-10 md:p-14 rounded-[2rem] backdrop-blur-md relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
            <h2 className="text-3xl font-bold mb-8 font-serif">Send an Inquiry</h2>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/10 border border-green-500/30 p-8 rounded-2xl text-center"
              >
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-white mb-2">Inquiry Sent Successfully!</h3>
                <p className="text-neutral-400">One of our luxury advisors will be in touch with you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-neutral-400 tracking-widest uppercase mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-neutral-400 tracking-widest uppercase mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="destination" className="block text-sm font-bold text-neutral-400 tracking-widest uppercase mb-2">Destination Interest</label>
                  <select 
                    id="destination" 
                    required
                    value={formData.destination}
                    onChange={(e) => setFormData({...formData, destination: e.target.value})}
                    className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500/50 transition-colors appearance-none"
                  >
                    <option value="" disabled>Select a destination</option>
                    <option value="mathura">Mathura & Vrindavan</option>
                    <option value="agra">Agra (The Taj Mahal)</option>
                    <option value="jaipur">Jaipur (The Pink City)</option>
                    <option value="kerala">Kerala Backwaters</option>
                    <option value="ladakh">Ladakh</option>
                    <option value="other">Other / Custom Itinerary</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-neutral-400 tracking-widest uppercase mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500/50 transition-colors resize-none"
                    placeholder="Tell us about your dream journey..."
                  ></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold uppercase tracking-widest text-sm rounded-xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transform hover:-translate-y-1 mt-4">
                  Send Inquiry
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold mb-8 font-serif">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-amber-500/50 transition-colors flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 uppercase tracking-widest font-bold mb-1">Email</p>
                    <p className="text-xl font-light text-neutral-200">journeys@yatraverse.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-amber-500/50 transition-colors flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 uppercase tracking-widest font-bold mb-1">Phone</p>
                    <p className="text-xl font-light text-neutral-200">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-amber-500/50 transition-colors flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 uppercase tracking-widest font-bold mb-1">Location</p>
                    <p className="text-xl font-light text-neutral-200">Mathura, Uttar Pradesh<br/>India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Concierge Support Block */}
            <div className="bg-gradient-to-br from-neutral-900 to-black border border-amber-500/30 p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-xl font-bold font-serif mb-2 relative z-10 text-white">24/7 Luxury Travel Assistance</h3>
              <p className="text-neutral-400 text-sm leading-relaxed relative z-10 mb-4">
                Our global network of concierges is available around the clock to cater to your every need, from private jet charters to exclusive dining reservations.
              </p>
              <div className="flex items-center gap-2 text-amber-500 text-xs tracking-widest uppercase font-bold">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Concierge Online
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <div className="w-full h-64 bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden relative group flex items-center justify-center">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700"></div>
               <div className="absolute inset-0 bg-black/40"></div>
               <div className="relative z-10 bg-black/60 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full flex items-center gap-3">
                 <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                 </svg>
                 <span className="text-white font-serif tracking-wide">View on Map</span>
               </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 px-6 border-t border-white/10 overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-neutral-900/50 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-50 mb-8 font-serif">Need Immediate Inspiration?</h2>
          <p className="text-xl text-neutral-300 font-light mb-12">
            Explore our curated collections or chat with our AI Travel Guide for instant, personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/experiences" className="inline-block px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold uppercase tracking-widest text-sm rounded-full transition-all shadow-[0_0_30px_rgba(245,158,11,0.3)] transform hover:-translate-y-1">
              Explore Experiences
            </Link>
            <Link href="/ai-guide" className="inline-block px-10 py-5 bg-white/5 backdrop-blur-md border border-white/20 hover:bg-white/10 text-white font-bold uppercase tracking-widest text-sm rounded-full transition-all transform hover:-translate-y-1">
              Start AI Travel Guide
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
