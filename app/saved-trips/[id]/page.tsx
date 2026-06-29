"use client";

import { useEffect, useState, use } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

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

type Itinerary = {
  id: string;
  destination: string;
  days: number;
  budget: string;
  travelStyle: string;
  generatedPlan: ItineraryData;
  createdAt: string;
};

export default function SavedTripDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItinerary = async () => {
      try {
        const res = await fetch(`/api/itineraries/${id}`);
        const data = await res.json();
        
        if (data.success) {
          setItinerary(data.itinerary);
        } else {
          setError(data.message || 'Failed to load itinerary');
        }
      } catch (err) {
        console.error(err);
        setError('An unexpected error occurred while loading the itinerary.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchItinerary();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  if (error || !itinerary) {
    return (
      <div className="min-h-screen bg-black pt-32 pb-20 px-6 text-center">
        <h3 className="text-xl font-bold text-red-500 mb-2">Error</h3>
        <p className="text-neutral-400 mb-6">{error || 'Itinerary not found'}</p>
        <Link href="/saved-trips" className="text-amber-500 hover:underline">
          &larr; Back to Saved Trips
        </Link>
      </div>
    );
  }

  const itineraryData = itinerary.generatedPlan;

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <Link href="/saved-trips" className="inline-flex items-center gap-2 text-neutral-400 hover:text-amber-500 transition-colors mb-8 text-sm uppercase tracking-widest font-bold">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back to Saved Trips
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#0A0A0A]/90 backdrop-blur-xl border border-neutral-800 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]"
        >
          {itineraryData ? (
            <div className="p-8 md:p-12">
              <div className="mb-10 pb-8 border-b border-neutral-800">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-4">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 mb-2">
                      {itineraryData.destination}
                    </h1>
                    <div className="flex flex-wrap gap-4 text-sm text-neutral-400 font-medium tracking-wide">
                      <span className="flex items-center gap-1"><svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> {itineraryData.duration}</span>
                      <span className="flex items-center gap-1"><svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Est. {itineraryData.estimatedCost}</span>
                      <span className="bg-amber-500/10 text-amber-500 border border-amber-500/30 px-2 py-0.5 rounded text-xs uppercase">
                        {itinerary.travelStyle}
                      </span>
                    </div>
                  </div>
                  <div className="text-left md:text-right text-xs text-neutral-500">
                    Created on {new Date(itinerary.createdAt).toLocaleDateString()}
                  </div>
                </div>
                <p className="text-neutral-300 leading-relaxed text-lg max-w-3xl">{itineraryData.overview}</p>
              </div>

              <div className="mb-12">
                <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-sm flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                  Recommended Stays
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {itineraryData.hotels.map((hotel: Hotel, i: number) => (
                    <div key={i} className="bg-neutral-900/50 border border-neutral-800 p-5 rounded-xl hover:border-amber-500/30 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-amber-500 text-lg">{hotel.name}</h4>
                        <span className="text-xs font-bold text-neutral-400 bg-black border border-neutral-800 px-2 py-1 rounded">{hotel.pricePerNight}/night</span>
                      </div>
                      <p className="text-sm text-neutral-400">{hotel.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-xl font-bold text-white mb-8 uppercase tracking-widest text-sm flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  Day-by-Day Journey
                </h3>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-amber-500/20 before:via-amber-500/10 before:to-transparent">
                  {itineraryData.days.map((day: DayPlan, i: number) => (
                    <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-amber-500/50 bg-black text-amber-500 font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(245,158,11,0.2)] z-10">
                        {day.day}
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-neutral-900/40 border border-neutral-800 p-6 rounded-2xl hover:border-amber-500/30 hover:bg-neutral-900/60 transition-all">
                        <h4 className="font-bold text-xl text-white mb-4">{day.title}</h4>
                        <div className="space-y-5">
                          {day.activities.map((activity: Activity, j: number) => (
                            <div key={j} className="border-l-2 border-amber-500/30 pl-4 py-1 relative">
                              <div className="absolute w-2 h-2 rounded-full bg-amber-500/50 -left-[5px] top-2"></div>
                              <span className="text-xs font-bold text-amber-500 block mb-1">{activity.time}</span>
                              <strong className="block text-base text-neutral-200 mb-1">{activity.title}</strong>
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
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-sm flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Travel Tips
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {itineraryData.tips.map((tip: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 bg-neutral-900/30 p-4 rounded-xl border border-neutral-800/50 hover:border-amber-500/20 transition-colors">
                      <svg className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      <span className="text-sm text-neutral-300 leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="p-12 text-center text-neutral-400">
              No plan data available.
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
