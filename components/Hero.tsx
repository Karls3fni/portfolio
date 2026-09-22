"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="inicio"
      className="flex min-h-screen flex-col items-center justify-center p-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-9xl font-bold text-amber-400">Manuel Vila</h1>
      <p className="mt-3 max-w-md text-4xl text-amber-400">
        Full Stack Developer.
      </p>
    </motion.section>
  );
}