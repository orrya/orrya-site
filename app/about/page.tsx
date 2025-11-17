"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CinematicOrb from "../../components/CinematicOrb";

// -------------------- SHARED COMPONENTS --------------------

function AboutOrb() {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      animate={{
        y: [-8, 6, -4, 10, -6, 0, -8], // organic, imperfect motion
        opacity: [0.97, 1, 0.97],
      }}
      transition={{
        duration: 24,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Soft mask behind orb — reduced intensity */}
      <div className="pointer-events-none absolute inset-8 rounded-full bg-slate-950/42 blur-2xl" />
      <div className="relative opacity-90">
        <CinematicOrb size={340} />
      </div>
    </motion.div>
  );
}

interface OrryaCardProps {
  children: ReactNode;
  className?: string;
}

function OrryaCard({ children, className = "" }: OrryaCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.012,
        borderColor: "rgba(236,72,153,0.35)",
        transition: { duration: 0.25 },
      }}
      className={`
        rounded-3xl border border-white/10 bg-white/[0.045]
        px-7 py-6 sm:px-8 sm:py-7
        shadow-[0_0_34px_rgba(15,23,42,0.75)]
        backdrop-blur-md
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

function PillarCard({ title, body }: { title: string; body: string }) {
  return (
    <OrryaCard>
      <h3 className="text-base font-semibold text-slate-50">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">{body}</p>
    </OrryaCard>
  );
}

function ProductCard({
  status,
  name,
  tagline,
  body,
}: {
  status: "Live" | "Next" | "In development" | "Coming";
  name: string;
  tagline: string;
  body: string;
}) {
  const statusColor =
    status === "Live"
      ? "bg-emerald-400/85 text-emerald-950"
      : status === "Next"
      ? "bg-sky-400/85 text-sky-950"
      : "bg-slate-400/85 text-slate-950";

  return (
    <OrryaCard className="flex flex-col justify-between">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
            {tagline}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-slate-50">{name}</h3>
        </div>
        <span
          className={`
            inline-flex items-center rounded-full px-3 py-1
            text-[11px] font-medium uppercase tracking-[0.18em]
            ${statusColor}
          `}
        >
          {status}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{body}</p>
    </OrryaCard>
  );
}

// -------------------- PAGE --------------------

export default function AboutPage() {
  return (
    <main className="relative mx-auto max-w-6xl px-6 pb-20 pt-20 md:pb-24 md:pt-28">
      {/* Global spatial background gradients (reduced opacity) */}
      <div className="pointer-events-none absolute -left-40 top-0 -z-10 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.12),_transparent_65%)] blur-2xl" />
      <div className="pointer-events-none absolute -right-32 top-64 -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_65%)] blur-2xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-[-260px] -z-10 h-80 bg-[radial-gradient(ellipse_at_bottom,_rgba(15,23,42,0.7),_transparent_70%)]" />

      <div className="space-y-20 md:space-y-24">
        {/* ---------- 1. ORRYA HERO ---------- */}
        <section>
          <motion.div
            className="grid gap-14 md:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] md:items-center"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Copy */}
            <div className="space-y-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                Orrya · The Quiet Intelligence Layer
              </p>

              <h1 className="text-3xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-4xl lg:text-[2.55rem]">
                We build{" "}
                <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-sky-400 bg-clip-text text-transparent">
                  quiet intelligence
                </span>{" "}
                for people who think deeply.
              </h1>

              <p className="max-w-xl text-[15px] leading-relaxed text-slate-300 sm:text-base">
                Orrya creates tools that restore mental space, protect
                attention, and help you turn scattered signals into clear, human
                understanding. We believe technology should make life feel
                quieter — not louder.
              </p>
            </div>

            {/* Orb + pill */}
            <div className="relative flex justify-center md:justify-end">
              <AboutOrb />

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
                className="
                  pointer-events-none absolute right-1 top-6 w-60
                  rounded-2xl border border-white/15 bg-white/10
                  px-4 py-3 text-xs text-slate-100
                  shadow-[0_0_26px_rgba(15,23,42,0.75)]
                  backdrop-blur
                "
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-300">
                  Quiet intelligence
                </p>
                <p className="mt-2 text-[11px] leading-relaxed text-slate-100/90">
                  Turning scattered signals into one calm, executive-ready view
                  of what matters most.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ---------- 2. ORRYA MISSION (balanced panel) ---------- */}
        <section>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-slate-950/60 px-6 py-10 sm:px-8 md:px-12 md:py-14">
            {/* softened background gradients */}
            <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.12),_transparent_65%)] blur-2xl" />
            <div className="pointer-events-none absolute -right-16 bottom-[-40px] h-52 w-52 rounded-full bg-[radial-gradient(circle_at_bottom,_rgba(56,189,248,0.14),_transparent_60%)] blur-2xl" />

            <div className="relative space-y-6 md:space-y-8">
              <motion.p
                className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                Mission
              </motion.p>

              <motion.h2
                className="text-2xl font-semibold text-slate-50 sm:text-[1.9rem]"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                Modern work overwhelms even the strongest minds.
              </motion.h2>

              <motion.p
                className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-[15px]"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                Information accelerates. Expectations compound. And people are
                asked to decide faster with less space to think.
              </motion.p>

              <motion.p
                className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-[15px]"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                Orrya exists to change that. We build companions that sit above
                the noise — not to replace human intuition, but to extend it.
                Tools that clear the fog, deepen presence, and give people back
                what modern life steals most:{" "}
                <span className="text-slate-100">
                  the space to be themselves again.
                </span>
              </motion.p>
            </div>
          </div>
        </section>

        {/* ---------- 3. QUIET INTELLIGENCE PHILOSOPHY ---------- */}
        <section className="mt-10 md:mt-16">
          <div className="space-y-6 md:space-y-7">
            <motion.p
              className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              Philosophy
            </motion.p>

            <motion.h2
              className="text-2xl font-semibold text-slate-50 sm:text-[1.9rem]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              Quiet intelligence is the foundation of everything we make.
            </motion.h2>

            <motion.p
              className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-[15px]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              We believe clarity is a form of freedom. Calm is a form of power.
              And intelligence should feel like a quiet friend — not another
              competing voice.
            </motion.p>

            <ul className="space-y-2.5 text-sm text-slate-300">
              {[
                "Technology should serve your life — not run it.",
                "Narrative beats noise.",
                "Presence is productivity.",
                "Tools should adapt to humans — not the other way around.",
                "The mind works best when it can breathe.",
              ].map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.06 * idx,
                  }}
                >
                  • {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- 4. ECHO — FIRST EXPRESSION ---------- */}
        <section className="mt-6 md:mt-10">
          <div className="space-y-6">
            <motion.p
              className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              Echo · First product
            </motion.p>

            <motion.h2
              className="text-2xl font-semibold text-slate-50 sm:text-[2rem]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              Echo is what happens when intelligence meets real life — quietly,
              all day.
            </motion.h2>

            <motion.p
              className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-[15px]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              Echo watches your inbox and calendar with human-level sensitivity,
              surfaces what truly matters, and gives you a narrative of your day
              that you can actually think with.
            </motion.p>

            <motion.p
              className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-[15px]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              It&apos;s not another stream of alerts — it&apos;s a clarity
              engine. Designed for leaders, founders, and operators navigating
              high-signal environments. Echo is the first expression of
              Orrya&apos;s mission to make modern work more human, not less.
            </motion.p>
          </div>
        </section>

        {/* ---------- 5. PILLARS GRID ---------- */}
        <section>
          <div className="space-y-8 md:space-y-10">
            <div className="space-y-3">
              <motion.p
                className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                Pillars
              </motion.p>

              <motion.h2
                className="text-2xl font-semibold text-slate-50 sm:text-[1.8rem]"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                How we think about intelligence, work, and the mind.
              </motion.h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3 md:gap-8">
              <PillarCard
                title="Clarity beats noise."
                body="Leaders don’t need dashboards — they need understanding."
              />
              <PillarCard
                title="Workflows must fit humans."
                body="Systems should adapt to cognitive reality, not punish it."
              />
              <PillarCard
                title="Narrative is how we process complexity."
                body="Information becomes meaningful only when it becomes story."
              />
              <PillarCard
                title="Calm is a form of power."
                body="The most important signals don’t need to shout."
              />
              <PillarCard
                title="Freedom through intelligence."
                body="Every Orrya companion moves people closer to time, emotional, and creative freedom."
              />
            </div>
          </div>
        </section>

        {/* ---------- 6. WHY ORRYA EXISTS ---------- */}
<section className="mt-10 md:mt-16">
  <div className="space-y-6">
    <motion.p
      className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
    >
      Why Orrya exists
    </motion.p>

    <motion.h2
      className="text-2xl font-semibold text-slate-50 sm:text-[1.9rem]"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
    >
      We built Orrya to defend your mental space.
    </motion.h2>

    <motion.p
      className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-[15px]"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
    >
      The modern world is full of interruptions disguised as importance.
      Echo — and every Orrya companion — clears the dust so you can see
      what truly matters.
    </motion.p>

    <motion.p
      className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-[15px]"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
    >
      When the mind has space, everything improves: your decisions, your
      relationships, your work, your clarity. Orrya helps people live
      intentionally, not reactively.
    </motion.p>
  </div>
</section>


        {/* ---------- 7. ORRYA UNIVERSE ---------- */}
        <section>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-slate-950/60 px-6 py-10 sm:px-8 md:px-10 md:py-12">
            {/* softened gradients inside */}
            <div className="pointer-events-none absolute left-[-60px] top-[-40px] h-56 w-56 rounded-full bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_65%)] blur-2xl" />
            <div className="pointer-events-none absolute right-[-40px] bottom-[-40px] h-60 w-60 rounded-full bg-[radial-gradient(circle_at_bottom,_rgba(244,114,182,0.14),_transparent_65%)] blur-2xl" />

            <div className="relative space-y-10">
              <div className="space-y-3">
                <motion.p
                  className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55 }}
                >
                  The Orrya universe
                </motion.p>

                <motion.h2
                  className="text-2xl font-semibold text-slate-50 sm:text-[1.8rem]"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55 }}
                >
                  A family of quiet, human-first intelligence companions.
                </motion.h2>

                <motion.p
                  className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-[15px]"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55 }}
                >
                  Each Orrya product supports a different part of the human
                  experience — signal, memory, identity, and action.
                </motion.p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 md:gap-10">
                <ProductCard
                  status="Live"
                  name="Echo"
                  tagline="Signal companion"
                  body="Watches your week, finds what matters, and turns noise into narrative so you can move with calm, confident focus."
                />
                <ProductCard
                  status="Next"
                  name="EchoJar"
                  tagline="Memory companion"
                  body="Captures meaning from your days and turns it into a living archive of who you're becoming — so your life doesn’t disappear into feeds and files."
                />
                <ProductCard
                  status="In development"
                  name="ShadowSelf"
                  tagline="Identity companion"
                  body="A working twin that preserves your voice, extends your presence, and frees you from routine digital work."
                />
                <ProductCard
                  status="Coming"
                  name="SnapTask"
                  tagline="Action companion"
                  body="A lightweight automation layer that handles the tasks that drain your time — without draining your energy."
                />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- 8. FOUNDER NOTE + CTA ---------- */}
        <section>
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
            {/* Origin Note */}
<OrryaCard>
  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
    Origins
  </p>

  <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-[15px]">
    Orrya emerged from constraint, not abundance. It began quietly—built in 
    the still hours, shaped with limited tools, and driven by a need for clarity in a world that had grown overwhelmingly loud.
  </p>

  <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-[15px]">
    From those beginnings came a principle: intelligence should feel calm, 
    not consuming. Technology should return attention, not drain it. And the 
    most meaningful tools often originate not from excess, but from necessity.
  </p>

  <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-[15px]">
    Orrya exists to defend mental space—to turn scattered signals into 
    something steady and human. If these companions help even one person move 
    through life with more clarity, presence, and intention, the mission is 
    already fulfilled.
  </p>

  <p className="mt-4 text-sm text-slate-400">Echo is only the beginning.</p>
  <p className="mt-1 text-sm text-slate-500">— Orrya</p>
</OrryaCard>

            {/* Invitation / CTA */}
            <div className="space-y-4 md:pl-2">
              <motion.p
                className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                Invitation
              </motion.p>

              <motion.h3
                className="text-xl font-semibold text-slate-50 sm:text-[1.4rem]"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                Explore the first layer of quiet intelligence.
              </motion.h3>

              <motion.p
                className="max-w-md text-sm leading-relaxed text-slate-300 sm:text-[15px]"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                Echo is live in early access. More companions are coming. If
                you&apos;re building, leading, or operating in high-signal
                environments, Orrya was made for you.
              </motion.p>

              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  href="/echo"
                  className="
                    inline-flex items-center justify-center rounded-full
                    bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500
                    px-6 py-2.5 text-sm font-medium text-white
                    shadow-[0_0_34px_rgba(129,140,248,0.85)]
                    transition
                    hover:shadow-[0_0_52px_rgba(129,140,248,1)]
                  "
                >
                  Explore Echo
                </Link>

                <Link
                  href="/waitlist"
                  className="
                    inline-flex items-center justify-center rounded-full
                    border border-white/15 bg-white/5
                    px-6 py-2.5 text-sm font-medium text-slate-200
                    backdrop-blur-md
                    transition
                    hover:border-fuchsia-400/70 hover:bg-white/10
                  "
                >
                  Join the Orrya circle
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
