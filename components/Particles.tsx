"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Particles({
  quantity = 30,
  className = "",
}: {
  quantity?: number;
  className?: string;
}) {
  const [particles, setParticles] = useState<{ id: number; size: number; x: number; y: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: quantity }).map((_, i) => ({
      id: i,
      size: Math.random() * 6 + 2, // 2px to 8px
      x: Math.random() * 100, // 0 to 100%
      y: Math.random() * 100, // 0 to 100%
      duration: Math.random() * 15 + 10, // 10s to 25s
      delay: Math.random() * -20, // Random negative delay to start mid-animation
    }));
    setParticles(generatedParticles);
  }, [quantity]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-emerald-400 blur-[1px] shadow-[0_0_12px_rgba(52,211,153,1)]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -800],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, 0.9, 0],
            scale: [1, Math.random() * 2 + 1, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
