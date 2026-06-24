"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import InnerPageVideoBackground from '../../components/InnerPageVideoBackground';

const team = [
  {
    name: 'Aanya Sharma',
    role: 'Founder & Visionary',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bio: 'With over two decades of exploring India’s hidden gems, Aanya founded YatraVerse to redefine luxury travel with authentic cultural immersion.'
  },
  {
    name: 'Vikram Singh',
    role: 'Head of Experiences',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bio: 'Vikram’s royal lineage and deep-rooted connections grant YatraVerse guests exclusive access to India’s most private heritage sites.'
  },
  {
    name: 'Priya Patel',
    role: 'Lead Concierge',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bio: 'Dedicated to perfection, Priya ensures that every bespoke itinerary is executed flawlessly, anticipating needs before they arise.'
  }
];

export default function AboutPage() {
  return (
    <>
      <InnerPageVideoBackground />
      <div className="min-h-screen text-neutral-50 font-sans selection:bg-amber-500/30 relative z-10">

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative h-[80vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/40 to-[#0A0A0A] z-10"></div>
        </div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl text-neutral-50 font-serif leading-tight"
          >
            Reimagining Travel Through <span className="text-amber-500 italic">Meaningful Journeys</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-2xl font-light text-neutral-300 max-w-3xl mx-auto leading-relaxed"
          >
            Bridging the gap between unparalleled luxury and deep-rooted Indian heritage, culture, and spirituality.
          </motion.p>
        </div>
      </motion.section>

      {/* Our Story */}
      <section className="py-24 px-6 max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-sm flex items-center justify-center gap-6 mb-8">
            <span className="w-16 h-px bg-amber-500/50"></span>
            Our Story
            <span className="w-16 h-px bg-amber-500/50"></span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-50 font-serif mb-10">Born from a Reverence for India</h2>
          <p className="text-xl text-neutral-400 font-light leading-relaxed mb-6">
            YatraVerse was born out of a profound realization: modern luxury travel often isolates the traveler from the true heartbeat of the destination. We set out to change that paradigm.
          </p>
          <p className="text-xl text-neutral-400 font-light leading-relaxed">
            By meticulously weaving together India's rich tapestry of spirituality, royal history, and vibrant culture with world-class hospitality, we created a platform for the discerning traveler. Our mission is not just to show you India, but to let you feel its soul.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-16 px-6 max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-neutral-900/80 to-[#0A0A0A] border border-white/10 p-12 rounded-[2rem] shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-colors"></div>
            <h3 className="text-3xl font-bold mb-6 text-amber-500 font-serif">Our Mission</h3>
            <p className="text-neutral-300 leading-relaxed text-lg font-light">
              To curate transcendent travel experiences that seamlessly blend opulent luxury with authentic cultural immersion, ensuring every journey leaves a lasting imprint on the soul.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-bl from-neutral-900/80 to-[#0A0A0A] border border-white/10 p-12 rounded-[2rem] shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-colors"></div>
            <h3 className="text-3xl font-bold mb-6 text-amber-500 font-serif">Our Vision</h3>
            <p className="text-neutral-300 leading-relaxed text-lg font-light">
              To be the world's most trusted purveyor of luxury travel in India, recognized for our uncompromising standards, exclusive access, and deep respect for heritage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Travelers Choose YatraVerse */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-50 font-serif">The YatraVerse Difference</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Handpicked Experiences', desc: 'Every hotel, guide, and route is personally vetted by our experts.' },
            { title: 'Local Expertise', desc: 'Our deep-rooted local connections unlock doors that remain closed to others.' },
            { title: 'Authentic Journeys', desc: 'We prioritize genuine cultural encounters over highly commercialized tourist traps.' },
            { title: 'Luxury Planning', desc: 'From private jet charters to bespoke dietary menus, we handle every micro-detail.' },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white/5 border border-white/5 p-8 rounded-3xl hover:border-amber-500/30 transition-colors duration-500"
            >
              <h3 className="text-xl font-bold text-amber-500 mb-4 font-serif">{item.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 bg-neutral-900/30 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-50 font-serif">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {['Culture', 'Authenticity', 'Sustainability', 'Hospitality'].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative overflow-hidden rounded-2xl group aspect-square flex items-center justify-center border border-white/10 bg-[#0A0A0A]"
              >
                <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/10 transition-colors duration-500"></div>
                <h3 className="text-2xl font-bold text-neutral-300 group-hover:text-amber-500 tracking-wider uppercase font-serif transition-colors duration-500 z-10">
                  {value}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-50 font-serif">Meet the Curators</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group text-center"
            >
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-2 border-white/10 group-hover:border-amber-500/50 transition-colors duration-500 mb-6">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-50 font-serif mb-2">{member.name}</h3>
              <p className="text-amber-500 text-sm tracking-widest uppercase mb-4">{member.role}</p>
              <p className="text-neutral-400 font-light leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 px-6 border-t border-white/10 overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596760565866-e82200dc0f8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-neutral-50 mb-8 font-serif">Your Story Awaits</h2>
          <p className="text-xl md:text-2xl text-neutral-300 font-light mb-12">
            Let us design a journey that speaks to your soul.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/destinations/mathura" className="inline-block px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold uppercase tracking-widest text-sm rounded-full transition-all shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_50px_rgba(245,158,11,0.5)] transform hover:-translate-y-1">
              Explore Destinations
            </Link>
            <Link href="/experiences" className="inline-block px-10 py-5 bg-white/5 backdrop-blur-md border border-white/20 hover:bg-white/10 text-white font-bold uppercase tracking-widest text-sm rounded-full transition-all transform hover:-translate-y-1">
              Explore Experiences
            </Link>
          </div>
        </div>
      </section>

    </div>
    </>
  );
}
