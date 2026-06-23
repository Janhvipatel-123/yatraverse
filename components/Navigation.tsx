"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import MagneticButton from './MagneticButton';

export default function Navigation() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 px-6 py-4 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0A0A0A]/80 backdrop-blur-md border-b border-neutral-800 shadow-lg' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center transition-transform group-hover:scale-110">
            <span className="text-[#0A0A0A] font-bold text-sm leading-none">Y</span>
          </div>
          <span className="text-2xl font-semibold tracking-wider text-amber-500">
            Yatra<span className="text-neutral-100">Verse</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <NavGroup />
        </div>

        <MagneticButton>
          <button className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-[#0A0A0A] font-bold rounded-full transition-all shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] relative overflow-hidden group">
            <span className="relative z-10">Sign In</span>
          </button>
        </MagneticButton>
      </div>
    </motion.nav>
  );
}

function NavGroup() {
  const links = [
    { name: "Destinations", href: "/#destinations" },
    { name: "AI Guide", href: "/ai-guide" },
    { name: "Book a Ride", href: "/rides" },
    { name: "Gallery", href: "/#gallery" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link 
          key={link.name} 
          href={link.href} 
          className="relative text-neutral-200 hover:text-amber-500 transition-colors group"
        >
          {link.name}
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      ))}
    </>
  );
}
