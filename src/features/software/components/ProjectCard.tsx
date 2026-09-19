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
          className="aspect-video w-full bg-zinc-950 object-cover"
        />
      )}

      <div className="flex flex-1 flex-col p-6">
        <h2 className="text-xl font-semibold">
          {project.title}
        </h2>

        <p className="mt-2 text-zinc-400">
          {project.description}
        </p>

        <div className="mt-auto flex gap-3 pt-6">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-400"
            >
              <GitBranch className="h-4 w-4" />
              Source
            </a>
          )}

          {project.externalUrl && (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium transition hover:bg-zinc-800"
            >
              <ExternalLink className="h-4 w-4" />
              Details
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
