"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltIntensity?: number; // Maximum tilt rotation in degrees
}

export default function TiltCard({ children, className = "", tiltIntensity = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Motion values for pointer coordinates (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for smooth luxury motion
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Map pointer coordinates to rotation degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [tiltIntensity, -tiltIntensity]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-tiltIntensity, tiltIntensity]);

  // Glassmorphism glare overlay that follows the mouse
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100]);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.06) 0%, transparent 50%)`;

  // Accessibility and mobile fallback state
  const [isInteractive, setIsInteractive] = useState(true);

  useEffect(() => {
    // Disable on touch devices and if user prefers reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    
    if (mediaQuery.matches || isTouch) {
      setTimeout(() => setIsInteractive(false), 0);
    }

    const listener = (e: MediaQueryListEvent) => {
      setIsInteractive(!e.matches && !window.matchMedia("(pointer: coarse)").matches);
    };

    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current || !isInteractive) return;

    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    if (!isInteractive) return;
    x.set(0);
    y.set(0);
  };

  // If mobile or reduced motion, return a static wrapper without 3D tilt
  if (!isInteractive) {
    return (
      <div className={`relative ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onFocus={() => { x.set(0); y.set(0); }} 
      onBlur={() => { x.set(0); y.set(0); }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02, zIndex: 30 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`relative cursor-pointer ${className}`}
    >
      <div 
        style={{ transform: "translateZ(30px)" }} 
        className="w-full h-full relative z-10"
      >
        {children}
      </div>

      {/* Glare overlay */}
      <motion.div 
        className="pointer-events-none absolute inset-0 z-20 rounded-[inherit]"
        style={{ background: glareBackground }}
      />
      
      {/* Subtle depth shadow that reacts to tilt */}
      <motion.div 
        className="pointer-events-none absolute -inset-2 -z-10 rounded-[inherit] bg-black/20 blur-xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
      />
    </motion.div>
  );
}
