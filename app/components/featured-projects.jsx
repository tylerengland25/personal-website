import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../projects/project-data';

export default function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 3); // Get first 3 projects

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
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group block rounded-lg border border-gray-300 dark:border-gray-700 p-6 hover:border-gray-400 dark:hover:border-gray-600"
            >
              <div className="relative mb-4 aspect-video overflow-hidden rounded-lg">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-2 text-lg font-space-grotesk font-semibold">
                {project.title}
              </h3>
              <p className="text-sm font-roboto-flex text-gray-600 dark:text-gray-300">
                {project.shortDescription}
              </p>
            </Link>
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
