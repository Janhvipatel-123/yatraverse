"use client";

import { motion } from 'framer-motion';

export default function RidesPage() {
  const rides = [
    { name: "E-Rickshaw", desc: "Best for narrow temple lanes", fare: "₹150", emoji: "🛺" },
    { name: "Sedan", desc: "Comfortable AC cab", fare: "₹400", emoji: "🚘" },
    { name: "Premium SUV", desc: "For families & group travel", fare: "₹750", emoji: "🚙" },
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-[#0A0A0A] max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-50 drop-shadow-lg">Book a <span className="text-amber-500">Ride</span></h1>
        <p className="text-neutral-400">Travel locally in comfort and luxury.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Form & Categories */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Booking Form */}
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-neutral-50 mb-6">Trip Details</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs text-neutral-500 uppercase tracking-wide block mb-2">Pickup Location</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-500"></span>
                    <input type="text" placeholder="e.g. Mathura Junction" className="w-full bg-[#0A0A0A] border border-neutral-800 rounded-xl py-3 pl-10 pr-4 text-neutral-200 focus:outline-none focus:border-amber-500/50" />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-neutral-500 uppercase tracking-wide block mb-2">Dropoff Location</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-rose-500"></span>
                    <input type="text" placeholder="e.g. Prem Mandir" className="w-full bg-[#0A0A0A] border border-neutral-800 rounded-xl py-3 pl-10 pr-4 text-neutral-200 focus:outline-none focus:border-amber-500/50" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <label className="text-xs text-neutral-500 uppercase tracking-wide block mb-2">Date</label>
                    <input type="date" className="w-full bg-[#0A0A0A] border border-neutral-800 rounded-xl py-3 px-4 text-neutral-200 focus:outline-none focus:border-amber-500/50" />
                 </div>
                 <div>
                    <label className="text-xs text-neutral-500 uppercase tracking-wide block mb-2">Time</label>
                    <input type="time" className="w-full bg-[#0A0A0A] border border-neutral-800 rounded-xl py-3 px-4 text-neutral-200 focus:outline-none focus:border-amber-500/50" />
                 </div>
              </div>
            </div>
          </div>

          {/* Ride Categories */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-50 mb-6">Select a Ride</h2>
            <div className="space-y-4">
              {rides.map((ride) => (
                <motion.div 
                  whileHover={{ scale: 1.03, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  key={ride.name} 
                  className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 flex items-center justify-between hover:border-amber-500/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-12 bg-neutral-800 rounded-lg flex items-center justify-center">{ride.emoji}</div>
                    <div>
                      <h4 className="font-bold text-neutral-200">{ride.name}</h4>
                      <p className="text-xs text-neutral-500">{ride.desc}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block font-bold text-amber-500">{ride.fare}</span>
                    <span className="text-xs text-neutral-500">~ 15 min</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Summary Panel */}
        <div>
          <div className="bg-[#0A0A0A] border border-neutral-800 rounded-3xl p-6 sticky top-28 shadow-2xl">
            <h3 className="font-bold text-xl text-neutral-50 mb-6">Booking Summary</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center pb-4 border-b border-neutral-800">
                <span className="text-sm text-neutral-400">Ride Type</span>
                <span className="text-sm font-bold text-neutral-200">Sedan</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-neutral-800">
                <span className="text-sm text-neutral-400">Distance</span>
                <span className="text-sm font-bold text-neutral-200">4.2 km</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-neutral-800">
                <span className="text-sm text-neutral-400">Taxes & Fees</span>
                <span className="text-sm font-bold text-neutral-200">₹45</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="font-bold text-neutral-200">Total Fare</span>
                <span className="text-2xl font-bold text-amber-500">₹445</span>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-[#0A0A0A] font-bold rounded-xl transition-all shadow-lg text-lg"
            >
              Confirm Booking
            </motion.button>
            <p className="text-xs text-neutral-500 text-center mt-4">Payment can be made to the driver directly.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
