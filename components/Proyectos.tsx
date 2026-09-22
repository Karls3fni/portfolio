import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Proyectos() {
  return (
    <section id="proyectos" className="min-h-screen p-6">
      <h2 className="text-2xl font-bold">Proyectos</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}