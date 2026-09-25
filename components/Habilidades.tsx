"use client";

import { motion } from "framer-motion";
import Starfield from "@/components/Starfield";
import {
  SiPython, SiFastapi, SiSqlalchemy, SiPostgresql, SiDocker,
  SiGit, SiReact, SiNextdotjs, SiTypescript,
  SiOpenjdk, SiSpring, SiSpringboot, SiAngular,
} from "react-icons/si";

const skills = [
  { name: "Python", icon: SiPython },
  { name: "FastAPI", icon: SiFastapi },
  { name: "SQLAlchemy", icon: SiSqlalchemy },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: SiGit },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Java", icon: SiOpenjdk },
  { name: "Spring", icon: SiSpring },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "Angular", icon: SiAngular },
];

export default function Habilidades() {
  return (
    <motion.section
      id="habilidades"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-6 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <Starfield />
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-amber-400">Skills</h2>
        <div className="mt-8 flex max-w-4xl flex-wrap justify-center gap-x-30git a gap-y-8">
          {skills.map(({ name, icon: Icon }) => (
            <div key={name} className="flex flex-col items-center gap-4 text-gray-300 transition-colors hover:text-amber-400">
              <Icon size={80} />
              <span className="text">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}