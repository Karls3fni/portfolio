"use client";

import { motion } from "framer-motion";
import Starfield from "@/components/Starfield";

export default function SobreMi() {
  return (
    <motion.section
      id="sobre-mi"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Starfield />
      <h2 className="text-4xl font-bold text-amber-400">About me</h2>
     <div className="mt-4 max-w-xl space-y-4 text-left text-lg text-gray-300">
  <p>
    I&apos;m Manuel, a software developer who thrives on challenges and personal
    growth. Curiosity has always been my strongest trait — when I&apos;m taught
    something new, I ask every question I can think of until I fully
    understand it, and then dig deeper on my own.
  </p>
  <p>
    I&apos;ve built and shipped real projects in team settings, from a
    three-person startup-style project as my final degree work to a
    professional internship at a banking company, where I developed a
    RESTful API from scratch.
  </p>
  <p>
    Being an assertive person, I&apos;m proud to say I act as a bridge
    between colleagues, fostering a work environment that&apos;s close-knit,
    friendly, and professional.
  </p>
</div>
    </motion.section>
  );
}