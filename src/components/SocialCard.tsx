import { GitBranch, ExternalLink, Mail } from 'lucide-react'

export function SocialCard() {
  return (
    <section
      id="social"
      className="mx-auto w-full max-w-6xl px-6 py-16 m-8"
    >
      <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900">
        <h2 className="text-4xl font-bold tracking-tight">
          Let's Connect
        </h2>

        <p className="mt-6 font-medium leading-relaxed text-zinc-300">
          Interested in discussing a project or professional opportunity? Feel free to get in touch.
        </p>

        <div className="flex gap-4 mt-8">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 p-2 text-zinc-400 transition hover:text-white"
          >
            <Mail className="h-5 w-5" />
            Contact
          </a>

          <a
            href="https://github.com/SaeDus"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-2 text-zinc-400 transition hover:text-white"
          >
            <GitBranch className="h-5 w-5" />
            GitHub
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 p-2 text-zinc-400 transition hover:text-white"
          >
            Resume
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>

        <p className="mt-8 text-sm leading-relaxed text-zinc-500">
          © RJ Catterton
        </p>
      </div>
    </section>
  );
}
