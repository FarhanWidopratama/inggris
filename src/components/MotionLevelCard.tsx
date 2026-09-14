"use client";

import { motion } from "framer-motion";
import LessonCard from "./LessonCard";
import type { Lesson } from "@/lib/types";

export default function MotionLevelCard({ lesson, completed, locked, index }: { lesson: Lesson; completed?: boolean; locked?: boolean; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, rotateX: -8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={!locked ? { y: -8, rotateX: 3, rotateY: -2, scale: 1.02 } : undefined}
      style={{ perspective: 1000, transformStyle: "preserve-3d" }}
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
