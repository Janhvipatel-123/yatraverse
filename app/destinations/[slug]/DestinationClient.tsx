"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Destination } from '../../../lib/destinations';
import Navigation from '../../../components/Navigation';

interface Props {
  destination: Destination;
}

export default function DestinationClient({ destination }: Props) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-neutral-50 font-sans selection:bg-amber-500/30">
      <Navigation />

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[80vh] flex items-end justify-center overflow-hidden pb-20"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-[#0A0A0A]/20 to-[#0A0A0A] z-10"></div>
          <img 
            src={destination.heroImage} 
            alt={destination.name} 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto w-full">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-amber-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
          >
            {destination.state}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-8xl font-bold mb-6 drop-shadow-2xl text-neutral-50 font-serif"
          >
            {destination.name}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mt-12"
          >
             <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-full flex gap-3 items-center shadow-[0_0_30px_rgba(245,158,11,0.1)]">
                <span className="text-amber-500 font-bold tracking-wider text-sm uppercase">Best Time</span> 
                <span className="w-1 h-1 rounded-full bg-neutral-600"></span>
                <span className="text-neutral-200">{destination.bestTime}</span>
             </div>
             <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-full flex gap-3 items-center shadow-[0_0_30px_rgba(245,158,11,0.1)]">
                <span className="text-amber-500 font-bold tracking-wider text-sm uppercase">Budget</span> 
                <span className="w-1 h-1 rounded-full bg-neutral-600"></span>
                <span className="text-neutral-200">{destination.estimatedBudget}</span>
             </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10">
        <div className="lg:col-span-2 space-y-20">
          
          {/* Overview */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-neutral-50 font-serif flex items-center gap-4">
              <span className="w-12 h-px bg-amber-500/50"></span>
              The Experience
            </h2>
            <p className="text-neutral-400 leading-relaxed text-lg md:text-xl font-light">
              {destination.description}
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="bg-gradient-to-br from-neutral-900 to-black border border-white/5 p-8 rounded-3xl relative overflow-hidden group hover:border-amber-500/30 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl"></div>
              <h3 className="text-2xl font-bold mb-4 text-amber-500 font-serif">Culture</h3>
              <p className="text-neutral-400 leading-relaxed">
                {destination.cultureHighlight}
              </p>
            </div>
            <div className="bg-gradient-to-br from-neutral-900 to-black border border-white/5 p-8 rounded-3xl relative overflow-hidden group hover:border-amber-500/30 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl"></div>
              <h3 className="text-2xl font-bold mb-4 text-amber-500 font-serif">Gastronomy</h3>
              <p className="text-neutral-400 leading-relaxed">
                {destination.foodHighlight}
              </p>
            </div>
          </motion.div>

          {/* Top Attractions */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-neutral-50 font-serif flex items-center gap-4">
              <span className="w-12 h-px bg-amber-500/50"></span>
              Curated Attractions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {destination.topAttractions.map((place, idx) => (
                <div key={idx} className="p-6 bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl hover:bg-white/10 hover:border-amber-500/20 transition-all duration-300 flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-amber-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/10 transition-colors">
                    <span className="text-amber-500 font-serif">{idx + 1}</span>
                  </div>
                  <h3 className="font-bold text-neutral-200 text-lg">{place}</h3>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sidebar */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Booking CTA */}
          <div className="sticky top-32 bg-gradient-to-br from-neutral-900 to-black border border-amber-500/20 p-10 rounded-[2.5rem] text-center shadow-[0_0_50px_rgba(245,158,11,0.05)]">
            <h3 className="text-3xl font-bold text-neutral-50 mb-6 font-serif">Begin Your Journey</h3>
            <p className="text-neutral-400 mb-8 leading-relaxed">Let our concierges craft a bespoke itinerary for your {destination.name} experience.</p>
            <button className="w-full py-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold rounded-full transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transform hover:scale-105 uppercase tracking-widest text-sm mb-4">
              Consult Advisor
            </button>
            <p className="text-neutral-500 text-xs uppercase tracking-wider">Available 24/7</p>
          </div>
        </motion.div>
      </section>

      {/* Gallery */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5"
      >
        <div className="text-center mb-16">
          <span className="text-amber-500 font-bold tracking-widest uppercase text-sm block mb-4 flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-amber-500/50"></span>
            Visual Story
            <span className="w-12 h-px bg-amber-500/50"></span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-50 font-serif">Glimpses of {destination.name}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {destination.galleryImages.map((img, i) => (
             <div 
               key={i} 
               className={`rounded-2xl overflow-hidden border border-white/5 relative group ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
             >
               <img src={img} alt={`${destination.name} gallery ${i}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             </div>
          ))}
        </div>
      </motion.section>

      {/* Footer (Simplified for brevity or ideally import a common Footer component) */}
      <footer className="bg-neutral-950 border-t border-neutral-900/50 py-10 px-6 text-center">
        <p className="text-neutral-600 text-sm">
          &copy; {new Date().getFullYear()} YatraVerse. Crafted for the discerning traveler.
        </p>
      </footer>
    </div>
  );
}
