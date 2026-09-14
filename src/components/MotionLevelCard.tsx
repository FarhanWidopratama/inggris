"use client";

import { motion } from "framer-motion";
import LessonCard from "./LessonCard";
import type { Lesson } from "@/lib/types";
import { useState, useEffect } from "react";

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

export default function MotionLevelCard({ lesson, completed, locked, index }: { lesson: Lesson; completed?: boolean; locked?: boolean; index: number }) {
  const isMobile = useIsMobile();
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, rotateX: isMobile ? 0 : -8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={!locked && !isMobile ? { y: -8, rotateX: 3, rotateY: -2, scale: 1.02 } : undefined}
      whileTap={!locked && isMobile ? { scale: 0.97 } : undefined}
      style={{ perspective: isMobile ? 600 : 1000, transformStyle: "preserve-3d" }}
    >
      <div className="relative" style={{ transformStyle: "preserve-3d" }}>
        {/* glow behind */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 blur-xl transition"
          style={{ background: "radial-gradient(600px 200px at 50% 0%, rgba(16,185,129,0.18), transparent)" }}
          whileHover={{ opacity: 1 }}
        />
        <div className="relative">
          <LessonCard lesson={lesson} completed={completed} locked={locked} />
        </div>
      </div>
    </motion.div>
  );
}
