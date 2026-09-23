import { GitBranch, ExternalLink } from 'lucide-react'

export function TitleCard() {
  return (
    <section
      id="title"
      className="mx-auto max-w-6xl px-8 py-12 my-24 rounded-xl border border-zinc-800 bg-zinc-900"
    >
      <h1 className="text-5xl font-bold tracking-tight">
        RJ Catterton
      </h1>

      <h2 className="mt-4 text-lg text-zinc-400">
        Gameplay Programmer • Software Engineer • Technical QA
      </h2>

      <p className="mt-3 font-medium leading-relaxed text-zinc-300">
        I build gameplay systems, developer tools, and desktop applications with an emphasis
        on reusable architecture and practical problem solving.
      </p>

      <div className="mt-auto flex gap-3 pt-6">
        <a
          href="https://github.com/SaeDus"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-400"
        >
          <GitBranch className="h-4 w-4" />
          GitHub
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:bg-zinc-800"
        >
          View Resume
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
