"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Destination } from '../../../lib/destinations';

interface Props {
  destination: Destination;
}

export default function DestinationClient({ destination }: Props) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-neutral-50 font-sans selection:bg-amber-500/30">

      {/* Cinematic Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0A0A0A] z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent z-10"></div>
          <img 
            src={destination.heroImage} 
            alt={destination.name} 
            className="w-full h-full object-cover opacity-80 scale-105 transform motion-safe:animate-[pulse_20s_ease-in-out_infinite_alternate]"
          />
        </div>
        
        <div className="relative z-20 text-center px-6 w-full max-w-5xl mx-auto mt-20">
          <motion.span 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-amber-500 font-bold tracking-[0.4em] uppercase text-sm md:text-base mb-6 block"
          >
            {destination.state}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-6xl md:text-9xl font-bold mb-6 drop-shadow-2xl text-neutral-50 font-serif"
          >
            {destination.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl md:text-3xl font-light text-neutral-300 max-w-3xl mx-auto italic font-serif"
          >
            "{destination.tagline}"
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-6 mt-16"
          >
             <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-full flex gap-3 items-center shadow-[0_0_30px_rgba(245,158,11,0.1)] hover:border-amber-500/30 transition-colors">
                <span className="text-amber-500 font-bold tracking-wider text-xs md:text-sm uppercase">Best Time</span> 
                <span className="w-1 h-1 rounded-full bg-neutral-600"></span>
                <span className="text-neutral-200 text-sm md:text-base">{destination.bestTime}</span>
             </div>
             <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-full flex gap-3 items-center shadow-[0_0_30px_rgba(245,158,11,0.1)] hover:border-amber-500/30 transition-colors">
                <span className="text-amber-500 font-bold tracking-wider text-xs md:text-sm uppercase">Budget</span> 
                <span className="w-1 h-1 rounded-full bg-neutral-600"></span>
                <span className="text-neutral-200 text-sm md:text-base">{destination.estimatedBudget}</span>
             </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce"
        >
          <svg className="w-6 h-6 text-amber-500/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.section>

      {/* Main Content Layout */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        
        {/* Left Column (Content) */}
        <div className="lg:col-span-8 space-y-24">
          
          {/* Overview & History */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-neutral-50 font-serif flex items-center gap-6">
                <span className="w-16 h-px bg-amber-500/50"></span>
                The Experience
              </h2>
              <p className="text-neutral-300 leading-relaxed text-lg md:text-xl font-light">
                {destination.description}
              </p>
            </div>
            
            <div className="pl-6 border-l-2 border-amber-500/30 py-2">
              <h3 className="text-2xl font-bold mb-4 text-amber-500 font-serif">Historical Context</h3>
              <p className="text-neutral-400 leading-relaxed text-lg">
                {destination.history}
              </p>
            </div>
          </motion.div>

          {/* Curated Attractions */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-neutral-50 font-serif flex items-center gap-6">
              <span className="w-16 h-px bg-amber-500/50"></span>
              Iconic Landmarks
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {destination.topAttractions.map((place, idx) => (
                <div key={idx} className="p-8 bg-neutral-900/50 backdrop-blur-md border border-white/5 rounded-3xl hover:bg-neutral-800/50 hover:border-amber-500/30 transition-all duration-500 flex items-center gap-6 group shadow-lg">
                  <div className="w-14 h-14 rounded-full border border-amber-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 group-hover:text-black transition-colors duration-500">
                    <span className="text-amber-500 group-hover:text-black font-serif text-xl">{idx + 1}</span>
                  </div>
                  <h3 className="font-bold text-neutral-200 text-xl tracking-wide">{place}</h3>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Culture & Gastronomy */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="bg-gradient-to-br from-neutral-900 to-[#0A0A0A] border border-white/10 p-10 rounded-3xl relative overflow-hidden group hover:border-amber-500/40 transition-colors duration-500 shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-colors"></div>
              <h3 className="text-3xl font-bold mb-6 text-amber-500 font-serif">Culture</h3>
              <p className="text-neutral-400 leading-relaxed text-lg relative z-10">
                {destination.cultureHighlight}
              </p>
            </div>
            <div className="bg-gradient-to-br from-neutral-900 to-[#0A0A0A] border border-white/10 p-10 rounded-3xl relative overflow-hidden group hover:border-amber-500/40 transition-colors duration-500 shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-colors"></div>
              <h3 className="text-3xl font-bold mb-6 text-amber-500 font-serif">Gastronomy</h3>
              <p className="text-neutral-400 leading-relaxed text-lg relative z-10">
                {destination.foodHighlight}
              </p>
            </div>
          </motion.div>

          {/* Insider Travel Tips */}
          {destination.travelTips && destination.travelTips.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-10 text-neutral-50 font-serif flex items-center gap-6">
                <span className="w-16 h-px bg-amber-500/50"></span>
                Insider Tips
              </h2>
              <ul className="space-y-6">
                {destination.travelTips.map((tip, idx) => (
                  <li key={idx} className="flex gap-6 items-start p-6 bg-white/5 border border-white/5 rounded-2xl">
                    <div className="mt-1">
                      <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-neutral-300 text-lg leading-relaxed">{tip}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* FAQ */}
          {destination.faq && destination.faq.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="pb-10"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-10 text-neutral-50 font-serif flex items-center gap-6">
                <span className="w-16 h-px bg-amber-500/50"></span>
                Frequently Asked
              </h2>
              <div className="space-y-4">
                {destination.faq.map((item, idx) => (
                  <div key={idx} className="border border-white/10 rounded-2xl overflow-hidden bg-neutral-900/30">
                    <button 
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                      className="w-full text-left px-8 py-6 flex justify-between items-center hover:bg-white/5 transition-colors"
                    >
                      <span className="font-bold text-lg text-neutral-200">{item.question}</span>
                      <span className={`transform transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`}>
                        <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                    <AnimatePresence>
                      {activeFaq === idx && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-8 pb-6 text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </div>

        {/* Right Column (Sidebar CTA) */}
        <div className="lg:col-span-4 relative">
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="sticky top-32 bg-gradient-to-br from-[#0A0A0A] to-neutral-900 border border-amber-500/30 p-10 rounded-[2.5rem] text-center shadow-[0_0_50px_rgba(245,158,11,0.08)] overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            
            <h3 className="text-3xl font-bold text-neutral-50 mb-6 font-serif relative z-10">Curate Your Journey</h3>
            <p className="text-neutral-400 mb-10 leading-relaxed relative z-10">
              Allow our luxury concierges to design a bespoke itinerary for your ultimate {destination.name} experience.
            </p>
            
            <button className="w-full py-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold rounded-2xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] transform hover:-translate-y-1 uppercase tracking-widest text-sm mb-6 relative z-10">
              Consult Advisor
            </button>
            
            <div className="flex items-center justify-center gap-3 text-neutral-500 text-xs uppercase tracking-widest relative z-10">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Concierge Available 24/7
            </div>
          </motion.div>
        </div>

      </section>

      {/* Visual Story / Gallery */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5"
      >
        <div className="text-center mb-16">
          <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-sm flex items-center justify-center gap-6 mb-6">
            <span className="w-16 h-px bg-amber-500/50"></span>
            Visual Story
            <span className="w-16 h-px bg-amber-500/50"></span>
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-neutral-50 font-serif">Glimpses of {destination.name}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px] md:h-[800px]">
          {destination.galleryImages.slice(0, 4).map((img, i) => (
             <div 
               key={i} 
               className={`rounded-3xl overflow-hidden border border-white/5 relative group cursor-pointer ${
                 i === 0 ? 'md:col-span-2 md:row-span-2' : 
                 i === 1 ? 'md:col-span-2 md:row-span-1' : 
                 'md:col-span-1 md:row-span-1'
               }`}
             >
               <img 
                 src={img} 
                 alt={`${destination.name} gallery ${i}`} 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                 <span className="text-white font-serif text-xl tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500">View Image</span>
               </div>
             </div>
          ))}
        </div>
      </motion.section>

    </div>
  );
}
