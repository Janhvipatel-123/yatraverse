"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Hero3D from '../components/Hero3D';
import TiltCard from '../components/TiltCard';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-neutral-50 font-sans selection:bg-amber-500/30">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero3D />

      {/* Featured Destinations */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        id="destinations" 
        className="py-24 px-6 relative z-10 bg-[#0A0A0A]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-amber-500 font-bold tracking-widest uppercase text-sm block mb-2">Curated Journeys</span>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-50">Featured Destinations</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Mathura Card */}
            <TiltCard className="h-[480px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] to-blue-950/40 group-hover:scale-110 transition-transform duration-700">
                 <div className="absolute inset-0 bg-[url('/images/destinations/mathura.jpg')] bg-cover bg-center opacity-70 group-hover:opacity-90"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <h3 className="text-3xl font-bold text-neutral-50 mb-2">Mathura</h3>
                <p className="text-neutral-400 text-sm mb-4 line-clamp-2">The birthplace of Lord Krishna.</p>
                <Link href="/destinations/mathura" className="block w-full py-3 rounded-xl bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500 hover:text-[#0A0A0A] text-amber-500 font-bold text-sm tracking-wide text-center transition-all">
                  Explore Mathura
                </Link>
              </div>
            </TiltCard>

            {/* Vrindavan Card */}
            <TiltCard className="h-[480px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] to-emerald-950/40 group-hover:scale-110 transition-transform duration-700">
                 <div className="absolute inset-0 bg-[url('/images/destinations/vrindavan.jpg')] bg-cover bg-center opacity-70 group-hover:opacity-90"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <h3 className="text-3xl font-bold text-neutral-50 mb-2">Vrindavan</h3>
                <p className="text-neutral-400 text-sm mb-4 line-clamp-2">The sacred town of divine love and devotion.</p>
                <Link href="/destinations/vrindavan" className="block w-full py-3 rounded-xl bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500 hover:text-[#0A0A0A] text-amber-500 font-bold text-sm tracking-wide text-center transition-all">
                  Explore Vrindavan
                </Link>
              </div>
            </TiltCard>

            {/* Agra Card */}
            <TiltCard className="h-[480px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] to-amber-950/40 group-hover:scale-110 transition-transform duration-700">
                 <div className="absolute inset-0 bg-[url('/images/destinations/agra.jpg')] bg-cover bg-center opacity-70 group-hover:opacity-90"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <h3 className="text-3xl font-bold text-neutral-50 mb-2">Agra</h3>
                <p className="text-neutral-400 text-sm mb-4 line-clamp-2">City of the iconic Taj Mahal.</p>
                <button className="w-full py-3 rounded-xl bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500 hover:text-[#0A0A0A] text-amber-500 font-bold text-sm tracking-wide transition-all">
                  Explore Agra
                </button>
              </div>
            </TiltCard>

            {/* Jaipur Card */}
            <TiltCard className="h-[480px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] to-rose-950/40 group-hover:scale-110 transition-transform duration-700">
                 <div className="absolute inset-0 bg-[url('/images/destinations/jaipur.jpg')] bg-cover bg-center opacity-70 group-hover:opacity-90"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <h3 className="text-3xl font-bold text-neutral-50 mb-2">Jaipur</h3>
                <p className="text-neutral-400 text-sm mb-4 line-clamp-2">The magnificent Pink City.</p>
                <button className="w-full py-3 rounded-xl bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500 hover:text-[#0A0A0A] text-amber-500 font-bold text-sm tracking-wide transition-all">
                  Explore Jaipur
                </button>
              </div>
            </TiltCard>
          </div>
        </div>
      </motion.section>

      {/* Highlights Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        id="highlights" 
        className="py-24 px-6 bg-neutral-950 border-y border-neutral-900/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-bold tracking-widest uppercase text-sm block mb-2">Must Visit Places</span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-50">Mathura & Vrindavan Highlights</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Shri Krishna Janmabhoomi', image: 'janmabhoomi.jpg' },
              { title: 'Dwarkadhish Temple', image: 'dwarkadhish.jpg' },
              { title: 'Vishram Ghat', image: 'vishram-ghat.jpg' },
              { title: 'Prem Mandir', image: 'prem-mandir.jpg' },
              { title: 'Banke Bihari Temple', image: 'banke-bihari.jpg' },
              { title: 'ISKCON Vrindavan', image: 'iskcon-vrindavan.jpg' },
            ].map(place => (
              <TiltCard key={place.title} className="p-4">
                <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] to-amber-950/40 group-hover:scale-110 transition-transform duration-700">
                    <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: `url('/images/highlights/${place.image}')` }}></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent"></div>
                </div>
                <h3 className="text-xl font-bold text-neutral-50 mb-2">{place.title}</h3>
                <p className="text-neutral-400 text-sm mb-4">Experience the divine beauty and spiritual essence of {place.title}.</p>
                <button className="text-amber-500 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </TiltCard>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Ride Booking Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        id="rides" 
        className="py-24 px-6 relative z-10 bg-[#0A0A0A]"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <span className="text-amber-500 font-bold tracking-widest uppercase text-sm block mb-2">Seamless Travel</span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-50 mb-6">Book Your Premium Ride</h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8">
              Travel comfortably between temples, hotels, and stations. Choose from E-Rickshaws for narrow lanes or Luxury cabs for longer journeys.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
               <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-xl"><h4 className="font-bold text-neutral-200">E-Rickshaw</h4><p className="text-neutral-500 text-xs">Local</p></div>
               <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-xl"><h4 className="font-bold text-neutral-200">Sedan</h4><p className="text-neutral-500 text-xs">City</p></div>
            </div>
            <Link href="/rides" className="inline-block px-8 py-4 bg-amber-500 hover:bg-amber-400 text-[#0A0A0A] font-bold rounded-full transition-all shadow-lg">
              Book a Ride Now
            </Link>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 backdrop-blur-md">
               <h3 className="text-2xl font-bold text-neutral-50 mb-6">Quick Estimate</h3>
               <div className="space-y-4">
                 <input type="text" placeholder="Pickup Location" className="w-full bg-[#0A0A0A] border border-neutral-800 rounded-xl py-3 px-4 text-neutral-200 focus:outline-none focus:border-amber-500/50" />
                 <input type="text" placeholder="Dropoff Location" className="w-full bg-[#0A0A0A] border border-neutral-800 rounded-xl py-3 px-4 text-neutral-200 focus:outline-none focus:border-amber-500/50" />
                 <Link href="/rides" className="block w-full py-4 text-center bg-neutral-800 hover:bg-neutral-700 text-neutral-50 font-bold rounded-xl transition-colors">
                   See Fares
                 </Link>
               </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* AI Assistant Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        id="ai-guide" 
        className="py-24 px-6 bg-neutral-950 border-y border-neutral-900/50"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2">
            <span className="text-amber-500 font-bold tracking-widest uppercase text-sm block mb-2">Smart Companion</span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-50 mb-6">Meet Yatra AI</h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8">
              Your personal 24/7 spiritual and cultural travel guide. Ask anything from temple timings to historical facts, and plan your entire itinerary seamlessly.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link href="/ai-guide" className="inline-block px-8 py-4 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-[#0A0A0A] font-bold rounded-full transition-all shadow-lg">
                Chat with AI
              </Link>
            </motion.div>
          </div>
          <div className="lg:w-1/2 w-full">
             <div className="bg-[#0A0A0A] border border-neutral-800 rounded-3xl p-6 shadow-2xl">
               <div className="flex gap-4 mb-4">
                  <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-[#0A0A0A] font-bold text-xs">Y</div>
                  <div className="bg-neutral-900 p-3 rounded-2xl rounded-tl-none border border-neutral-800 text-sm text-neutral-300">Namaste! How can I assist you with your Mathura trip today?</div>
               </div>
             </div>
          </div>
        </div>
      </motion.section>

      {/* Photo Gallery */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        id="gallery" 
        className="py-24 px-6 bg-[#0A0A0A]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-50 mb-4">Glimpses of Divinity</h2>
            <p className="text-neutral-400">Experience the magic before you even arrive.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
             <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-amber-900/40 to-[#0A0A0A] rounded-2xl border border-neutral-800 flex items-end p-6">
                <span className="text-xl font-bold text-amber-500">Temple Views</span>
             </div>
             <div className="bg-gradient-to-br from-blue-900/40 to-[#0A0A0A] rounded-2xl border border-neutral-800 flex items-end p-6">
                <span className="text-lg font-bold text-blue-400">Ghats</span>
             </div>
             <div className="bg-gradient-to-br from-orange-900/40 to-[#0A0A0A] rounded-2xl border border-neutral-800 flex items-end p-6">
                <span className="text-lg font-bold text-orange-400">Evening Aarti</span>
             </div>
             <div className="bg-gradient-to-br from-emerald-900/40 to-[#0A0A0A] rounded-2xl border border-neutral-800 flex items-end p-6">
                <span className="text-lg font-bold text-emerald-400">Heritage Streets</span>
             </div>
             <div className="bg-gradient-to-br from-purple-900/40 to-[#0A0A0A] rounded-2xl border border-neutral-800 flex items-end p-6">
                <span className="text-lg font-bold text-purple-400">Night Lights</span>
             </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-900/50 pt-20 pb-10 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-600/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center">
                  <span className="text-[#0A0A0A] font-bold text-sm leading-none">Y</span>
                </div>
                <span className="text-2xl font-semibold tracking-wider text-amber-500">
                  Yatra<span className="text-neutral-100">Verse</span>
                </span>
              </div>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                Discover the divine, embrace the culture, and travel in absolute luxury. Your premium gateway to spiritual and historical India.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-amber-500 hover:border-amber-500/50 transition-colors">
                  <span className="text-xs font-bold">IG</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-amber-500 hover:border-amber-500/50 transition-colors">
                  <span className="text-xs font-bold">FB</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-amber-500 hover:border-amber-500/50 transition-colors">
                  <span className="text-xs font-bold">X</span>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-neutral-50 font-bold mb-6 tracking-wide uppercase text-sm">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-neutral-400 hover:text-amber-500 transition-colors text-sm">Home</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-amber-500 transition-colors text-sm">About Us</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-amber-500 transition-colors text-sm">Travel Blog</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-amber-500 transition-colors text-sm">AI Assistant</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-neutral-50 font-bold mb-6 tracking-wide uppercase text-sm">Destinations</h4>
              <ul className="space-y-4">
                <li><Link href="/destinations/mathura" className="text-neutral-400 hover:text-amber-500 transition-colors text-sm">Mathura</Link></li>
                <li><a href="#" className="text-neutral-400 hover:text-amber-500 transition-colors text-sm">Vrindavan</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-amber-500 transition-colors text-sm">Agra</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-amber-500 transition-colors text-sm">Jaipur</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-neutral-50 font-bold mb-6 tracking-wide uppercase text-sm">Newsletter</h4>
              <p className="text-neutral-500 text-sm mb-4">Subscribe for curated itineraries and exclusive travel offers.</p>
              <div className="flex bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden focus-within:border-amber-500/50 transition-colors">
                <input type="email" placeholder="Your email address" className="bg-transparent w-full px-4 py-3 text-sm text-neutral-200 focus:outline-none" />
                <button className="bg-amber-500 text-[#0A0A0A] px-4 font-bold hover:bg-amber-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-600 text-sm">
              &copy; {new Date().getFullYear()} YatraVerse. Crafted for the discerning traveler.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-neutral-600 hover:text-neutral-300 text-xs transition-colors">Privacy Policy</a>
              <a href="#" className="text-neutral-600 hover:text-neutral-300 text-xs transition-colors">Terms of Service</a>
              <a href="#" className="text-neutral-600 hover:text-neutral-300 text-xs transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
