import type { Project } from "@/data/projects";

export default function ProjectCard({ title, description, stack, repoUrl }: Project) {
  return (
    <article className="rounded-lg border p-5">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2">{description}</p>
      <ul className="mt-3 flex flex-wrap gap-2 text-sm">
        {stack.map((tech) => (
          <li key={tech} className="rounded bg-gray-100 px-2 py-1 text-gray-800">
            {tech}
          </li>
        ))}
      </ul>
      <a href={repoUrl} className="mt-4 inline-block underline">
        Ver repositorio
      </a>
    </article>
  );
}