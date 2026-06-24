"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function MagneticButton({ children, className = "", onClick }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for magnetic pull
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for ultra-smooth easing
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  const [isInteractive, setIsInteractive] = useState(true);

  useEffect(() => {
    // Disable on touch devices and if user prefers reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    
    if (mediaQuery.matches || isTouch) {
      setIsInteractive(false);
    }

    const listener = (e: MediaQueryListEvent) => {
      setIsInteractive(!e.matches && !window.matchMedia("(pointer: coarse)").matches);
    };

    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !isInteractive) return;

    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    // Subtle magnetic pull
    x.set(middleX * 0.25);
    y.set(middleY * 0.25);
  };

  const reset = () => {
    if (!isInteractive) return;
    x.set(0);
    y.set(0);
  };

  if (!isInteractive) {
    return (
      <div className={`relative inline-block ${className}`} onClick={onClick}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: 0, y: 0 }}
      style={{ x: mouseXSpring, y: mouseYSpring }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`relative inline-block cursor-pointer group ${className}`}
      onClick={onClick}
    >
      {/* Gold glow expansion on hover */}
      <motion.div 
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-amber-500/0 blur-md transition-all duration-500 group-hover:bg-amber-500/20 group-hover:scale-110"
      />
      {children}
    </motion.div>
  );
}
