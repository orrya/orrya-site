"use client";

import { motion } from "framer-motion";
import FadeInSection from "../../components/FadeInSection";
import CinematicOrb from "../../components/CinematicOrb";

export default function WaitlistPage() {
  return (
    <div className="relative mx-auto flex max-w-3xl flex-col gap-20 px-6 pb-40 pt-8">

      {/* -------------------------------------------------------------------------------- */}
      {/* SPATIAL BACKDROP */}
      {/* -------------------------------------------------------------------------------- */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Left atmospheric glow */}
        <div
          className="
            absolute -left-40 top-0 h-96 w-96 rounded-full
            bg-[radial-gradient(circle_at_top_left,rgba(150,80,255,0.22),transparent_70%)]
            blur-[140px]
          "
        />

        {/* Bottom soft grounding */}
        <div
          className="
            absolute inset-x-0 bottom-[-180px] h-96
            bg-[radial-gradient(ellipse_at_bottom,rgba(10,15,28,0.85),transparent_60%)]
            blur-3xl
          "
        />
      </div>

      {/* -------------------------------------------------------------------------------- */}
      {/* FLOATING ORB (subtle, off-axis) */}
      {/* -------------------------------------------------------------------------------- */}
      <motion.div
        className="
          pointer-events-none absolute right-[-140px] top-[200px] z-0
          opacity-[0.68]
        "
        animate={{ y: [-10, 6, -4, 10, -8, 0, -10] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      >
        <CinematicOrb size={460} />
      </motion.div>

      {/* -------------------------------------------------------------------------------- */}
      {/* INTRO */}
      {/* -------------------------------------------------------------------------------- */}
      <section className="pt-12">
        <FadeInSection className="space-y-6 relative z-10">

          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400/80">
              Private Beta
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
              Join the Echo waitlist.
            </h1>
          </div>

          <p className="max-w-2xl text-lg leading-relaxed text-slate-300/90">
            We're onboarding founders, executives and chiefs of staff who operate
            in high-signal, high-pressure environments.
          </p>

        </FadeInSection>
      </section>

  {/* -------------------------------------------------------------------------------- */}
{/* FORM CARD */}
{/* -------------------------------------------------------------------------------- */}
<section>
  <motion.div
    initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true }}
    transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
  >
    <FadeInSection
      className="
        relative rounded-[2rem] border border-white/10 bg-white/[0.05] p-10
        backdrop-blur-xl overflow-hidden
        shadow-[0_0_65px_-12px_rgba(120,60,255,0.22)]
      "
    >
      <form className="relative space-y-7 z-10">

        {/* Name */}
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-sm text-slate-200">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="
              w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3
              text-sm text-slate-50 backdrop-blur placeholder-slate-400
              focus:border-fuchsia-400/60 focus:outline-none
            "
            placeholder="Alex Doe"
          />
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm text-slate-200">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="
              w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3
              text-sm text-slate-50 backdrop-blur placeholder-slate-400
              focus:border-fuchsia-400/60 focus:outline-none
            "
            placeholder="you@company.com"
          />
        </div>

        {/* Role */}
        <div className="space-y-1.5">
          <label htmlFor="role" className="text-sm text-slate-200">
            Role
          </label>
          <input
            id="role"
            name="role"
            className="
              w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3
              text-sm text-slate-50 backdrop-blur placeholder-slate-400
              focus:border-fuchsia-400/60 focus:outline-none
            "
            placeholder="Founder, COO, Chief of Staff…"
          />
        </div>

        {/* Context */}
        <div className="space-y-1.5">
          <label htmlFor="context" className="text-sm text-slate-200">
            How does your week currently feel?
          </label>
          <textarea
            id="context"
            name="context"
            rows={4}
            className="
              w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3
              text-sm text-slate-50 backdrop-blur placeholder-slate-400
              focus:border-fuchsia-400/60 focus:outline-none
            "
            placeholder="A short note about your work, tools and pain points."
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="
            w-full rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500
            px-6 py-3 text-sm font-medium text-white
            shadow-lg shadow-fuchsia-500/20 transition
            hover:shadow-fuchsia-500/40
          "
        >
          Request access
        </button>

      </form>
    </FadeInSection>
  </motion.div>
</section>

    </div>
  );
}
