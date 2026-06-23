"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const categories = [
  {
    id: 'spiritual',
    title: 'Spiritual Tours',
    description: 'Embark on a profound journey of the soul. Experience ancient rituals, meditate in sacred ashrams, and witness the eternal flow of devotion along India\'s holiest rivers.',
    highlights: ['Exclusive Ganga Aarti access', 'Private meditation with masters', 'VIP temple darshan'],
    duration: '5 - 14 Days',
    price: 'From ₹85,000',
    image: 'https://images.unsplash.com/photo-1561359313-0639aad49ca6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'heritage',
    title: 'Heritage Walks',
    description: 'Step back in time through the grand corridors of India\'s opulent history. Explore majestic forts, royal palaces, and forgotten empires with expert historians.',
    highlights: ['Private historian guides', 'After-hours monument access', 'Palatial heritage stays'],
    duration: '3 - 10 Days',
    price: 'From ₹1,20,000',
    image: 'https://images.unsplash.com/photo-1564507592208-5287514a3875?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'food',
    title: 'Food Trails',
    description: 'A gastronomic adventure curated for the discerning palate. From royal kitchens to hidden street food gems, taste the diverse and rich culinary heritage of India.',
    highlights: ['Dining with royal families', 'Masterclasses with top chefs', 'Curated street food tours'],
    duration: '4 - 8 Days',
    price: 'From ₹65,000',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f39ce9b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'photography',
    title: 'Photography Tours',
    description: 'Capture the vibrant colors, dramatic landscapes, and raw emotion of India. Led by award-winning photographers, these tours are designed to hone your craft in the most photogenic locations.',
    highlights: ['Mentorship by pros', 'Golden hour exclusive access', 'Portrait sessions with locals'],
    duration: '7 - 12 Days',
    price: 'From ₹95,000',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'luxury',
    title: 'Ultra-Luxury Escapes',
    description: 'The pinnacle of bespoke travel. Private jets, exclusive island buyouts, and the finest presidential suites. For those who demand nothing but the absolute best.',
    highlights: ['Private jet transfers', 'Presidential suite stays', '24/7 dedicated butler'],
    duration: 'Custom',
    price: 'On Request',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  }
];

