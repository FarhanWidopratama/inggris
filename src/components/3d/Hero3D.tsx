"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, ContactShadows, Environment } from "@react-three/drei";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(max-width: 640px)");
    const onChange = () => setIsMobile(m.matches);
    onChange();
    m.addEventListener("change", onChange);
    return () => m.removeEventListener("change", onChange);
  }, []);
  return isMobile;
}

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

function Scene({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, isMobile ? 1.0 : 1.1, isMobile ? 5.6 : 6.2]} fov={isMobile ? 42 : 36} />
      <ambientLight intensity={isMobile ? 0.9 : 0.85} />
      <directionalLight position={[5, 7, 5]} intensity={1.35} castShadow shadow-mapSize={isMobile ? [1024, 1024] as never : [2048, 2048] as never} shadow-bias={-0.0001} />
      <pointLight position={[-4, 2.5, -2]} intensity={0.75} color="#34d399" />
      <pointLight position={[4, -0.5, 3.5]} intensity={0.65} color="#38bdf8" />
      {!isMobile && <pointLight position={[0, 3, -3]} intensity={0.45} color="#f472b6" />}

      {/* 3 floating books - positions responsive for 375px */}
      <FloatingBook position={isMobile ? [-1.15, 0.25, 0.2] : [-1.65, 0.35, 0.2]} rotation={[0.18, -0.42, 0.09]} color="#059669" scale={isMobile ? 0.82 : 1.05} />
      <FloatingBook position={isMobile ? [0.0, 0.75, -0.5] : [0.05, 0.92, -0.55]} rotation={[0.12, 0.18, -0.06]} color="#0284c7" scale={isMobile ? 0.72 : 0.88} />
      <FloatingBook position={isMobile ? [1.15, -0.15, 0.3] : [1.58, -0.18, 0.4]} rotation={[-0.12, 0.48, 0.07]} color="#d97706" scale={isMobile ? 0.74 : 0.92} />

      {/* Floating letter blocks - tighter on mobile */}
      <FloatingLetter position={isMobile ? [-0.75, -0.85, 1.0] : [-0.95, -0.95, 1.05]} color="#0f172a" />
      <FloatingLetter position={isMobile ? [0.15, -1.0, 0.8] : [0.18, -1.12, 0.85]} color="#10b981" />
      <FloatingLetter position={isMobile ? [0.82, -0.72, 0.9] : [1.02, -0.82, 0.95]} color="#0ea5e9" />

      {/* Premium rings & spheres - hide extra on mobile for perf */}
      <FloatingRing position={[-0.2, 0.15, -0.9]} color="#10b981" />
      {!isMobile && <FloatingRing position={[1.1, 0.55, -0.7]} color="#38bdf8" />}
      <FloatingSphere position={isMobile ? [-1.45, 0.7, -0.3] : [-2.05, 0.85, -0.3]} color="#fbbf24" scale={isMobile ? 0.55 : 0.7} />
      {!isMobile && <FloatingSphere position={[2.0, 0.35, -0.5]} color="#34d399" scale={0.55} />}
      <FloatingSphere position={[0.0, -1.35, 0.2]} color="#f472b6" scale={isMobile ? 0.38 : 0.45} />

      <ContactShadows position={[0, -1.62, 0]} opacity={isMobile ? 0.28 : 0.38} scale={isMobile ? 7 : 9} blur={isMobile ? 2.2 : 2.6} far={3.2} color="#0a0a0a" />
      <Environment preset={isMobile ? "city" : "studio"} />
      {!isMobile && <fog attach="fog" args={["#0a0a0a", 8, 16]} />}
    </>
  );
}

export default function Hero3D() {
  const isMobile = useIsMobile();
  // Reduce DPR & disable shadows on low-end mobile for perf + heat
  const dpr: [number, number] = isMobile ? [1, 1.25] : [1, 1.8];
  return (
    <div className="relative h-[320px] w-full overflow-hidden rounded-[24px] bg-gradient-to-br from-zinc-900 via-[#0f172a] to-black sm:h-[460px] sm:rounded-[28px]">
      {/* premium grid + vignette */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      {/* animated orbs - more premium */}
      <div className="pointer-events-none absolute -top-12 -right-12 h-48 w-48 rounded-full bg-emerald-500/25 blur-[45px] sm:h-64 sm:w-64 sm:blur-[55px]" />
      <div className="pointer-events-none absolute -bottom-14 -left-14 h-56 w-56 rounded-full bg-sky-500/20 blur-[45px] sm:h-80 sm:w-80 sm:blur-[65px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[60px] sm:h-72 sm:w-72 sm:blur-[80px]" />
      <Canvas
        shadows={!isMobile}
        dpr={dpr}
        gl={{ antialias: !isMobile, alpha: true, powerPreference: isMobile ? "low-power" : "high-performance" }}
        className="!absolute inset-0"
        onCreated={({ gl }) => { gl.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 1.8)); }}
      >
        <Scene isMobile={isMobile} />
      </Canvas>

      {/* overlay labels - glass premium, responsive */}
      <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 sm:bottom-4 sm:left-4 sm:right-4">
        <div className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-bold tracking-widest text-white backdrop-blur-md sm:px-3 sm:py-1.5 sm:text-xs">
          ✨ 3D • {isMobile ? "Tap drag" : "Drag to rotate"}
        </div>
        <div className="rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 px-2.5 py-1 text-[10px] font-black text-white shadow-lg sm:px-3 sm:py-1.5 sm:text-xs">{isMobile ? "Mobile opt" : "60 FPS • Hover me"}</div>
      </div>
    </div>
  );
}
