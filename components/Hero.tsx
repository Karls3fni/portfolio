"use client";

import { motion } from "framer-motion";
import Starfield from "@/components/Starfield";

export default function Hero() {
  return (
    <motion.section
    id="inicio"
    className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-6 pt-24 text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
      <Starfield />
    <h1 className="font-bold text-amber-400 text-[clamp(2rem,10vw,8rem)]">Manuel Vila</h1>
    <p className="mt-3 max-w-md text-amber-400 text-[clamp(1rem,4vw,2.5rem)]">
    Full Stack Developer.
    </p>
    </motion.section>
  );
}