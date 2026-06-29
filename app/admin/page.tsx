"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// TODO: Add authentication checks so this page cannot be opened without login.

type Inquiry = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  destination: string | null;
  message: string;
  status: 'NEW' | 'CONTACTED' | 'CONVERTED' | 'CLOSED';
  createdAt: string;
};

export default function AdminDashboard() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchInquiries = async () => {
    try {
      const res = await fetch('/api/admin/inquiries');
      const data = await res.json();
      
      if (data.success) {
        setInquiries(data.inquiries);
      } else {
        setError(data.message || 'Failed to load inquiries');
      }
    } catch (err) {
      console.error(err);
      setError('An unexpected error occurred while loading inquiries.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const init = async () => {
      await fetchInquiries();
    };
    init();
  }, []);



  const updateStatus = async (id: string, newStatus: string) => {
    try {
      setUpdatingId(id);
      const res = await fetch(`/api/admin/inquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      
      const data = await res.json();
      
      if (data.success) {
        // Update local state
        setInquiries(inquiries.map(inq => inq.id === id ? { ...inq, status: newStatus as 'NEW' | 'CONTACTED' | 'CONVERTED' | 'CLOSED' } : inq));
      } else {
        alert(data.message || 'Failed to update status');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to update status due to network error.');
    } finally {
      setUpdatingId(null);
    }
  };

  const stats = {
    total: inquiries.length,
    new: inquiries.filter(i => i.status === 'NEW').length,
    contacted: inquiries.filter(i => i.status === 'CONTACTED').length,
    converted: inquiries.filter(i => i.status === 'CONVERTED').length,
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'NEW': return 'bg-blue-500/10 text-blue-500 border-blue-500/30';
      case 'CONTACTED': return 'bg-amber-500/10 text-amber-500 border-amber-500/30';
      case 'CONVERTED': return 'bg-green-500/10 text-green-500 border-green-500/30';
      case 'CLOSED': return 'bg-neutral-500/10 text-neutral-400 border-neutral-500/30';
      default: return 'bg-neutral-500/10 text-neutral-400 border-neutral-500/30';
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
          <div className="mb-6 flex gap-4 text-sm font-bold tracking-widest uppercase">
            <span className="text-amber-500">Inquiries</span>
            <Link href="/admin/bookings" className="text-neutral-500 hover:text-white transition-colors">Bookings</Link>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <h1 className="text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200">
                Admin Dashboard
              </h1>
              <p className="text-neutral-400 mt-2">Manage luxury travel inquiries</p>
            </div>
            <button 
              onClick={fetchInquiries}
              className="px-6 py-3 border border-amber-500/30 text-amber-500 hover:bg-amber-500/10 rounded-lg transition-colors text-sm font-bold uppercase tracking-widest flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Total Inquiries', value: stats.total, color: 'text-white' },
              { label: 'New', value: stats.new, color: 'text-blue-500' },
              { label: 'Contacted', value: stats.contacted, color: 'text-amber-500' },
              { label: 'Converted', value: stats.converted, color: 'text-green-500' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <p className="text-neutral-400 text-sm font-bold uppercase tracking-wider mb-2">{stat.label}</p>
                <p className={`text-4xl font-serif font-bold ${stat.color}`}>{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Table Section */}
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
            {isLoading ? (
              <div className="flex justify-center items-center py-32">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
              </div>
            ) : error ? (
              <div className="py-20 text-center px-6">
                <div className="text-red-500 mb-4 bg-red-500/10 inline-block p-4 rounded-full border border-red-500/20">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Error Loading Data</h3>
                <p className="text-neutral-400">{error}</p>
              </div>
            ) : inquiries.length === 0 ? (
              <div className="py-32 text-center px-6">
                <svg className="w-16 h-16 text-neutral-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <h3 className="text-xl font-bold mb-2">No Inquiries Yet</h3>
                <p className="text-neutral-400">When potential clients reach out, their requests will appear here.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-black/40">
                      <th className="p-4 text-xs font-bold text-neutral-400 uppercase tracking-wider">Client</th>
                      <th className="p-4 text-xs font-bold text-neutral-400 uppercase tracking-wider">Contact</th>
                      <th className="p-4 text-xs font-bold text-neutral-400 uppercase tracking-wider">Destination</th>
                      <th className="p-4 text-xs font-bold text-neutral-400 uppercase tracking-wider">Message</th>
                      <th className="p-4 text-xs font-bold text-neutral-400 uppercase tracking-wider">Status</th>
                      <th className="p-4 text-xs font-bold text-neutral-400 uppercase tracking-wider">Date</th>
                      <th className="p-4 text-xs font-bold text-neutral-400 uppercase tracking-wider text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {inquiries.map((inq) => (
                      <tr key={inq.id} className="hover:bg-white/5 transition-colors group">
                        <td className="p-4">
                          <p className="font-medium text-white">{inq.name}</p>
                        </td>
                        <td className="p-4">
                          <p className="text-sm text-neutral-300">{inq.email}</p>
                          {inq.phone && <p className="text-xs text-neutral-500 mt-1">{inq.phone}</p>}
                        </td>
                        <td className="p-4 text-sm text-neutral-300">
                          {inq.destination ? <span className="capitalize">{inq.destination}</span> : <span className="text-neutral-500">-</span>}
                        </td>
                        <td className="p-4">
                          <div className="max-w-xs">
                            <p className="text-sm text-neutral-400 truncate group-hover:whitespace-normal group-hover:text-neutral-300 transition-all duration-300" title={inq.message}>
                              {inq.message}
                            </p>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(inq.status)}`}>
                            {inq.status}
                          </span>
                        </td>
                        <td className="p-4 text-sm text-neutral-400 whitespace-nowrap">
                          {new Date(inq.createdAt).toLocaleDateString()}
                        </td>
                        <td className="p-4 text-right">
                          <select
                            disabled={updatingId === inq.id}
                            value={inq.status}
                            onChange={(e) => updateStatus(inq.id, e.target.value)}
                            className="bg-black/50 border border-white/20 text-white text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2 disabled:opacity-50"
                          >
                            <option value="NEW">New</option>
                            <option value="CONTACTED">Contacted</option>
                            <option value="CONVERTED">Converted</option>
                            <option value="CLOSED">Closed</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
