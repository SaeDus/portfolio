import { GitBranch, ExternalLink } from 'lucide-react'
import type { Project } from '../types/Project'

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
      {project.image && (
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="aspect-video w-full border-b border-zinc-800 bg-zinc-950 object-cover"
        />
      )}

      <div className="flex flex-1 flex-col p-6">
        <div>
          <h2 className="text-xl font-semibold text-zinc-100">
            {project.title}
          </h2>

          <p className="mt-1 text-sm font-medium text-zinc-500">
            {project.subtitle}
          </p>
        </div>

        <p className="mt-3 leading-relaxed text-zinc-400">
          {project.description}
        </p>

        {project.technologies && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-300"
              >
                {technology}
              </span>
            ))}
          </div>
        )}

        {project.highlights && (
          <div className="mt-5">
            <h3 className="text-sm font-semibold text-zinc-200">
              Engineering Highlights
            </h3>

            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-400">
              {project.highlights.map((highlight) => (
                <li key={highlight}>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto flex gap-3 pt-6">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-400"
            >
              <GitBranch className="h-4 w-4" />
              GitHub
            </a>
          )}

          {project.externalUrl && (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:bg-zinc-800"
            >
              Details
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
