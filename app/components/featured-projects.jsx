import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedProjects } from '../projects/project-data';

export default function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="flex justify-center w-full">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-[65%]">
        {featuredProjects.map((project) => (
          <Link
            key={project.title}
            href={project.url}
            className="group block rounded-lg border border-gray-200 p-6 hover:border-gray-300"
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
    </div>
  );
}
