"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/echo", label: "Echo" },
  { href: "/about", label: "About" },
  { href: "/waitlist", label: "Waitlist" },
];

export default function NavBar() {
  const pathname = usePathname();
  const isEchoPage = pathname.startsWith("/echo");

  return (
    <header className="pointer-events-none sticky top-0 z-40 flex justify-center px-4 pt-4">
      <div
        className="
          pointer-events-auto
          glass-panel
          flex w-full max-w-5xl items-center justify-between
          gap-6 px-5 py-3 md:px-7 md:py-3.5
        "
      >
        {/* BRAND BLOCK */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Orbital “ō” ring */}
          <motion.div
            className="
              relative flex h-9 w-9 items-center justify-center
              rounded-full
              bg-[conic-gradient(from_220deg,#e93cff,#6446ff,#38bdf8,#e93cff)]
              shadow-[0_0_32px_rgba(56,189,248,0.55)]
            "
            animate={{ rotate: [0, 6, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Inner mask to create ring */}
            <div className="h-[66%] w-[66%] rounded-full bg-[#020617] shadow-[0_0_10px_rgba(15,23,42,0.95)]" />

            {/* Echo wordmark inside when on /echo */}
            {isEchoPage && (
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-[10px] font-semibold tracking-[0.16em] text-slate-100">
                echo
              </span>
            )}
          </motion.div>

          {/* Brand text */}
          <div className="flex flex-col leading-tight">
            <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-200">
              {isEchoPage ? "Echo by Orrya" : "Orrya"}
            </span>
            <span className="hidden text-[11px] text-slate-400 md:block">
              Calm, spatial AI for high-signal work
            </span>
          </div>
        </div>

        {/* NAV LINKS */}
        <nav className="flex items-center">
          <ul className="flex items-center gap-4 md:gap-7 text-[13px] md:text-sm">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    className="
                      relative px-1 py-1.5
                      text-slate-300 transition
                      hover:text-slate-50
                    "
                  >
                    <span
                      className={
                        isActive
                          ? "bg-[linear-gradient(120deg,#e93cff,#a855f7,#38bdf8)] bg-clip-text text-transparent"
                          : ""
                      }
                    >
                      {item.label}
                    </span>

                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="
                          absolute -bottom-1 left-0 right-0 h-[2px]
                          rounded-full
                          bg-gradient-to-r from-fuchsia-400 via-violet-400 to-sky-400
                        "
                        transition={{ type: "spring", stiffness: 380, damping: 28 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