const signatures = [
  {
    title: 'The Maharaja Express',
    description: 'Journey across the Golden Triangle in India\'s most luxurious train.',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Himalayan Heli-Skiing',
    description: 'Exclusive access to untouched powder in the high Himalayas.',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Private Backwater Cruise',
    description: 'Sail the serene waters of Kerala in a bespoke ultra-luxury houseboat.',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const reasons = [
  {
    title: 'Bespoke Curation',
    description: 'Every itinerary is meticulously crafted from scratch to align perfectly with your unique tastes and desires.',
    icon: (
      <svg className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: 'Unparalleled Access',
    description: 'We unlock doors that remain closed to others—from private palace dinners to after-hours temple visits.',
    icon: (
      <svg className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    )
  },
  {
    title: '24/7 Concierge',
    description: 'A dedicated luxury advisor is at your disposal around the clock, ensuring flawless execution of your journey.',
    icon: (
      <svg className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

export default function ExperiencesPage() {
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
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-black/50 to-[#0A0A0A] z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Luxury Indian Experiences" 
            className="w-full h-full object-cover opacity-70 scale-105 transform motion-safe:animate-[pulse_20s_ease-in-out_infinite_alternate]"
          />
        </div>
        
        <div className="relative z-20 text-center px-6 w-full max-w-5xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-8xl font-bold mb-6 drop-shadow-2xl text-neutral-50 font-serif"
          >
            Curated Luxury <br />
            <span className="text-amber-500 italic">Experiences</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-2xl font-light text-neutral-300 max-w-3xl mx-auto leading-relaxed"
          >
            Discover India through an exclusive lens. From profound spiritual awakenings and royal heritage walks to gastronomic trails and masterclass photography tours.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row justify-center gap-6 mt-12"
          >
             <button onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold tracking-widest uppercase text-sm rounded-full transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] transform hover:-translate-y-1">
               Explore Collections
             </button>
             <Link href="/contact" className="px-10 py-4 bg-white/5 backdrop-blur-md border border-white/20 hover:bg-white/10 text-white font-bold tracking-widest uppercase text-sm rounded-full transition-all">
               Consult Advisor
             </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce cursor-pointer"
          onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <svg className="w-8 h-8 text-amber-500/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.section>

      {/* Experience Categories */}
      <section id="categories" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-sm flex items-center justify-center gap-6 mb-4">
            <span className="w-16 h-px bg-amber-500/50"></span>
            Our Collections
            <span className="w-16 h-px bg-amber-500/50"></span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-50 font-serif">Journeys of Distinction</h2>
        </div>

        <div className="space-y-32">
          {categories.map((category, index) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2 h-[400px] md:h-[600px] relative rounded-3xl overflow-hidden group">
                <img src={category.image} alt={category.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80"></div>
                <div className="absolute inset-0 border-2 border-white/10 rounded-3xl group-hover:border-amber-500/30 transition-colors duration-500"></div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-8">
                <h3 className="text-4xl md:text-5xl font-bold text-neutral-50 font-serif">{category.title}</h3>
                <p className="text-xl text-neutral-400 font-light leading-relaxed">{category.description}</p>
                
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
                  <h4 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-6">Signature Highlights</h4>
                  <ul className="space-y-4">
                    {category.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-4 text-neutral-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span>
                        <span className="text-lg">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap items-center gap-8 pt-4">
                  <div>
                    <p className="text-neutral-500 text-sm tracking-widest uppercase mb-1">Duration</p>
                    <p className="text-neutral-200 text-xl font-bold">{category.duration}</p>
                  </div>
                  <div>
                    <p className="text-neutral-500 text-sm tracking-widest uppercase mb-1">Starting From</p>
                    <p className="text-amber-500 text-xl font-bold">{category.price}</p>
                  </div>
                </div>

                <div className="pt-6">
                  <Link href={`/contact?interest=${category.id}`} className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold uppercase tracking-widest text-sm rounded-full transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]">
                    Explore Tour
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Signature Experiences */}
      <section className="py-32 px-6 bg-neutral-900/30 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-sm flex items-center gap-6 mb-4">
                Exclusive <span className="w-16 h-px bg-amber-500/50"></span>
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-50 font-serif">Signature Experiences</h2>
            </div>
            <Link href="/contact" className="text-neutral-400 hover:text-amber-500 transition-colors uppercase tracking-widest text-sm font-bold flex items-center gap-2">
              View All 
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {signatures.map((sig, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="group relative rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer"
              >
                <img src={sig.image} alt={sig.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-3 font-serif translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{sig.title}</h3>
                  <p className="text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{sig.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book With YatraVerse */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-50 font-serif mb-6">The YatraVerse Standard</h2>
          <p className="text-xl text-neutral-400 font-light max-w-2xl mx-auto">Elevating the art of travel through uncompromising excellence and meticulous attention to detail.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reasons.map((reason, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white/5 border border-white/5 p-10 rounded-3xl hover:border-amber-500/30 hover:bg-white/10 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-neutral-900/50 border border-white/10 flex items-center justify-center mb-8 shadow-lg">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-bold text-neutral-50 mb-4">{reason.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 px-6 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549603099-317a7e1f4229?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-black/80 to-[#0A0A0A]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-neutral-50 mb-8 font-serif">Ready for the Extraordinary?</h2>
          <p className="text-xl md:text-2xl text-neutral-300 font-light mb-12">
            Let our luxury advisors craft an itinerary that transcends the ordinary and redefines your expectations of India.
          </p>
          <Link href="/contact" className="inline-block px-12 py-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold uppercase tracking-widest text-lg rounded-full transition-all shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_50px_rgba(245,158,11,0.5)] transform hover:-translate-y-1">
            Begin Your Journey
          </Link>
        </div>
      </section>

    </div>
  );
}
