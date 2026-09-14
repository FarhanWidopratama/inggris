"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, ContactShadows, Environment } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function FloatingBook({ position, rotation, color, scale = 1 }: { position: [number, number, number]; rotation: [number, number, number]; color: string; scale?: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.008;
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
  });
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <group ref={ref} position={position} rotation={rotation} scale={scale}>
        {/* Book body */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[1.2, 1.6, 0.2]} />
          <meshStandardMaterial color={color} roughness={0.4} metalness={0.1} />
        </mesh>
        {/* Book spine */}
        <mesh position={[-0.6, 0, 0]}>
          <boxGeometry args={[0.12, 1.6, 0.22]} />
          <meshStandardMaterial color={new THREE.Color(color).multiplyScalar(0.7)} />
        </mesh>
        {/* Pages */}
        <mesh position={[0.05, 0, 0.11]}>
          <boxGeometry args={[1.1, 1.5, 0.02]} />
          <meshStandardMaterial color="#fffef5" />
        </mesh>
        {/* Shine */}
        <mesh position={[0, 0, 0.12]} rotation={[0, 0, 0]}>
          <planeGeometry args={[0.8, 0.3]} />
          <meshStandardMaterial color="white" transparent opacity={0.18} />
        </mesh>
      </group>
    </Float>
  );
}

function FloatingLetter({ letter, position, color }: { letter: string; position: [number, number, number]; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.3;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.2 + position[0]) * 0.15;
  });
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={ref} position={position} castShadow>
        <boxGeometry args={[0.45, 0.45, 0.08]} />
        <meshStandardMaterial color={color} roughness={0.3} />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1.2, 6]} fov={38} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 4]} intensity={1.2} castShadow shadow-mapSize={[1024, 1024]} />
      <pointLight position={[-3, 2, -2]} intensity={0.6} color="#38bdf8" />
      <pointLight position={[3, -1, 3]} intensity={0.5} color="#fb7185" />

      {/* 3 floating books - representing levels */}
      <FloatingBook position={[-1.6, 0.3, 0]} rotation={[0.2, -0.4, 0.1]} color="#10b981" scale={1} />
      <FloatingBook position={[0, 0.8, -0.6]} rotation={[0.1, 0.2, -0.05]} color="#0ea5e9" scale={0.85} />
      <FloatingBook position={[1.5, -0.2, 0.3]} rotation={[-0.15, 0.5, 0.08]} color="#f59e0b" scale={0.9} />

      {/* Floating letter blocks - A B C */}
      <FloatingLetter letter="A" position={[-0.9, -0.9, 1]} color="#111827" />
      <FloatingLetter letter="B" position={[0.2, -1.1, 0.8]} color="#059669" />
      <FloatingLetter letter="C" position={[1.0, -0.8, 0.9]} color="#0284c7" />

      <ContactShadows position={[0, -1.6, 0]} opacity={0.32} scale={8} blur={2.8} far={3} />
      <Environment preset="city" />
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="relative h-[360px] w-full overflow-hidden rounded-[28px] bg-gradient-to-br from-zinc-900 via-zinc-900 to-black sm:h-[420px]">
      {/* subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      {/* orb glows */}
      <div className="pointer-events-none absolute -top-10 -right-10 h-56 w-56 rounded-full bg-emerald-500/20 blur-[50px]" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-72 w-72 rounded-full bg-sky-500/15 blur-[60px]" />
      <Canvas shadows dpr={[1, 1.6]} gl={{ antialias: true, alpha: true }} className="!absolute inset-0">
        <Scene />
      </Canvas>

      {/* overlay labels */}
      <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <div className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold tracking-widest text-white backdrop-blur">
          3D • DRAG TO ROTATE (on desktop)
        </div>
        <div className="hidden rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-bold text-white sm:inline-flex">60 FPS • Three.js</div>
      </div>
    </div>
  );
}
