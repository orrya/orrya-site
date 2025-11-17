import "./globals.css";
import type { Metadata } from "next";
import NavBar from "../components/NavBar";
import SiteFooter from "../components/Footer";

export const metadata: Metadata = {
  title: "Echo by Orrya",
  description:
    "Echo by Orrya — a quiet, spatial signal layer for leaders. Calm, cinematic AI that clears the noise.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-[#020617] text-slate-50 antialiased">
        {/* GLOBAL SPATIAL BACKGROUND */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          {/* Outer vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.4),transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9),#020617_72%)]" />

          {/* Purple glow */}
          <div className="absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(168,85,247,0.5)_0%,transparent_65%)] blur-3xl opacity-70" />

          {/* Blue glow */}
          <div className="absolute top-1/3 right-[-12rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,_rgba(56,189,248,0.4)_0%,transparent_65%)] blur-3xl opacity-70" />

          {/* Film grain */}
          <div className="noise-layer" />
        </div>

        {/* MAIN */}
        <div className="relative z-10 flex min-h-screen flex-col">
          <NavBar />

          <main className="flex-1 pt-8 md:pt-12 lg:pt-14">
            {children}
          </main>

          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
