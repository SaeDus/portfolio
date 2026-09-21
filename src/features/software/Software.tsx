import { ProjectCard } from './components/ProjectCard'
import { softwareProjects } from './data/softwareProjects';

function Software() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-5xl font-bold tracking-tight">
        Software
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {softwareProjects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}

export default Software;
