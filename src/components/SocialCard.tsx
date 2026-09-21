import { GitBranch, Mail } from 'lucide-react'

export function SocialCard() {
  return (
    <section className="mx-auto max-w-6xl rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <div className="flex gap-4">
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
          <Mail className="h-5 w-5" />
          Contact
        </a>
      </div>
    </section>
  );
}
