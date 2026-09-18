import { GitBranch, ExternalLink } from 'lucide-react'

export function ProjectCard() {
  return (
    <article className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="text-xl font-semibold">
        Game Companion
      </h2>

      <p className="mt-2 text-zinc-400">
        Desktop companion framework for game-specific tools and plugins.
      </p>

      <div className="mt-6 flex gap-3">
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-400"
        >
          <GitBranch className="h-4 w-4" />
          Source
        </a>

        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium transition hover:bg-zinc-800"
        >
          <ExternalLink className="h-4 w-4" />
          Details
        </a>
      </div>
    </article>
  );
}
