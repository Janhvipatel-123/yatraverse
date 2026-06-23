"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10 px-6 relative overflow-hidden z-50">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 group mb-6 inline-block">
              <span className="text-3xl font-bold tracking-widest uppercase font-serif text-amber-500">
                Yatra<span className="text-white font-light">Verse</span>
              </span>
            </Link>
            <p className="text-neutral-400 font-light leading-relaxed mb-8 pr-4">
              Redefining luxury travel in India. We curate transcendent, meaningful journeys that seamlessly blend opulent luxury with authentic cultural immersion.
            </p>
            <div className="flex gap-4">
              {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-amber-500 hover:border-amber-500/50 transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current" style={{ WebkitMask: 'url(https://unpkg.com/lucide-static@0.321.0/icons/globe.svg) center/cover' }}></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-serif tracking-widest uppercase mb-6 text-sm">Quick Links</h4>
            <ul className="space-y-4 text-neutral-400 font-light">
              <li><Link href="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
              <li><Link href="/ai-guide" className="hover:text-amber-500 transition-colors">AI Travel Guide</Link></li>
              <li><Link href="/rides" className="hover:text-amber-500 transition-colors">Book a Ride</Link></li>
              <li><Link href="/contact" className="hover:text-amber-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Destinations & Experiences */}
          <div className="lg:col-span-3 flex flex-col gap-8 sm:flex-row sm:justify-between lg:block lg:space-y-8 lg:gap-0">
            <div>
              <h4 className="text-white font-serif tracking-widest uppercase mb-6 text-sm">Destinations</h4>
              <ul className="space-y-4 text-neutral-400 font-light">
                <li><Link href="/destinations/mathura" className="hover:text-amber-500 transition-colors">Mathura</Link></li>
                <li><Link href="/destinations/vrindavan" className="hover:text-amber-500 transition-colors">Vrindavan</Link></li>
                <li><Link href="/destinations/agra" className="hover:text-amber-500 transition-colors">Agra</Link></li>
                <li><Link href="/destinations/jaipur" className="hover:text-amber-500 transition-colors">Jaipur</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-3">
             <h4 className="text-white font-serif tracking-widest uppercase mb-6 text-sm">Experiences</h4>
             <ul className="space-y-4 text-neutral-400 font-light">
               <li><Link href="/experiences" className="hover:text-amber-500 transition-colors">Spiritual Tours</Link></li>
               <li><Link href="/experiences" className="hover:text-amber-500 transition-colors">Heritage Walks</Link></li>
               <li><Link href="/experiences" className="hover:text-amber-500 transition-colors">Food Trails</Link></li>
               <li><Link href="/experiences" className="hover:text-amber-500 transition-colors">Photography Tours</Link></li>
               <li><Link href="/experiences" className="hover:text-amber-500 transition-colors">Luxury Experiences</Link></li>
             </ul>
          </div>

        </div>

        {/* Contact Strip */}
        <div className="border-t border-b border-white/5 py-8 mb-8 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-3 text-neutral-400">
             <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
             </svg>
             <span className="font-light tracking-wide text-sm">journeys@yatraverse.com</span>
           </div>
           <div className="flex items-center gap-3 text-neutral-400">
             <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
             </svg>
             <span className="font-light tracking-wide text-sm">+91 98765 43210</span>
           </div>
           <div className="flex items-center gap-3 text-neutral-400 text-center md:text-left">
             <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
             </svg>
             <span className="font-light tracking-wide text-sm">Mathura, Uttar Pradesh, India</span>
           </div>
        </div>

        {/* Copyright */}
        <div className="text-center flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-500 text-xs tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} YatraVerse. Crafted for the discerning traveler.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-amber-500 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-amber-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
