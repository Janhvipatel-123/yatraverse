"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Sparkles, Float, MeshReflectorMaterial, Clouds, Cloud } from "@react-three/drei";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

type Tier = "mobile" | "tablet" | "desktop";

// Deterministic pseudo-random number generator to avoid hydration mismatches and purity errors
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

function useDeviceTier(): Tier {
  const [tier, setTier] = useState<Tier>("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setTier("mobile");
      else if (width < 1024) setTier("tablet");
      else setTier("desktop");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return tier;
}

// Procedural Birds faked with simple flying shapes
function Birds({ count }: { count: number }) {
  const birdsRef = useRef<THREE.Group>(null);

  const birds = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      x: (seededRandom(i * 1.1) - 0.5) * 40,
      y: seededRandom(i * 1.2) * 10 + 5,
      z: (seededRandom(i * 1.3) - 0.5) * -40 - 20,
      speed: seededRandom(i * 1.4) * 0.05 + 0.02,
      offset: seededRandom(i * 1.5) * Math.PI * 2,
    }));
  }, [count]);

  useFrame((state) => {
    if (!birdsRef.current) return;
    birdsRef.current.children.forEach((bird, i) => {
      const b = birds[i];
      bird.position.x += b.speed;
      bird.position.y += Math.sin(state.clock.elapsedTime * 5 + b.offset) * 0.02;
      if (bird.position.x > 20) bird.position.x = -20;
    });
  });

  return (
    <group ref={birdsRef}>
      {birds.map((b, i) => (
        <mesh key={i} position={[b.x, b.y, b.z]}>
          <coneGeometry args={[0.2, 0.5, 3]} />
          <meshBasicMaterial color="#000000" />
        </mesh>
      ))}
    </group>
  );
}

// Procedural Floating Islands
function Islands({ tier }: { tier: Tier }) {
  const islandCount = tier === "mobile" ? 2 : 5;
  const islands = useMemo(() => {
    return Array.from({ length: islandCount }).map((_, i) => ({
      position: [
        (seededRandom(i * 2.1) - 0.5) * 25,
        seededRandom(i * 2.2) * 8 - 2,
        (seededRandom(i * 2.3) - 0.5) * -20 - 10,
      ] as [number, number, number],
      scale: seededRandom(i * 2.4) * 1.5 + 0.5,
      rotation: [seededRandom(i * 2.5) * Math.PI, seededRandom(i * 2.6) * Math.PI, seededRandom(i * 2.7) * Math.PI] as [number, number, number],
    }));
  }, [islandCount]);

  return (
    <>
      {islands.map((island, i) => (
        <Float key={i} speed={1.5} rotationIntensity={0.5} floatIntensity={2}>
          <mesh position={island.position} rotation={island.rotation} scale={island.scale}>
            <dodecahedronGeometry args={[2, tier === "mobile" ? 0 : 1]} />
            <meshStandardMaterial color="#2d2215" roughness={0.9} />
          </mesh>
        </Float>
      ))}
    </>
  );
}

// Rotating Golden Rings
function Rings() {
  const ringsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ringsRef.current) {
      ringsRef.current.rotation.z = state.clock.elapsedTime * 0.1;
      ringsRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.05) * 0.2;
    }
  });

  return (
    <group ref={ringsRef} position={[0, 5, -15]}>
      <mesh>
        <torusGeometry args={[8, 0.05, 16, 100]} />
        <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={2} toneMapped={false} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 4]}>
        <torusGeometry args={[10, 0.02, 16, 100]} />
        <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={1} toneMapped={false} />
      </mesh>
    </group>
  );
}

export default function FantasyWorld() {
  const tier = useDeviceTier();
  const { camera } = useThree();
  const groupRef = useRef<THREE.Group>(null);

  // Adaptive Settings
  const particleCount = tier === "desktop" ? 5000 : tier === "tablet" ? 2500 : 1000;
  const cloudCount = tier === "mobile" ? 2 : 5;
  const showReflections = tier !== "mobile";

  // Camera & Mouse Parallax & Scroll Zoom
  useFrame((state) => {
    const scrollY = window.scrollY;
    const scrollZoom = Math.max(0, scrollY * 0.01);
    
    // Base camera position
    const targetZ = 10 - scrollZoom;
    
    // Mouse parallax
    const targetX = (state.pointer.x * 2);
    const targetY = (state.pointer.y * 2) + 2; // Offset slightly up

    // Smooth lerp camera
    camera.position.lerp(new THREE.Vector3(targetX, targetY, targetZ), 0.05);
    camera.lookAt(0, 2, -10);

    // Drifting overall group
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <>
      <color attach="background" args={["#050505"]} />
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 20, 10]} intensity={1.5} color="#f59e0b" />
      <pointLight position={[0, 5, -10]} intensity={50} color="#f59e0b" distance={50} />

      <group ref={groupRef}>
        {/* Particles */}
        <Sparkles count={particleCount} scale={30} size={2} color="#f59e0b" speed={0.4} noise={1} opacity={0.5} />

        {/* Islands */}
        <Islands tier={tier} />

        {/* Birds */}
        <Birds count={tier === "mobile" ? 5 : 15} />

        {/* Rings */}
        <Rings />

        {/* Clouds */}
        <Clouds material={THREE.MeshBasicMaterial}>
          {Array.from({ length: cloudCount }).map((_, i) => (
            <Cloud
              key={i}
              seed={i}
              position={[(seededRandom(i * 3.1) - 0.5) * 30, seededRandom(i * 3.2) * 5 + 5, (seededRandom(i * 3.3) - 0.5) * -20 - 15]}
              opacity={0.3}
              speed={0.1}
              color="#f59e0b"
            />
          ))}
        </Clouds>
      </group>

      {/* Water Reflection */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[100, 100]} />
        {showReflections ? (
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={512} // Lower resolution for performance
            mixBlur={1}
            mixStrength={80}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#0A0A0A"
            metalness={0.8}
            mirror={1}
          />
        ) : (
          <meshStandardMaterial color="#0A0A0A" roughness={1} metalness={0.5} />
        )}
      </mesh>

      {/* Postprocessing (Bloom) */}
      {tier !== "mobile" && (
        <EffectComposer>
          <Bloom luminanceThreshold={1} mipmapBlur intensity={1.5} />
        </EffectComposer>
      )}
    </>
  );
}
