import { notFound } from 'next/navigation';
import { projects } from '../project-data';
import ProjectGallery from '../components/project-gallery';
import TechnicalSheet from '../components/technical-sheet';

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {project.shortDescription}
        </p>
      </header>

      <ProjectGallery images={project.images} />

      <div className="mt-8 flex justify-center">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Visit Website
        </a>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-4">About this Project</h2>
        <div className="prose dark:prose-invert">
          <p>{project.fullDescription}</p>
          <h3 className="text-xl font-semibold mt-8 mb-4">My Contributions</h3>
          <p>{project.contributions}</p>
        </div>
      </section>

      <TechnicalSheet technologies={project.technicalSheet} />

      {project.resources && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Resources</h2>
          <ul className="space-y-2">
            {project.resources.map((resource, index) => (
              <li key={index}>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {resource.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
