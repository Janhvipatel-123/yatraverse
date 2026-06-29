"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Hero3D from '../components/Hero3D';
import TiltCard from '../components/ui/TiltCard';

type PackageType = {
  name: string;
  duration: string;
  price: string;
  highlights: string[];
  img: string;
};

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState<PackageType | null>(null);

  const getItinerary = (duration: string) => {
    const days = parseInt(duration) || 3;
    return Array.from({length: days}).map((_, i) => ({
      day: `Day ${i + 1}`,
      title: i === 0 ? "Arrival & Royal Welcome" : i === days - 1 ? "Departure with Memories" : "Exclusive Sightseeing & Leisure",
      desc: "Enjoy premium transfers, curated luxury experiences, and 5-star hospitality tailored to your preferences."
    }));
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-neutral-50 font-sans selection:bg-amber-500/30">

      {/* Hero Section */}
      <Hero3D />


      {/* Featured Destinations */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        id="destinations" 
        className="py-32 px-6 relative z-10 overflow-hidden bg-black"
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-cover"
        >
          <source src="/videos/destinations-background.mp4" type="video/mp4" />
        </video>
        
        {/* Premium Overlays */}
        {/* Base dark tint to ensure text readability */}
        <div className="absolute inset-0 z-10 bg-black/50 pointer-events-none"></div>
        {/* Top/bottom gradient blending into page bg */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A] pointer-events-none"></div>
        {/* Subtle gold tint */}
        <div className="absolute inset-0 z-10 bg-amber-500/5 mix-blend-overlay pointer-events-none"></div>
        {/* Soft vignette */}
        <div className="absolute inset-0 z-10 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] pointer-events-none"></div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-amber-600/10 rounded-full blur-[150px] pointer-events-none z-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-amber-500 font-bold tracking-widest uppercase text-sm block mb-4 flex items-center gap-4">
                <span className="w-12 h-px bg-amber-500/50"></span>
                Curated Journeys
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-50 tracking-tight font-serif">Featured Destinations</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-50">
            {/* Mathura Card */}
            <Link href="/destinations/mathura" className="block relative z-50 cursor-pointer">
              <TiltCard className="h-[500px] rounded-2xl overflow-hidden border border-white/5 bg-white/5 backdrop-blur-md group hover:border-amber-500/30 transition-all duration-500 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-700 pointer-events-none overflow-hidden">
                   <Image src="/images/destinations/mathura.jpg" alt="Mathura" fill className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-[#0A0A0A]/40 to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-10 h-10 rounded-full border border-amber-500/30 flex items-center justify-center mb-6 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 pointer-events-none">
                    <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                  <h3 className="text-3xl font-bold text-neutral-50 mb-2 font-serif tracking-wide pointer-events-none">Mathura</h3>
                  <p className="text-neutral-400 text-sm mb-6 line-clamp-2 pointer-events-none">The sacred birthplace of Lord Krishna, radiating eternal divinity.</p>
                  <div className="block w-full py-4 rounded-xl bg-amber-500/10 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-[#0A0A0A] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] text-amber-500 font-bold text-sm tracking-widest uppercase text-center transition-all duration-300 backdrop-blur-sm pointer-events-none">
                    Explore
                  </div>
                </div>
              </TiltCard>
            </Link>

            {/* Vrindavan Card */}
            <Link href="/destinations/vrindavan" className="block relative z-50 cursor-pointer">
              <TiltCard className="h-[500px] rounded-2xl overflow-hidden border border-white/5 bg-white/5 backdrop-blur-md group hover:border-amber-500/30 transition-all duration-500 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-700 pointer-events-none overflow-hidden">
                   <Image src="/images/destinations/vrindavan.jpg" alt="Vrindavan" fill className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-[#0A0A0A]/40 to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-10 h-10 rounded-full border border-amber-500/30 flex items-center justify-center mb-6 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 pointer-events-none">
                    <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                  <h3 className="text-3xl font-bold text-neutral-50 mb-2 font-serif tracking-wide pointer-events-none">Vrindavan</h3>
                  <p className="text-neutral-400 text-sm mb-6 line-clamp-2 pointer-events-none">The transcendent town of divine love and supreme devotion.</p>
                  <div className="block w-full py-4 rounded-xl bg-amber-500/10 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-[#0A0A0A] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] text-amber-500 font-bold text-sm tracking-widest uppercase text-center transition-all duration-300 backdrop-blur-sm pointer-events-none">
                    Explore
                  </div>
                </div>
              </TiltCard>
            </Link>

            {/* Agra Card */}
            <Link href="/destinations/agra" className="block relative z-50 cursor-pointer">
              <TiltCard className="h-[500px] rounded-2xl overflow-hidden border border-white/5 bg-white/5 backdrop-blur-md group hover:border-amber-500/30 transition-all duration-500 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-700 pointer-events-none overflow-hidden">
                   <Image src="/images/destinations/agra.jpg" alt="Agra" fill className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-[#0A0A0A]/40 to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-10 h-10 rounded-full border border-amber-500/30 flex items-center justify-center mb-6 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 pointer-events-none">
                    <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                  <h3 className="text-3xl font-bold text-neutral-50 mb-2 font-serif tracking-wide pointer-events-none">Agra</h3>
                  <p className="text-neutral-400 text-sm mb-6 line-clamp-2 pointer-events-none">Home to architectural marvels and the iconic symbol of love.</p>
                  <div className="block w-full py-4 rounded-xl bg-amber-500/10 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-[#0A0A0A] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] text-amber-500 font-bold text-sm tracking-widest uppercase text-center transition-all duration-300 backdrop-blur-sm pointer-events-none">
                    Explore
                  </div>
                </div>
              </TiltCard>
            </Link>

            {/* Jaipur Card */}
            <Link href="/destinations/jaipur" className="block relative z-50 cursor-pointer">
              <TiltCard className="h-[500px] rounded-2xl overflow-hidden border border-white/5 bg-white/5 backdrop-blur-md group hover:border-amber-500/30 transition-all duration-500 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-700 pointer-events-none overflow-hidden">
                   <Image src="/images/destinations/jaipur.jpg" alt="Jaipur" fill className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-[#0A0A0A]/40 to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-10 h-10 rounded-full border border-amber-500/30 flex items-center justify-center mb-6 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 pointer-events-none">
                    <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                  <h3 className="text-3xl font-bold text-neutral-50 mb-2 font-serif tracking-wide pointer-events-none">Jaipur</h3>
                  <p className="text-neutral-400 text-sm mb-6 line-clamp-2 pointer-events-none">The regal Pink City, echoing tales of royal heritage.</p>
                  <div className="block w-full py-4 rounded-xl bg-amber-500/10 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-[#0A0A0A] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] text-amber-500 font-bold text-sm tracking-widest uppercase text-center transition-all duration-300 backdrop-blur-sm pointer-events-none">
                    Explore
                  </div>
                </div>
              </TiltCard>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Luxury Travel Experiences */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        id="experiences" 
        className="py-32 px-6 bg-neutral-950 relative border-y border-neutral-900/50"
      >
        <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-amber-900/10 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-amber-500 font-bold tracking-widest uppercase text-sm block mb-4 flex items-center justify-center gap-4">
              <span className="w-12 h-px bg-amber-500/50"></span>
              Elevated Journeys
              <span className="w-12 h-px bg-amber-500/50"></span>
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-50 tracking-tight font-serif mb-6">Luxury Travel Experiences</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">Immerse yourself in unparalleled comfort and exclusivity as you explore the spiritual heartland of India.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Helicopter Darshan', desc: 'Soar above the sacred landscapes and bypass crowds with our exclusive aerial pilgrimage services.', icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8' },
              { title: 'Heritage Palace Stays', desc: 'Rest in meticulously restored centuries-old palaces offering world-class amenities and royal hospitality.', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
              { title: 'Private Guided Tours', desc: 'Discover hidden spiritual gems accompanied by expert historians and revered local spiritual guides.', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
            ].map((exp, idx) => (
              <div key={idx} className="group relative p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-amber-500/50 transition-colors duration-500">
                <div className="bg-[#0A0A0A] rounded-3xl p-10 h-full relative overflow-hidden backdrop-blur-xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-colors duration-700"></div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neutral-900 to-black border border-white/5 flex items-center justify-center mb-8 shadow-2xl group-hover:border-amber-500/30 transition-all duration-500">
                    <svg className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={exp.icon} /></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-50 mb-4 font-serif">{exp.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose YatraVerse */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-32 px-6 relative z-10 bg-[#0A0A0A]"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-amber-500/20 blur-[100px] rounded-full"></div>
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <Image src="/images/destinations/vrindavan.jpg" alt="Luxury Travel" fill className="object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0A] via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-10 -right-4 lg:-right-10 bg-neutral-900/90 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-neutral-900 bg-amber-500/20 flex items-center justify-center backdrop-blur-md">
                      <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-white font-bold text-lg mb-1">5-Star Rated</p>
              <p className="text-neutral-400 text-sm">By discerning travelers globally</p>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <span className="text-amber-500 font-bold tracking-widest uppercase text-sm block mb-4 flex items-center gap-4">
              <span className="w-12 h-px bg-amber-500/50"></span>
              The YatraVerse Difference
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-50 mb-8 font-serif tracking-tight">Redefining Spiritual Pilgrimage</h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-10">
              We blend ancient traditions with modern luxury. Every detail of your journey is meticulously crafted to provide a seamless, transformative, and extraordinarily comfortable experience.
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'Uncompromised Luxury', desc: 'From chauffeured sedans to 5-star accommodations.' },
                { title: 'Deep Spiritual Connection', desc: 'Exclusive access and VIP darshans at sacred sites.' },
                { title: 'AI-Powered Personalization', desc: 'Dynamic itineraries adapted to your preferences in real-time.' }
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-full border border-amber-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/10 transition-colors duration-300">
                    <span className="text-amber-500 font-serif text-xl">0{idx + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-neutral-50 mb-2">{feature.title}</h4>
                    <p className="text-neutral-400">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Premium Travel Packages */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        id="packages" 
        className="py-32 px-6 bg-[#0A0A0A] relative z-10"
      >
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
            <div>
              <span className="text-amber-500 font-bold tracking-widest uppercase text-sm block mb-4 flex items-center gap-4">
                <span className="w-12 h-px bg-amber-500/50"></span>
                Exclusive Journeys
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-50 font-serif tracking-tight">Premium Travel Packages</h2>
            </div>
            <button className="px-8 py-4 border border-amber-500/30 text-amber-500 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-amber-500 hover:text-black transition-colors backdrop-blur-md self-start md:self-auto shadow-[0_0_20px_rgba(245,158,11,0.1)]">
              View All Packages
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: 'Kashmir Luxury Escape', 
                duration: '6 Days • 5 Nights', 
                price: '₹45,000', 
                highlights: ['Houseboat Stay', 'Shikara Ride', 'Gulmarg Gondola'], 
                img: '/images/packages/kashmir.jpg' 
              },
              { 
                name: 'Royal Rajasthan', 
                duration: '8 Days • 7 Nights', 
                price: '₹65,000', 
                highlights: ['Palace Stay', 'Desert Safari', 'Private Guide'], 
                img: '/images/packages/rajasthan.jpg' 
              },
              { 
                name: 'Spiritual Varanasi', 
                duration: '4 Days • 3 Nights', 
                price: '₹28,000', 
                highlights: ['VIP Ganga Aarti', 'Sarnath Tour', 'Boat Ride'], 
                img: '/images/destinations/varanasi.jpg'
              },
              { 
                name: 'Kerala Backwaters', 
                duration: '6 Days / 5 Nights', 
                price: '₹85,000', 
                highlights: ['Luxury Kettuvallam', 'Ayurveda Spa', 'Tea Estates'], 
                img: '/images/destinations/vrindavan.jpg' 
              },
              { 
                name: 'Goa Beach Retreat', 
                duration: '4 Days / 3 Nights', 
                price: '₹60,000', 
                highlights: ['Private Villa', 'Yacht Charter', 'Heritage Walk'], 
                img: '/images/destinations/mathura.jpg' 
              },
              { 
                name: 'Ladakh Adventure', 
                duration: '8 Days / 7 Nights', 
                price: '₹1,10,000', 
                highlights: ['Pangong Glamping', 'Monastery Tour', 'Oxygen Support'], 
                img: '/images/destinations/agra.jpg' 
              }
            ].map((pkg, idx) => (
              <TiltCard key={idx} tiltIntensity={12} className="h-full">
                <div className="group rounded-3xl overflow-hidden bg-white/5 border border-white/5 hover:border-amber-500/30 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative backdrop-blur-md h-full flex flex-col">
                  <div className="h-64 overflow-hidden relative shrink-0">
                    <Image src={pkg.img} alt={pkg.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                      <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">{pkg.duration}</span>
                    </div>
                    <div className="absolute bottom-6 left-6 z-20 pr-6">
                      <h3 className="text-3xl font-bold text-white font-serif drop-shadow-md">{pkg.name}</h3>
                    </div>
                  </div>
                  <div className="p-8 bg-gradient-to-b from-[#0A0A0A]/50 to-[#0A0A0A] relative flex-grow flex flex-col">
                    <div className="absolute -top-10 right-6 z-30 bg-amber-500 text-black px-4 py-3 rounded-2xl font-bold shadow-xl border border-amber-400">
                      <span className="text-xs uppercase tracking-wider block opacity-80">From</span>
                      <span className="text-xl">{pkg.price}</span>
                    </div>
                    <div className="space-y-4 mb-8 pt-2 flex-grow">
                      {pkg.highlights.map((hlt, i) => (
                        <div key={i} className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shrink-0">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                          </div>
                          <span className="text-neutral-300 font-medium">{hlt}</span>
                        </div>
                      ))}
                    </div>
                    <button 
                      onClick={() => setSelectedPackage(pkg)}
                      className="w-full py-4 rounded-xl bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500 hover:text-black hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] text-amber-500 font-bold text-sm tracking-widest uppercase transition-all duration-300 relative z-30"
                    >
                      View Itinerary
                    </button>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-32 px-6 bg-neutral-950 border-y border-neutral-900/50 relative overflow-hidden"
      >
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-amber-600/5 blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-amber-500 font-bold tracking-widest uppercase text-sm block mb-4 flex items-center justify-center gap-4">
              <span className="w-12 h-px bg-amber-500/50"></span>
              Client Stories
              <span className="w-12 h-px bg-amber-500/50"></span>
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-50 font-serif tracking-tight">Voices of the Enlightened</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Aarav Singhania', role: 'Business Executive', text: 'YatraVerse transformed my trip to Vrindavan. The VIP access to Banke Bihari temple and the seamless luxury transfers made the spiritual experience profoundly peaceful, free from any logistical stress.' },
              { name: 'Priya Desai', role: 'Global Traveler', text: 'I have traveled the world, but the meticulous attention to detail YatraVerse provided during our heritage palace stay in Mathura was unparalleled. A truly majestic and divine journey.' }
            ].map((testimonial, idx) => (
              <TiltCard key={idx} tiltIntensity={10} className="h-full">
                <div className="bg-[#0A0A0A] border border-white/5 p-10 rounded-3xl relative hover:border-amber-500/30 transition-colors duration-500 h-full">
                  <div className="absolute -top-6 left-10 text-6xl text-amber-500/20 font-serif">&quot;</div>
                  <div className="flex text-amber-500 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="text-neutral-300 text-lg leading-relaxed mb-8 relative z-10 italic">&quot;{testimonial.text}&quot;</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 shrink-0"></div>
                    <div>
                      <h5 className="text-white font-bold">{testimonial.name}</h5>
                      <p className="text-neutral-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-32 px-6 bg-[#0A0A0A] relative flex justify-center"
      >
        <div className="max-w-5xl w-full relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-400 blur-[80px] opacity-20 rounded-full"></div>
          <div className="relative bg-gradient-to-br from-neutral-900 to-black border border-amber-500/20 rounded-[3rem] p-16 md:p-24 text-center overflow-hidden shadow-[0_0_100px_rgba(245,158,11,0.1)]">
            <h2 className="text-4xl md:text-6xl font-bold text-white font-serif mb-6 relative z-10">Ready for the Ultimate Pilgrimage?</h2>
            <p className="text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 relative z-10">
              Begin your divine journey with YatraVerse. Experience the perfect harmony of spiritual awakening and uncompromised luxury.
            </p>
            <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold rounded-full text-lg shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all transform hover:scale-105 uppercase tracking-widest">
                Plan Your Journey
              </button>
              <button className="px-10 py-5 bg-transparent border border-white/20 hover:border-white/50 text-white font-bold rounded-full text-lg transition-all transform hover:scale-105 uppercase tracking-widest backdrop-blur-md">
                Consult Advisor
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md" 
            onClick={() => setSelectedPackage(null)}
          ></div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-[#0A0A0A] border border-amber-500/30 w-full max-w-4xl rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(245,158,11,0.15)] flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="relative h-48 md:h-64 shrink-0">
              <Image 
                src={selectedPackage.img} 
                alt={selectedPackage.name} 
                fill 
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent"></div>
              
              <button 
                onClick={() => setSelectedPackage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-amber-500 hover:text-black text-white rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 hover:border-amber-500 transition-all z-10"
              >
                ✕
              </button>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">{selectedPackage.name}</h2>
                    <div className="flex items-center gap-4 text-amber-500 text-sm font-medium tracking-wider uppercase">
                      <span>{selectedPackage.duration}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500/50"></span>
                      <span>{selectedPackage.price}</span>
                    </div>
                  </div>
                  <Link 
                    href={`/contact?interest=${encodeURIComponent(selectedPackage.name)}`}
                    className="px-8 py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold uppercase tracking-widest text-sm rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all shrink-0"
                  >
                    Book This Package
                  </Link>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-grow overflow-y-auto p-6 md:p-8 custom-scrollbar">
              <div className="grid md:grid-cols-3 gap-8">
                
                {/* Left Column - Itinerary */}
                <div className="md:col-span-2 space-y-8">
                  <div>
                    <h3 className="text-xl font-serif text-white border-b border-white/10 pb-4 mb-6">Day-wise Itinerary</h3>
                    <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[15px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-amber-500/50 before:to-transparent">
                      {getItinerary(selectedPackage.duration).map((day, idx) => (
                        <div key={idx} className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                          {/* Timeline dot */}
                          <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-[#0A0A0A] bg-amber-500 absolute left-0 md:left-1/2 -translate-y-1 -translate-x-[5px] md:-translate-x-1/2 shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
                          
                          <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] pl-4 md:pl-0">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm group-hover:border-amber-500/30 transition-colors">
                              <span className="text-amber-500 font-bold text-sm tracking-widest uppercase mb-1 block">{day.day}</span>
                              <h4 className="text-white font-medium mb-2">{day.title}</h4>
                              <p className="text-neutral-400 text-sm leading-relaxed">{day.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Inclusions */}
                <div className="space-y-8">
                  <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6">
                    <h3 className="text-lg font-serif text-white mb-6">Included Experiences</h3>
                    <ul className="space-y-4">
                      {selectedPackage.highlights.map((hlt: string, i: number) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-neutral-300 text-sm leading-relaxed">{hlt}</span>
                        </li>
                      ))}
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-neutral-300 text-sm leading-relaxed">Luxury Stays & Transfers</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-neutral-300 text-sm leading-relaxed">Dedicated Concierge</span>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}

    </div>
  );
}
