export function PersonalCard() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-4xl font-bold tracking-tight">
        About Me
      </h2>

      <article className="flex h-full mt-8 flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
        <div className="flex flex-1 flex-col p-6">
          <p className="font-medium leading-relaxed text-zinc-300">
            I'm a gameplay programmer and software engineer with a
            Bachelor of Science in Game Programming from the
            University of Advancing Technology.

            My work includes gameplay systems, developer tools,
            desktop applications, and technical problem-solving
            across game development and general software engineering.
          </p>

          <p className="mt-6 font-medium leading-relaxed text-zinc-300">
            I enjoy designing systems that are reusable,
            maintainable, and adaptable.

            My projects range from AI and gameplay mechanics in
            Unity to cross-platform applications built with
            React and Tauri.
          </p>
        </div>
      </article>
    </div>
  );
}
