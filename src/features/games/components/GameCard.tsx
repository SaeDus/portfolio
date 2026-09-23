import { GitBranch, ExternalLink } from 'lucide-react'
import type { Game } from '../types/Game'

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
      {game.image && (
        <img
          src={game.image}
          alt={`${game.title} preview`}
          className="aspect-video w-full border-b border-zinc-800 bg-zinc-950 object-cover"
        />
      )}

      <div className="flex flex-1 flex-col p-6">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-zinc-100">
            {game.title}
          </h2>

          <p className="mt-1 text-sm font-medium text-zinc-500">
            {game.genre}
          </p>

          <p className="text-sm text-zinc-500">
            {game.role}
          </p>
        </div>

        <p className="mt-4 text-sm leading-6 text-zinc-400">
          {game.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-300">
            {game.engine}
          </span>

          {game.platform && (
            <span className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-300">
              {game.platform}
            </span>
          )}

          <span className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-300">
            {game.status}
          </span>
        </div>


        {game.highlights && game.highlights.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-300">
              Engineering Highlights
            </h3>

            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-5 text-zinc-400">
              {game.highlights.map((highlight) => (
                <li key={highlight}>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        {(game.githubUrl || game.externalUrl) && (
          <div className="mt-auto flex gap-3 pt-6">
            {game.githubUrl && (
              <a
                href={game.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-400"
              >
                <GitBranch className="h-4 w-4" />
                GitHub
              </a>
            )}

            {game.externalUrl && (
              <a
                href={game.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:bg-zinc-800"
              >
                Details
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        )}

      </div>
    </article>
  );
}
