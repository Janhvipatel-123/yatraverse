"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageId: string;
  packageTitle: string;
}

export default function BookingModal({ isOpen, onClose, packageId, packageTitle }: BookingModalProps) {
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    travelDate: '',
    travelers: 1,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, packageId }),
      });
      const data = await res.json();
      
      if (data.success) {
        setSuccess(true);
      } else {
        setError(data.message || 'Failed to submit booking inquiry');
      }
    } catch (err) {
      console.error(err);
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        ></motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-[#0A0A0A] border border-amber-500/30 rounded-3xl shadow-[0_0_50px_rgba(245,158,11,0.15)] overflow-hidden"
        >
          <div className="p-8">
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-neutral-500 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            
            {success ? (
              <div className="text-center py-10">
                <div className="w-20 h-20 mx-auto bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/30 mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-3xl font-serif text-white font-bold mb-4">Request Received</h3>
                <p className="text-neutral-400 mb-8 leading-relaxed">
                  Thank you for choosing YatraVerse. One of our luxury travel advisors will contact you shortly to finalize the details of your {packageTitle} journey.
                </p>
                <button 
                  onClick={onClose}
                  className="px-8 py-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 transition-colors uppercase tracking-widest text-sm font-bold"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-serif text-amber-500 font-bold mb-2">Book Your Journey</h3>
                <p className="text-neutral-400 mb-8 text-sm">Requesting: <strong className="text-white">{packageTitle}</strong></p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-1">Full Name *</label>
                    <input 
                      required
                      type="text" 
                      value={formData.customerName}
                      onChange={e => setFormData({...formData, customerName: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 transition-colors" 
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-1">Email Address *</label>
                      <input 
                        required
                        type="email" 
                        value={formData.customerEmail}
                        onChange={e => setFormData({...formData, customerEmail: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 transition-colors" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        value={formData.customerPhone}
                        onChange={e => setFormData({...formData, customerPhone: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 transition-colors" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-1">Travel Date *</label>
                      <input 
                        required
                        type="date" 
                        value={formData.travelDate}
                        onChange={e => setFormData({...formData, travelDate: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 transition-colors" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-1">Travelers *</label>
                      <input 
                        required
                        type="number" 
                        min="1"
                        value={formData.travelers}
                        onChange={e => setFormData({...formData, travelers: parseInt(e.target.value) || 1})}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 transition-colors" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-1">Special Requests (Optional)</label>
                    <textarea 
                      rows={3}
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 transition-colors" 
                    ></textarea>
                  </div>

                  {error && <p className="text-red-500 text-sm py-2">{error}</p>}

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-4 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold uppercase tracking-widest text-sm rounded-lg transition-all disabled:opacity-50 flex justify-center items-center gap-2"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Booking Inquiry'}
                  </button>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
