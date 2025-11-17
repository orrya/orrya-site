"use client";

import { motion } from "framer-motion";
import FadeInSection from "../../components/FadeInSection";
import CinematicOrb from "../../components/CinematicOrb";

// ---------- INLINE COMPONENTS ----------

function FeatureStrip({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.01,
        borderColor: "rgba(236,72,153,0.42)",
        transition: { duration: 0.22 },
      }}
      className="
        rounded-2xl border border-white/10 bg-white/[0.04]
        px-6 py-5 sm:px-8 sm:py-6
        backdrop-blur
        shadow-[0_0_34px_rgba(15,23,42,0.9)]
      "
    >
      <h3 className="text-base font-semibold text-slate-50 sm:text-lg">
        {title}
      </h3>
      <p className="mt-2 text-sm text-slate-300 sm:text-[15px] leading-relaxed">
        {body}
      </p>
    </motion.div>
  );
}

function FlowCard({
  pill,
  pillLabel,
  time,
  title,
  body,
}: {
  pill: "green" | "amber" | "sky";
  pillLabel: string;
  time: string;
  title: string;
  body: string;
}) {
  const colorClass =
    pill === "green"
      ? "bg-emerald-400"
      : pill === "amber"
      ? "bg-amber-400"
      : "bg-sky-400";

  return (
    <motion.div
      whileHover={{
        y: -4,
        borderColor: "rgba(129,140,248,0.7)",
        backgroundColor: "rgba(15,23,42,0.75)",
        transition: { duration: 0.22 },
      }}
      className="
        rounded-2xl border border-white/10 bg-slate-900/70
        p-6 sm:p-7
        backdrop-blur
        shadow-[0_18px_45px_rgba(15,23,42,0.9)]
        transition
      "
    >
      <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
        <span className="inline-flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${colorClass}`} />
          {time}
        </span>
        <span className="text-[11px] uppercase tracking-[0.18em]">
          {pillLabel}
        </span>
      </div>

      <h3 className="text-base font-semibold text-slate-50 sm:text-lg">
        {title}
      </h3>
      <p className="mt-2 text-sm text-slate-300 leading-relaxed">
        {body}
      </p>
    </motion.div>
  );
}

// ---------- MAIN PAGE ----------

