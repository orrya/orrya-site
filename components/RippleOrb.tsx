"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

type RippleOrbProps = {
  size?: number;
  className?: string;
};

export default function RippleOrb({ size = 300, className }: RippleOrbProps) {
  return (
    <div
      className={clsx(
        "relative aspect-square overflow-hidden rounded-[2.4rem] border border-white/10 bg-black/40 backdrop-blur-2xl shadow-[0_30px_120px_rgba(15,23,42,1)]",
        className
      )}
      style={{ width: size }}
    >
      {/* subtle inner vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.18),transparent_55%),radial-gradient(circle_at_80%_90%,rgba(15,23,42,0.9),#020617_80%)]" />

      {/* main orb core */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_30%_20%,#fdf2ff,rgba(248,250,252,0.9),transparent_45%),radial-gradient(circle_at_30%_10%,#f472b6,#e879f9_38%,#a855f7_60%,#38bdf8_90%)] shadow-[0_0_80px_rgba(129,140,248,0.85)]"
        animate={{
          y: [-6, 6, -6],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* soft specular highlight ring */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[74%] w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30/5"
        style={{
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.12), 0 0 48px rgba(248,250,252,0.35)",
        }}
        animate={{ opacity: [0.35, 0.55, 0.35] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* concentric ripples */}
      {[1.05, 1.3, 1.55].map((scale, index) => (
        <motion.div
          key={scale}
          className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
          style={{ scale }}
          animate={{ opacity: [0.04, 0.18, 0.04] }}
          transition={{
            duration: 12 + index * 3,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* subtle inner grid / signal field */}
      <div className="pointer-events-none absolute inset-[18%] rounded-[1.8rem] border border-white/8 bg-black/20 backdrop-blur-xl">
        <div className="absolute inset-0 opacity-35">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.16)_1px,transparent_1px)] bg-[size:44px_44px]" />
        </div>
      </div>
    </div>
  );
}
