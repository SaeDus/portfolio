import { ProjectCard } from './components/ProjectCard'

function Software() {
  return (
    <div className="mx-auto max-w-6x1 px-6 py-20">
      <h2 className="text-5x1 font-bold tracking-tight">
        Software
      </h2>

      <div className="flex gap-6">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default Software;
