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

function FloatingLetter({ position, color }: { position: [number, number, number]; color: string }) {
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
        <meshStandardMaterial color={color} roughness={0.22} metalness={0.3} />
      </mesh>
    </Float>
  );
}

function FloatingRing({ position, color }: { position: [number, number, number]; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x += 0.006;
    ref.current.rotation.z += 0.004;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.6}>
      <mesh ref={ref} position={position} rotation={[0.6, 0, 0]}>
        <torusGeometry args={[0.42, 0.06, 16, 32]} />
        <meshStandardMaterial color={color} roughness={0.25} metalness={0.6} emissive={color} emissiveIntensity={0.12} />
      </mesh>
    </Float>
  );
}

function FloatingSphere({ position, color, scale }: { position: [number, number, number]; color: string; scale: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.1 + position[0] * 2) * 0.18;
  });
  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.9}>
      <mesh ref={ref} position={position} scale={scale} castShadow>
        <sphereGeometry args={[0.28, 24, 24]} />
        <meshStandardMaterial color={color} roughness={0.15} metalness={0.5} />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1.1, 6.2]} fov={36} />
      <ambientLight intensity={0.85} />
      <directionalLight position={[5, 7, 5]} intensity={1.35} castShadow shadow-mapSize={[2048, 2048]} shadow-bias={-0.0001} />
      <pointLight position={[-4, 2.5, -2]} intensity={0.75} color="#34d399" />
      <pointLight position={[4, -0.5, 3.5]} intensity={0.65} color="#38bdf8" />
      <pointLight position={[0, 3, -3]} intensity={0.45} color="#f472b6" />

      {/* 3 floating books - premium palette */}
      <FloatingBook position={[-1.65, 0.35, 0.2]} rotation={[0.18, -0.42, 0.09]} color="#059669" scale={1.05} />
      <FloatingBook position={[0.05, 0.92, -0.55]} rotation={[0.12, 0.18, -0.06]} color="#0284c7" scale={0.88} />
      <FloatingBook position={[1.58, -0.18, 0.4]} rotation={[-0.12, 0.48, 0.07]} color="#d97706" scale={0.92} />

      {/* Floating letter blocks - A B C with metallic */}
      <FloatingLetter position={[-0.95, -0.95, 1.05]} color="#0f172a" />
      <FloatingLetter position={[0.18, -1.12, 0.85]} color="#10b981" />
      <FloatingLetter position={[1.02, -0.82, 0.95]} color="#0ea5e9" />

      {/* Premium rings & spheres for depth */}
      <FloatingRing position={[-0.2, 0.15, -0.9]} color="#10b981" />
      <FloatingRing position={[1.1, 0.55, -0.7]} color="#38bdf8" />
      <FloatingSphere position={[-2.05, 0.85, -0.3]} color="#fbbf24" scale={0.7} />
      <FloatingSphere position={[2.0, 0.35, -0.5]} color="#34d399" scale={0.55} />
      <FloatingSphere position={[0.0, -1.35, 0.2]} color="#f472b6" scale={0.45} />

      <ContactShadows position={[0, -1.62, 0]} opacity={0.38} scale={9} blur={2.6} far={3.2} color="#0a0a0a" />
      <Environment preset="studio" />
      <fog attach="fog" args={["#0a0a0a", 8, 16]} />
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="relative h-[380px] w-full overflow-hidden rounded-[28px] bg-gradient-to-br from-zinc-900 via-[#0f172a] to-black sm:h-[460px]">
      {/* premium grid + vignette */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      {/* animated orbs - more premium */}
      <div className="pointer-events-none absolute -top-12 -right-12 h-64 w-64 rounded-full bg-emerald-500/25 blur-[55px]" />
      <div className="pointer-events-none absolute -bottom-14 -left-14 h-80 w-80 rounded-full bg-sky-500/20 blur-[65px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[80px]" />
      <Canvas shadows dpr={[1, 1.8]} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }} className="!absolute inset-0">
        <Scene />
      </Canvas>

      {/* overlay labels - glass premium */}
      <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold tracking-widest text-white backdrop-blur-md">
          ✨ 3D PREMIUM • 60 FPS • Three.js
        </div>
        <div className="hidden rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 px-3 py-1.5 text-xs font-black text-white shadow-lg sm:inline-flex">Interactive • Hover me</div>
      </div>
    </div>
  );
}
