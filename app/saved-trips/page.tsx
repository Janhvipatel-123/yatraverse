"use client";

import { useEffect, useState } from 'react';
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

export default function SavedTripsPage() {
  const [itineraries, setItineraries] = useState<Itinerary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);



  const fetchItineraries = async () => {
    try {
      const res = await fetch('/api/itineraries');
      const data = await res.json();
      
      if (data.success) {
        setItineraries(data.itineraries);
      } else {
        setError(data.message || 'Failed to load itineraries');
      }
    } catch (err) {
      console.error(err);
      setError('An unexpected error occurred while loading itineraries.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const init = async () => {
      await fetchItineraries();
    };
    init();
  }, []);

  const deleteItinerary = async (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (!confirm('Are you sure you want to delete this trip?')) return;
    
    try {
      const res = await fetch(`/api/itineraries/${id}`, { method: 'DELETE' });
      const data = await res.json();
      
      if (data.success) {
        setItineraries(itineraries.filter(i => i.id !== id));
      } else {
        alert(data.message || 'Failed to delete itinerary');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to delete itinerary');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <h1 className="text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200">
                Your Saved Journeys
              </h1>
              <p className="text-neutral-400 mt-2">Curated AI itineraries created exclusively for you</p>
            </div>
            <Link 
              href="/ai-guide"
              className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black rounded-lg font-bold hover:from-amber-400 hover:to-amber-500 transition-colors uppercase tracking-widest text-sm flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              New Plan
            </Link>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-32">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
            </div>
          ) : error ? (
            <div className="py-20 text-center px-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-red-500 mb-4 bg-red-500/10 inline-block p-4 rounded-full border border-red-500/20">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Error Loading Data</h3>
              <p className="text-neutral-400">{error}</p>
            </div>
          ) : itineraries.length === 0 ? (
            <div className="py-32 text-center px-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <svg className="w-16 h-16 text-neutral-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <h3 className="text-xl font-bold mb-2">No saved journeys yet.</h3>
              <p className="text-neutral-400 mb-6">Experience the magic of AI travel planning.</p>
              <Link 
                href="/ai-guide"
                className="px-6 py-3 border border-amber-500 text-amber-500 rounded-lg hover:bg-amber-500/10 transition-colors uppercase tracking-widest text-sm inline-block"
              >
                Create First Plan
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {itineraries.map((trip) => (
                <Link key={trip.id} href={`/saved-trips/${trip.id}`}>
                  <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all group h-full flex flex-col shadow-lg">
                    <div className="p-6 flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <span className="bg-amber-500/10 text-amber-500 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                          {trip.travelStyle}
                        </span>
                        <button 
                          onClick={(e) => deleteItinerary(trip.id, e)}
                          className="text-neutral-500 hover:text-red-500 transition-colors p-1"
                          title="Delete Plan"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                      <h2 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{trip.destination}</h2>
                      
                      <div className="flex gap-4 text-sm text-neutral-400 mb-4">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          {trip.days} Days
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          ₹{trip.budget}
                        </span>
                      </div>
                      
                      <p className="text-sm text-neutral-500 line-clamp-3 mb-6">
                        {trip.generatedPlan?.overview || 'Explore the beauty, spirituality, and luxury of this incredible destination curated specifically for you.'}
                      </p>
                    </div>
                    
                    <div className="px-6 py-4 border-t border-neutral-800 bg-black/40 flex justify-between items-center text-xs text-neutral-500 font-medium">
                      <span>{new Date(trip.createdAt).toLocaleDateString()}</span>
                      <span className="text-amber-500 group-hover:underline flex items-center gap-1">
                        View Details <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
