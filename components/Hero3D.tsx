"use client";

import React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import MagneticButton from './MagneticButton';

const Scene3D = dynamic(() => import('./Scene3D'), { ssr: false });

export default function Hero3D() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0A0A0A]">
      {/* 3D Scene Area (z-0) */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0 opacity-100" id="spline-scene-container">
        <Scene3D />
      </motion.div>

      {/* Hero Content (z-10) */}
      <motion.div 
        style={{ y: y2, opacity }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16 pointer-events-auto"
      >
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="inline-block py-1 px-3 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 text-sm font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(245,158,11,0.15)] backdrop-blur-sm"
        >
          Premium Spiritual Tourism
        </motion.span>
        <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight drop-shadow-2xl">
          Explore <span className="text-amber-500">India</span> Like Never Before
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-md">
          Discover destinations, plan journeys, chat with an AI travel guide, and book personal rides through one immersive travel experience.
        </p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton>
            <Link href="/destinations/mathura" className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-[#0A0A0A] font-bold rounded-full transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] flex items-center justify-center gap-2 group">
              <span>Start Exploring</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-neutral-500 text-xs font-bold tracking-widest uppercase">Scroll to Discover</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-amber-500 to-transparent"
        ></motion.div>
      </motion.div>
    </section>
  );
}
