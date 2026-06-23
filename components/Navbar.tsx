"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const links = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/#destinations" },
    { name: "Experiences", href: "/experiences" },
    { name: "AI Guide", href: "/ai-guide" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return false; // Hard to track hash reliably here without IntersectionObserver
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-[100] px-6 py-4 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/50' 
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group relative z-[110]">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center transition-transform duration-500 group-hover:rotate-180 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
              <span className="text-[#0A0A0A] font-bold text-lg leading-none transform group-hover:-rotate-180 transition-transform duration-500">Y</span>
            </div>
            <span className="text-2xl font-bold tracking-widest uppercase font-serif text-amber-500">
              Yatra<span className="text-white font-light">Verse</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-[0.2em] uppercase">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`relative py-2 transition-colors duration-300 group ${isActive(link.href) ? 'text-amber-500' : 'text-neutral-300 hover:text-white'}`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-amber-500 transition-all duration-300 ${isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
          </div>

          <div className="hidden lg:block relative z-[110]">
            <MagneticButton>
              <Link href="/contact" className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-sm tracking-widest uppercase rounded-full transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] block">
                Plan My Journey
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-[110] p-2 text-amber-500 focus:outline-none"
          >
            <div className="w-6 flex flex-col gap-1.5 items-end">
              <motion.span 
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} 
                className="w-full h-0.5 bg-amber-500 block origin-center transition-all"
              ></motion.span>
              <motion.span 
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }} 
                className="w-4 h-0.5 bg-amber-500 block transition-all"
              ></motion.span>
              <motion.span 
                animate={isMobileMenuOpen ? { rotate: -45, y: -8, width: '100%' } : { rotate: 0, y: 0, width: '100%' }} 
                className="w-full h-0.5 bg-amber-500 block origin-center transition-all"
              ></motion.span>
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            transition={{ duration: 0.7, ease: [0.32, 0, 0.67, 0] }}
            className="fixed inset-0 z-[105] bg-[#0A0A0A] flex flex-col justify-center px-6"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
            
            <div className="relative z-10 flex flex-col gap-6 text-center">
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-4xl md:text-5xl font-serif tracking-widest uppercase transition-colors ${isActive(link.href) ? 'text-amber-500' : 'text-neutral-300 hover:text-white'}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * links.length + 0.3, duration: 0.5 }}
                className="mt-10"
              >
                <Link 
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="inline-block px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold tracking-widest uppercase text-sm rounded-full shadow-[0_0_30px_rgba(245,158,11,0.3)]"
                >
                  Plan My Journey
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
