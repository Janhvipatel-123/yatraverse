"use client";

import { motion } from 'framer-motion';

export default function AIGuidePage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-[#0A0A0A] text-neutral-50 font-sans flex flex-col max-w-7xl mx-auto px-6 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-12 mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-50 drop-shadow-lg">Yatra<span className="text-amber-500">AI</span> Guide</h1>
        <p className="text-neutral-400">Your personal spiritual and cultural travel companion.</p>
      </motion.div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Tools */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 lg:col-span-1"
        >
          {/* Trip Planner UI */}
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6">
            <h3 className="font-bold text-amber-500 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              Trip Planner
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-neutral-500 uppercase tracking-wide">Destination</label>
                <select className="w-full bg-[#0A0A0A] border border-neutral-800 rounded-lg p-2 text-neutral-200 mt-1 focus:outline-none focus:border-amber-500/50">
                  <option>Mathura & Vrindavan</option>
                  <option>Agra</option>
                  <option>Jaipur</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-neutral-500 uppercase tracking-wide">Duration</label>
                <select className="w-full bg-[#0A0A0A] border border-neutral-800 rounded-lg p-2 text-neutral-200 mt-1 focus:outline-none focus:border-amber-500/50">
                  <option>3 Days</option>
                  <option>5 Days</option>
                  <option>7 Days</option>
                </select>
              </div>
              <button className="w-full py-2 bg-amber-500/10 text-amber-500 border border-amber-500/30 rounded-lg font-bold hover:bg-amber-500 hover:text-[#0A0A0A] transition-colors">
                Generate Itinerary
              </button>
            </div>
          </div>

          {/* Budget Planner UI */}
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6">
            <h3 className="font-bold text-amber-500 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Budget
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-neutral-500 uppercase tracking-wide">Travel Style</label>
                <div className="flex gap-2 mt-1">
                  <button className="flex-1 py-1 bg-[#0A0A0A] border border-neutral-800 rounded text-neutral-400 text-sm hover:border-amber-500/50 transition-colors">Budget</button>
                  <button className="flex-1 py-1 bg-amber-500/20 border border-amber-500/50 rounded text-amber-500 text-sm font-medium">Standard</button>
                  <button className="flex-1 py-1 bg-[#0A0A0A] border border-neutral-800 rounded text-neutral-400 text-sm hover:border-amber-500/50 transition-colors">Luxury</button>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-neutral-500 uppercase tracking-wide mb-1">
                  <span>Est. Cost</span>
                  <span className="text-amber-500 font-bold">₹15,000</span>
                </div>
                <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full w-1/2 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Chatbot Layout */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-3 bg-[#0A0A0A] border border-neutral-800 rounded-3xl flex flex-col overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]"
        >
          {/* Chat Header */}
          <div className="px-6 py-4 border-b border-neutral-800 bg-neutral-900/30 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center">
               <span className="text-[#0A0A0A] font-bold text-lg leading-none">Y</span>
            </div>
            <div>
              <h2 className="font-bold text-neutral-200">Yatra AI</h2>
              <p className="text-xs text-emerald-500 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span> Online
              </p>
            </div>
          </div>

          {/* Chat History */}
          <div className="flex-1 p-6 overflow-y-auto space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 flex-shrink-0 flex items-center justify-center">
                <span className="text-[#0A0A0A] font-bold text-xs leading-none">Y</span>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-2xl rounded-tl-none max-w-[80%]">
                <p className="text-neutral-300">Namaste! 🙏 I am your YatraVerse AI Guide. How can I help you plan your spiritual journey today?</p>
              </div>
            </div>
          </div>

          {/* Suggested Prompts */}
          <div className="px-6 pb-2 flex flex-wrap gap-2">
            {[
              "Plan a Mathura trip",
              "Find temples near me",
              "Budget trip under ₹5000",
              "Best food in Vrindavan"
            ].map(prompt => (
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={prompt} 
                className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full text-xs text-neutral-400 hover:text-amber-500 hover:border-amber-500/50 transition-colors"
              >
                {prompt}
              </motion.button>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-neutral-900/30 border-t border-neutral-800">
            <div className="relative flex items-center">
              <input type="text" placeholder="Ask anything about your trip..." className="w-full bg-[#0A0A0A] border border-neutral-700 rounded-full py-4 pl-6 pr-14 text-neutral-200 focus:outline-none focus:border-amber-500/50 transition-colors" />
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-2 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-[#0A0A0A] hover:bg-amber-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
