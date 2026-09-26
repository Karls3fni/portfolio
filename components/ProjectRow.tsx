import type { Project } from "@/data/projects";

export default function ProjectRow({ title, description, stack, repoUrl, reverse, imageUrl }: Project) {
  return (
    <div className={`flex flex-col items-center gap-6 md:flex-row ${reverse ? "md:flex-row-reverse" : ""}`}>
      <div className="flex h-40 flex-1 items-center justify-center rounded-lg border border-amber-400/30 bg-gradient-to-br from-amber-400/20 to-transparent text-amber-400">
        <img src={imageUrl} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className={`flex-1 text-left ${reverse ? "md:text-right" : ""}`}>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-gray-300">{description}</p>
        <div className={`mt-3 flex flex-wrap gap-2 ${reverse ? "md:justify-end" : ""}`}>
          {stack.map((tech) => (
            <span key={tech} className="rounded-full border border-amber-400/40 px-3 py-1 text-sm text-gray-200">
              {tech}
            </span>
          ))}
        </div>
        <a href={repoUrl} className="mt-3 inline-block text-amber-400 underline underline-offset-4">
          View repository →
        </a>
      </div>
    </div>
  );
}