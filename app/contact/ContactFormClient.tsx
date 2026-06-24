"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

export default function ContactFormClient() {
  const searchParams = useSearchParams();
  const destinationParam = searchParams.get('destination');
  const interestParam = searchParams.get('interest');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    budget: '',
    travelDates: '',
    travelers: '',
    style: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    // Pre-fill fields if query params are present
    setFormData((prev) => ({
      ...prev,
      destination: destinationParam ? destinationParam.toLowerCase() : prev.destination,
      style: interestParam || prev.style,
    }));
  }, [destinationParam, interestParam]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          destination: formData.destination,
          budget: formData.budget,
          travelDates: formData.travelDates,
          travelers: formData.travelers,
          travelStyle: formData.style,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        // Clear form after successful submit (wait for exit animation if any)
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            destination: '',
            budget: '',
            travelDates: '',
            travelers: '',
            style: '',
            message: ''
          });
        }, 500);
      } else {
        setSubmitError(data.message || 'Failed to submit inquiry. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white/5 border border-white/10 p-10 md:p-14 rounded-[2rem] backdrop-blur-md relative"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <h2 className="text-3xl font-bold mb-8 font-serif relative z-10">Send an Inquiry</h2>
      
      {isSubmitted ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-500/10 border border-green-500/30 p-8 rounded-2xl text-center relative z-10"
        >
          <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-bold text-white mb-2">Inquiry Sent Successfully!</h3>
          <p className="text-neutral-400 mb-6">One of our luxury advisors will be in touch with you shortly.</p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-2 border border-amber-500/30 text-amber-500 hover:bg-amber-500/10 rounded-lg transition-colors text-sm font-bold uppercase tracking-widest"
          >
            Send Another Inquiry
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          {submitError && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-500 p-4 rounded-xl text-sm font-medium">
              {submitError}
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-neutral-400 tracking-widest uppercase mb-2">Full Name *</label>
              <input 
                type="text" 
                id="name" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-neutral-400 tracking-widest uppercase mb-2">Email Address *</label>
              <input 
                type="email" 
                id="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-neutral-400 tracking-widest uppercase mb-2">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div>
              <label htmlFor="destination" className="block text-sm font-bold text-neutral-400 tracking-widest uppercase mb-2">Destination *</label>
              <select 
                id="destination" 
                required
                value={formData.destination}
                onChange={(e) => setFormData({...formData, destination: e.target.value})}
                className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500/50 transition-colors appearance-none"
              >
                <option value="" disabled>Select a destination</option>
                <option value="mathura">Mathura & Vrindavan</option>
                <option value="agra">Agra (The Taj Mahal)</option>
                <option value="jaipur">Jaipur (The Pink City)</option>
                <option value="kerala">Kerala Backwaters</option>
                <option value="ladakh">Ladakh</option>
                <option value="other">Other / Custom Itinerary</option>
              </select>
            </div>
            <div>
              <label htmlFor="travelDates" className="block text-sm font-bold text-neutral-400 tracking-widest uppercase mb-2">Travel Dates</label>
              <input 
                type="text" 
                id="travelDates" 
                value={formData.travelDates}
                onChange={(e) => setFormData({...formData, travelDates: e.target.value})}
                className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                placeholder="e.g. October 2026"
              />
            </div>
            <div>
              <label htmlFor="travelers" className="block text-sm font-bold text-neutral-400 tracking-widest uppercase mb-2">Travelers</label>
              <input 
                type="number" 
                id="travelers" 
                min="1"
                value={formData.travelers}
                onChange={(e) => setFormData({...formData, travelers: e.target.value})}
                className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                placeholder="Number of people"
              />
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-bold text-neutral-400 tracking-widest uppercase mb-2">Budget Range</label>
              <select 
                id="budget" 
                value={formData.budget}
                onChange={(e) => setFormData({...formData, budget: e.target.value})}
                className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500/50 transition-colors appearance-none"
              >
                <option value="" disabled>Select budget range</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k+">$50,000+</option>
                <option value="unsure">Not Sure Yet</option>
              </select>
            </div>
            <div>
              <label htmlFor="style" className="block text-sm font-bold text-neutral-400 tracking-widest uppercase mb-2">Travel Style</label>
              <select 
                id="style" 
                value={formData.style}
                onChange={(e) => setFormData({...formData, style: e.target.value})}
                className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500/50 transition-colors appearance-none"
              >
                <option value="" disabled>Select your travel style</option>
                <option value="relaxed-luxury">Relaxed Luxury</option>
                <option value="cultural-immersion">Cultural Immersion</option>
                <option value="spiritual-retreat">Spiritual Retreat</option>
                <option value="adventure">Adventure</option>
                <option value="family">Family Trip</option>
                <option value="romantic">Romantic Getaway</option>
                <option value="luxury-experience">Luxury Experience</option>
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-bold text-neutral-400 tracking-widest uppercase mb-2">Message *</label>
            <textarea 
              id="message" 
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-neutral-900/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500/50 transition-colors resize-none"
              placeholder="Tell us about your dream journey..."
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center py-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold uppercase tracking-widest text-sm rounded-xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] ${isSubmitting ? 'opacity-80 cursor-not-allowed' : 'transform hover:-translate-y-1'} mt-4`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing Inquiry...
              </>
            ) : (
              'Send Inquiry'
            )}
          </button>
        </form>
      )}
    </motion.div>
  );
}
