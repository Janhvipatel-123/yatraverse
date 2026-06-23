"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import FantasyWorld from "./FantasyWorld";

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 2, 10], fov: 50 }}
        dpr={[1, 1.5]} // Adaptive DPR: never go above 1.5x pixel ratio for performance
        gl={{ powerPreference: "high-performance", antialias: false }} // Disable antialias for performance, Bloom often hides jaggies
      >
        <Suspense fallback={null}>
          <FantasyWorld />
        </Suspense>
      </Canvas>
      {/* Overlay gradient to blend the 3D scene smoothly with the text */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A] pointer-events-none" />
    </div>
  );
}
