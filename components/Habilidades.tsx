"use client";

import { motion } from "framer-motion";
import Starfield from "./Starfield";

const skills = [
  "Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "Docker",
  "SQL", "Git", "React", "Next.js", "TypeScript",
];

export default function Habilidades() {
  return (

    <motion.section
          id="habilidades"
          className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Starfield />
          <h2 className="text-4xl font-bold text-amber-400">About me</h2>
          <div className="mt-4 max-w-xl space-y-4 text-left text-lg text-gray-300"></div>
      <h2 className="text-4xl font-bold text-amber-400">Skills</h2>
      <div className="mt-6 flex max-w-2xl flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-amber-400/40 px-4 py-2 text-gray-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.section>
  );
}