interface ExpertiseCategory {
  title: string;
  skills: string[];
}

const expertise: ExpertiseCategory[] = [
  {
    title: "Gameplay Engineering",
    skills: [
      "Gameplay Systems",
      "AI & Pathfinding",
      "Combat Systems",
      "GPU Programming",
      "Tools Development",
    ],
  },
  {
    title: "Software Engineering",
    skills: [
      "Object-Oriented Design",
      "Data Structures",
      "Debugging",
      "Desktop Applications",
      "Data Processing",
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      "C#",
      "TypeScript",
      "JavaScript",
      "Python",
      "C++",
      "Rust",
    ],
  },
  {
    title: "Tools & Frameworks",
    skills: [
      "Unity",
      "Godot",
      "Unreal",
      "React",
      "Tauri",
      ".NET",
      "Git / GitHub",
    ],
  },
];

export function TechnicalCard() {
  return (
    <section
      id="expertise"
      className="mx-auto w-full max-w-6xl px-6 py-16"
    >
      <h2 className="text-4xl font-bold tracking-tight">
        Technical Expertise
      </h2>

      <p className="mt-3 text-zinc-400">
        Technologies and engineering disciplines I use to
        build games, tools, and applications.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {expertise.map((category) => (
          <article
            key={category.title}
            className="rounded-xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <h3 className="flex items-center gap-3 text-xl font-semibold">
              {category.title}
            </h3>

            <ul className="mt-5 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md bg-zinc-800 px-3 py-1.5 text-sm text-zinc-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
