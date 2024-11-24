import Link from 'next/link';
import { getFeaturedProjects } from '../../projects/project-data';
import ProjectCard from '../../projects/components/project-card';

export default function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="mb-32 flex flex-col items-center">
      <div className="w-[50%] max-w-xl mb-8">
        <div className="flex justify-center">
          <h2 className="text-2xl font-space-grotesk font-semibold tracking-tight text-neutral-800 dark:text-neutral-200 w-fit uppercase">
            Projects
          </h2>
        </div>
      </div>
      <div className="w-[80%] max-w-4xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link
            href="/projects"
            className="px-6 py-2 text-sm font-medium text-neutral-800 dark:text-neutral-200 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-all hover:scale-105"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
