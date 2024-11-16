import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedProjects } from '../projects/project-data';

export default function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="flex flex-col items-center w-full gap-8">
      <div className="w-[70%]">
        <h2 className="text-2xl font-medium tracking-tight mb-4 text-neutral-800 dark:text-neutral-200">
          Projects
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-[65%]">
        {featuredProjects.map((project) => (
          <Link
            key={project.title}
            href={project.url}
            className="group block rounded-lg border border-gray-300 dark:border-gray-700 p-6 hover:border-gray-400 dark:hover:border-gray-600"
          >
            <div className="relative mb-4 aspect-video overflow-hidden rounded-lg">
              <Image
                src={project.imageUrl || ''}
                alt={project.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-600">{project.description}</p>
          </Link>
        ))}
      </div>
      <Link
        href="/projects"
        className="px-6 py-2 text-sm font-medium text-neutral-800 dark:text-neutral-200 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-all hover:scale-105"
      >
        View All Projects
      </Link>
    </div>
  );
}
