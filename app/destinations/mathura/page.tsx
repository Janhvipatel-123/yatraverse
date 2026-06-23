"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function MathuraPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-24 pb-16 bg-[#0A0A0A] text-neutral-50 font-sans min-h-screen"
    >
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A] z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/destinations/mathura.jpg')] bg-cover bg-center opacity-40"></div>
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">The Birthplace of Krishna</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-xl text-neutral-50">Mathura</h1>
          <p className="text-xl text-neutral-300 drop-shadow-md">Step into the ancient city where divinity meets history along the sacred Yamuna.</p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
             <div className="bg-[#0A0A0A]/60 backdrop-blur-md border border-neutral-800 px-6 py-3 rounded-full flex gap-2 items-center">
                <span className="text-amber-500 font-bold">Best Time:</span> <span className="text-neutral-200">Oct - Mar</span>
             </div>
             <div className="bg-[#0A0A0A]/60 backdrop-blur-md border border-neutral-800 px-6 py-3 rounded-full flex gap-2 items-center">
                <span className="text-amber-500 font-bold">Vibe:</span> <span className="text-neutral-200">Spiritual & Historic</span>
             </div>
          </div>
        </div>
      </motion.section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-12">
          {/* Overview */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-amber-500">Overview</h2>
            <p className="text-neutral-400 leading-relaxed text-lg">
              Mathura is one of Hinduism&apos;s seven sacred cities and the birthplace of Lord Krishna. With its heart rooted in the ancient past, the city is a labyrinth of lanes teeming with devotees, ancient temples, and the eternal flow of the Yamuna river. The spirituality here is palpable, offering an immersive journey into India&apos;s rich mythological heritage.
            </p>
          </div>

          {/* Top Attractions */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-amber-500">Top Attractions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Shri Krishna Janmabhoomi', 'Dwarkadhish Temple', 'Vishram Ghat', 'Kansa Qila'].map(place => (
                <div key={place} className="p-4 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-amber-500/30 transition-colors">
                  <h3 className="font-bold text-neutral-200 mb-1">{place}</h3>
                  <p className="text-sm text-neutral-500">A must-visit historic landmark.</p>
                </div>
              ))}
            </div>
          </div>

          {/* Food & Culture */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-amber-500">Food & Culture</h2>
            <p className="text-neutral-400 leading-relaxed text-lg">
              Mathura is famous for its milk-based sweets, particularly &apos;Mathura Peda&apos;. The streets come alive during festivals like Janmashtami and Holi, where the entire city is painted in vibrant colors of devotion and joy.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Ride Booking CTA */}
          <div className="bg-gradient-to-br from-amber-900/20 to-neutral-900 border border-amber-500/20 p-8 rounded-3xl text-center">
            <h3 className="text-2xl font-bold text-neutral-50 mb-4">Need a Ride?</h3>
            <p className="text-neutral-400 mb-6">Book an E-Rickshaw or premium cab for your local temple visits.</p>
            <Link href="/rides" className="inline-block w-full py-4 bg-amber-500 hover:bg-amber-400 text-[#0A0A0A] font-bold rounded-xl transition-all shadow-lg">
              Book a Ride Now
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 text-neutral-50">Visual Journey</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {[1,2,3,4].map(i => (
             <div key={i} className={`rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-950 border border-neutral-800 ${i === 1 ? 'md:col-span-2 md:row-span-2' : ''}`}></div>
          ))}
        </div>
      </section>

      {/* Reviews Placeholder */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-neutral-800 mt-12">
        <h2 className="text-3xl font-bold mb-8 text-neutral-50">Traveler Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <div key={i} className="p-6 bg-neutral-900/30 border border-neutral-800 rounded-2xl">
              <div className="flex gap-1 text-amber-500 mb-4">★★★★★</div>
              <p className="text-neutral-400 text-sm italic">&quot;An absolutely magical and deeply spiritual experience. The ghats at sunset are a sight to behold.&quot;</p>
              <div className="mt-4 font-bold text-neutral-300 text-sm">- Verified Traveler</div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
