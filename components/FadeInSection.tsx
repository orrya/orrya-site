"use client";

import { motion, useAnimation } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeInSection({
  children,
  className = "",
  delay = 0,
}: FadeInProps) {
  const controls = useAnimation();
  const pathname = usePathname();

  // Prevents “empty content” flash when rapidly navigating
  useEffect(() => {
    const startAnimation = setTimeout(() => {
      controls.start("visible");
    }, 10); // small debounce for instant mount

    return () => clearTimeout(startAnimation);
  }, [pathname, controls]);

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
