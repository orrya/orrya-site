export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-black/20 backdrop-blur-xl overflow-hidden">

      {/* ---------------------------------------------------------------------- */}
      {/* CINEMATIC TOP FADE (visible + premium) */}
      {/* ---------------------------------------------------------------------- */}
      <div
        className="
          pointer-events-none absolute inset-x-0 -top-[28px] h-[120px] z-20
          bg-gradient-to-b
          from-[#0f1627]/95 via-[#0f1627]/70 to-transparent
        "
      />

      {/* Soft ambient glow to tie the footer into the site's colour system */}
      <div
        className="
          pointer-events-none absolute inset-x-0 -top-[10px] h-[160px] z-10
          bg-[radial-gradient(circle_at_center,rgba(90,110,255,0.06),transparent_75%)]
          blur-2xl
        "
      />

      {/* ---------------------------------------------------------------------- */}
      {/* MAIN FOOTER BODY */}
      {/* ---------------------------------------------------------------------- */}
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-24 z-30">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Orrya */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.28em] text-slate-400">
              ORRYA
            </h3>
            <p className="mt-4 max-w-xs text-slate-300 leading-relaxed">
              Calm, spatial AI for high-signal work.
              Tools for leaders who think deeply, communicate clearly,
              and care more about signal than noise.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.28em] text-slate-400">
              PRODUCT
            </h3>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li><a href="/echo" className="hover:text-white">Echo</a></li>
              <li><a href="/waitlist" className="hover:text-white">Join waitlist</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.28em] text-slate-400">
              COMPANY
            </h3>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/press" className="hover:text-white">Press</a></li>
            </ul>
          </div>

          {/* Signal */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.28em] text-slate-400">
              SIGNAL
            </h3>
            <p className="mt-4 text-slate-300">
              <a href="mailto:hello@orrya.com" className="hover:text-white">
                hello@orrya.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 text-xs text-slate-500 sm:flex-row">
          <span>© 2025 Orrya. All rights reserved.</span>
          <span>Designed for quiet, high-signal work.</span>
        </div>
      </div>

    </footer>
  );
}
