import React from 'react';

export default function InnerPageVideoBackground() {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-cover"
        >
          <source src="/videos/destinations-background.mp4" type="video/mp4" />
        </video>
        
        {/* Premium Overlays */}
        {/* Base dark tint to ensure text readability */}
        <div className="absolute inset-0 z-10 bg-black/60 pointer-events-none"></div>
        {/* Top gradient blending into header */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A]/20 to-[#0A0A0A]/80 pointer-events-none"></div>
        {/* Subtle gold tint */}
        <div className="absolute inset-0 z-10 bg-amber-500/5 mix-blend-overlay pointer-events-none"></div>
        {/* Soft vignette */}
        <div className="absolute inset-0 z-10 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)] pointer-events-none"></div>
      </div>
    </>
  );
}
