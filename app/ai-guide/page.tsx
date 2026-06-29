"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import InnerPageVideoBackground from '../../components/InnerPageVideoBackground';

type Activity = { time: string; title: string; description: string };
type DayPlan = { day: number; title: string; activities: Activity[] };
type Hotel = { name: string; pricePerNight: string; description: string };
type ItineraryData = {
  destination: string;
  duration: string;
  estimatedCost: string;
  overview: string;
  hotels: Hotel[];
  days: DayPlan[];
  tips: string[];
};

export default function AIGuidePage() {
  const [destination, setDestination] = useState("Jaipur");
  const [days, setDays] = useState(5);
  const [budget, setBudget] = useState("50000");
  const [travelStyle, setTravelStyle] = useState("Luxury");
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [itineraryData, setItineraryData] = useState<ItineraryData | null>(null);

  const handleGenerate = async () => {
    try {
      setIsGenerating(true);
      setError(null);
      
      const res = await fetch('/api/ai/itinerary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          destination,
          days,
          budget,
          travelStyle
        })
      });
      
      const data = await res.json();
      
      if (data.success) {
        setItineraryData(data.itinerary.generatedPlan);
      } else {
        setError(data.message || 'Failed to generate itinerary');
      }
    } catch (err) {
      console.error(err);
      setError('A network error occurred. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      <InnerPageVideoBackground />
      <div className="pt-24 pb-16 min-h-screen text-neutral-50 font-sans flex flex-col max-w-7xl mx-auto px-6 relative z-10">
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
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 backdrop-blur-md">
            <h3 className="font-bold text-amber-500 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              Trip Planner
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-neutral-500 uppercase tracking-wide">Destination</label>
                <select 
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-[#0A0A0A] border border-neutral-800 rounded-lg p-2 text-neutral-200 mt-1 focus:outline-none focus:border-amber-500/50"
                >
                  <option value="Mathura & Vrindavan">Mathura & Vrindavan</option>
                  <option value="Agra">Agra</option>
                  <option value="Jaipur">Jaipur</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Ladakh">Ladakh</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-neutral-500 uppercase tracking-wide">Duration</label>
                <select 
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full bg-[#0A0A0A] border border-neutral-800 rounded-lg p-2 text-neutral-200 mt-1 focus:outline-none focus:border-amber-500/50"
                >
                  <option value={3}>3 Days</option>
                  <option value={5}>5 Days</option>
                  <option value={7}>7 Days</option>
                  <option value={10}>10 Days</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-neutral-500 uppercase tracking-wide">Budget (₹)</label>
                <input 
                  type="text" 
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-[#0A0A0A] border border-neutral-800 rounded-lg p-2 text-neutral-200 mt-1 focus:outline-none focus:border-amber-500/50"
                  placeholder="e.g. 50000"
                />
              </div>
              <div>
                <label className="text-xs text-neutral-500 uppercase tracking-wide">Travel Style</label>
                <div className="flex gap-2 mt-1">
                  {['Budget', 'Standard', 'Luxury'].map((style) => (
                    <button 
                      key={style}
                      onClick={() => setTravelStyle(style)}
                      className={`flex-1 py-1 border rounded text-sm transition-colors ${
                        travelStyle === style 
                          ? 'bg-amber-500/20 border-amber-500/50 text-amber-500 font-medium'
                          : 'bg-[#0A0A0A] border-neutral-800 text-neutral-400 hover:border-amber-500/50'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>
              <button 
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full py-3 mt-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black rounded-lg font-bold hover:from-amber-400 hover:to-amber-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                  </>
                ) : (
                  'Generate Itinerary'
                )}
              </button>
              {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
            </div>
          </div>
        </motion.div>

        {/* Main Display Area */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-3 bg-[#0A0A0A]/90 backdrop-blur-xl border border-neutral-800 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] min-h-[600px] flex flex-col"
        >
          {isGenerating ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-12">
              <div className="relative w-24 h-24 mb-8">
                <div className="absolute inset-0 border-t-2 border-amber-500 rounded-full animate-spin"></div>
                <div className="absolute inset-2 border-r-2 border-amber-400 rounded-full animate-spin shadow-[0_0_15px_rgba(245,158,11,0.5)]" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                <div className="absolute inset-0 flex items-center justify-center text-amber-500 font-serif font-bold text-2xl">Y</div>
              </div>
              <h2 className="text-2xl font-serif text-white mb-2">Curating Your Journey</h2>
              <p className="text-neutral-400 max-w-md">Our AI is hand-picking the best hotels, experiences, and local secrets for your {travelStyle} trip to {destination}...</p>
            </div>
          ) : itineraryData ? (
            <div className="flex-1 overflow-y-auto p-8">
              <div className="mb-8 pb-8 border-b border-neutral-800">
                <h2 className="text-3xl font-serif font-bold text-amber-500 mb-2">{itineraryData.destination}</h2>
                <div className="flex gap-4 text-sm text-neutral-400 font-medium tracking-wide mb-6">
                  <span className="flex items-center gap-1"><svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> {itineraryData.duration}</span>
                  <span className="flex items-center gap-1"><svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Est. {itineraryData.estimatedCost}</span>
                </div>
                <p className="text-neutral-300 leading-relaxed text-lg">{itineraryData.overview}</p>
              </div>

              <div className="mb-12">
                <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-sm">Recommended Stays</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {itineraryData.hotels.map((hotel: Hotel, i: number) => (
                    <div key={i} className="bg-neutral-900/50 border border-neutral-800 p-5 rounded-xl hover:border-amber-500/30 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-amber-500">{hotel.name}</h4>
                        <span className="text-xs font-bold text-neutral-400 bg-black px-2 py-1 rounded">{hotel.pricePerNight}/night</span>
                      </div>
                      <p className="text-sm text-neutral-400">{hotel.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-sm">Day-by-Day Journey</h3>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-800 before:to-transparent">
                  {itineraryData.days.map((day: DayPlan, i: number) => (
                    <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-800 bg-black text-amber-500 font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(0,0,0,0.8)] z-10">
                        {day.day}
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-neutral-900/50 border border-neutral-800 p-6 rounded-2xl hover:border-amber-500/30 transition-all">
                        <h4 className="font-bold text-lg text-white mb-4">{day.title}</h4>
                        <div className="space-y-4">
                          {day.activities.map((activity: Activity, j: number) => (
                            <div key={j} className="border-l-2 border-amber-500/30 pl-4 py-1">
                              <span className="text-xs font-bold text-amber-500 block mb-1">{activity.time}</span>
                              <strong className="block text-sm text-neutral-200 mb-1">{activity.title}</strong>
                              <p className="text-sm text-neutral-400">{activity.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-sm">Travel Tips</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {itineraryData.tips.map((tip: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 bg-neutral-900/30 p-3 rounded-lg border border-neutral-800/50">
                      <svg className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span className="text-sm text-neutral-300">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-12">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400/20 to-amber-600/20 flex items-center justify-center mb-6 border border-amber-500/20">
                <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
              </div>
              <h2 className="text-2xl font-serif text-white mb-4">Discover Your Next Adventure</h2>
              <p className="text-neutral-400 max-w-md">Adjust your preferences in the Trip Planner and let YatraAI curate a personalized luxury itinerary tailored perfectly for you.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
    </>
  );
}