export default function EchoPage() {
  return (
    <main className="relative mx-auto flex max-w-5xl flex-col gap-32 px-6 pb-20 pt-16 md:pb-24 md:pt-20">
      {/* SPATIAL BACKDROP */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="
            absolute -left-40 top-[-40px] h-80 w-80 rounded-full
            bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.16),transparent_60%)]
            blur-2xl
          "
        />
        <div
          className="
            absolute right-[-140px] top-[140px] h-96 w-96 rounded-full
            bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.22),transparent_65%)]
            blur-2xl
          "
        />
        <div
          className="
            absolute inset-x-0 bottom-[-260px] h-80
            bg-[radial-gradient(ellipse_at_bottom,rgba(15,23,42,0.9),transparent_70%)]
          "
        />
      </div>

      {/* ---------- HERO ---------- */}
      <section>
        <FadeInSection className="grid gap-16 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
          {/* Copy side */}
          <motion.div
            className="space-y-7"
            initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
              Echo · Signal companion
            </p>

            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-4xl lg:text-[2.6rem]">
              Your week, shaped around{" "}
              <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-sky-400 bg-clip-text text-transparent">
                the conversations that matter.
              </span>
            </h1>

            <p className="max-w-xl text-[15px] leading-relaxed text-slate-300 sm:text-base">
              Echo sits above your inbox and calendar, scores what&apos;s
              rising, and turns noise into one calm, leader-ready narrative,
              helping you move priorities forward with less cognitive load.
            </p>

            <ul className="space-y-1.5 text-sm text-slate-300/90">
              <li>• Watches your inbox and calendar for high-signal threads.</li>
              <li>• Flags what&apos;s heating up before it becomes a fire.</li>
              <li>• Summarises your day into AM/PM briefs you can actually use.</li>
              <li>• Suggests calm replies and follow-ups when they matter most.</li>
            </ul>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="/waitlist"
                className="
                  inline-flex items-center justify-center rounded-full
                  bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500
                  px-6 py-2.5 text-sm font-medium text-white
                  shadow-[0_0_32px_rgba(129,140,248,0.85)]
                  hover:shadow-[0_0_52px_rgba(129,140,248,1)]
                  transition
                "
              >
                Join the Echo waitlist
              </a>

              <a
                href="/about"
                className="
                  inline-flex items-center justify-center rounded-full
                  border border-white/15 bg-white/5
                  px-6 py-2.5 text-sm font-medium text-slate-200
                  backdrop-blur-md
                  transition hover:border-fuchsia-400/70 hover:bg-white/10
                "
              >
                Learn how we work
              </a>
            </div>
          </motion.div>

          {/* Orb side */}
          <div className="relative flex justify-center md:justify-end">
            {/* Soft text-protection halo behind orb */}
            <div className="pointer-events-none absolute inset-10 rounded-full bg-slate-950/70 blur-2xl" />
            <motion.div
              className="pointer-events-none select-none relative"
              animate={{ y: [-10, 6, -4, 10, -8, 0, -10], opacity: [0.98, 1, 0.98] }}
              transition={{
                duration: 22,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            >
              <CinematicOrb size={420} />
            </motion.div>

            {/* Small floating pill for extra intelligence detail */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.55, ease: "easeOut" }}
              className="
                pointer-events-none absolute -bottom-6 left-1/2 w-52
                -translate-x-1/2 rounded-2xl border border-white/15 bg-white/10
                px-4 py-2.5 text-[11px] text-slate-100 shadow-[0_0_26px_rgba(15,23,42,0.9)]
                backdrop-blur
              "
            >
              <p className="uppercase tracking-[0.18em] text-slate-300">
                Above your inbox
              </p>
              <p className="mt-1 text-[11px] text-slate-100/90">
                Watches signal, not just volume — and compresses it into one narrative.
              </p>
            </motion.div>
          </div>
        </FadeInSection>
      </section>

     {/* ---------- UNDER THE HOOD ---------- */}
<section className="mt-4">
  <FadeInSection className="space-y-10">
    <div className="space-y-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
        Under the hood
      </p>
      <h2 className="text-2xl font-semibold text-slate-50 sm:text-[1.65rem]">
        What Echo does for you — quietly, all day.
      </h2>
      <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-[15px]">
        Echo plugs into the reality of your work: meetings, emails,
        threads, decisions. Then it quietly turns that chaos into a
        single, calm stream of understanding.
      </p>
    </div>

          <div className="space-y-5">
            <FeatureStrip
              title="Inbox watch"
              body="Echo monitors every thread in real time — urgency, tone, timing, and hidden escalation patterns — surfacing only what actually matters."
            />
            <FeatureStrip
              title="Smart categoriser"
              body="Threads are grouped by consequence, relationship, and momentum, so your inbox starts to feel predictable instead of chaotic."
            />
            <FeatureStrip
              title="Draft-ready replies"
              body="When something heats up, Echo prepares a calm, context-aware reply you can send immediately or refine in seconds."
            />
            <FeatureStrip
              title="Daily AM/PM summaries"
              body="Twice a day, Echo compresses noise into one leader-ready narrative with actions, risks, and what moved since yesterday."
            />
          </div>
        </FadeInSection>
      </section>

      {/* ---------- FLOW / DAY WITH ECHO ---------- */}
      <section>
        <FadeInSection className="space-y-10">
          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
              Flow
            </p>
            <h2 className="text-2xl font-semibold text-slate-50 sm:text-[1.65rem]">
              A day with Echo.
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-[15px]">
              Echo doesn&apos;t replace your judgment. It gives your judgment
              a clearer surface to stand on — from the moment you wake up to the
              moment you switch off.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <FlowCard
              pill="green"
              pillLabel="AM brief"
              time="07:45"
              title="Wake up to the real day."
              body="Echo distills your most consequential threads into a five-sentence executive overview — not a wall of notifications."
            />

            <FlowCard
              pill="amber"
              pillLabel="During the day"
              time="13:10"
              title="Inbox watch & nudges."
              body="Echo keeps an eye on new threads, surfacing what’s heating up and suggesting calm, outcomes-focused replies when you need them."
            />

            <FlowCard
              pill="sky"
              pillLabel="PM summary"
              time="21:00"
              title="Close the loop. Sleep clear."
              body="A short closure brief — loops closed, risks surfaced, and ideas parked for tomorrow so your brain can switch off."
            />
          </div>
        </FadeInSection>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="pb-4 md:pb-6">
        <FadeInSection className="space-y-6 text-center">
          <h2 className="text-2xl font-semibold text-slate-50 sm:text-[1.8rem]">
            Quiet AI for leaders who think deeply.
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-[15px]">
            Join the early access list and be among the first to experience
            Echo&apos;s quiet, high-signal intelligence layer — built for
            founders, executives and chiefs of staff who care more about signal
            than noise.
          </p>

          <div className="pt-2">
            <a
              href="/waitlist"
              className="
                inline-flex items-center justify-center rounded-full
                bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500
                px-7 py-3 text-sm font-medium text-white
                shadow-[0_0_40px_rgba(129,140,248,0.9)]
                hover:shadow-[0_0_60px_rgba(129,140,248,1)]
                transition
              "
            >
              Join the Echo waitlist
            </a>
          </div>
        </FadeInSection>
      </section>
    </main>
  );
}
