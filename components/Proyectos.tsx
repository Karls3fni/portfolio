import Starfield from "@/components/Starfield";
import ProjectRow from "@/components/ProjectRow";
import { projects } from "@/data/projects";

export default function Proyectos() {
  return (
    <section id="proyectos" className="relative min-h-screen overflow-hidden p-6 scroll-mt-24">
      <Starfield />
      <h2 className="text-4xl font-bold text-amber-400 text-center">Projects</h2>
      <div className="mx-auto mt-10 max-w-4xl space-y-16">
        {projects.map((project) => (
          <ProjectRow key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}