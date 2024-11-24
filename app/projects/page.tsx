'use client';

import { projects } from './project-data';
import { ProjectFilter } from './components/tag-filter';

export default function Projects() {
  // Get unique tags from projects
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  ).sort();

  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          From web applications and data visualization to machine learning
          models and APIs. Explore my portfolio showcasing full-stack
          development, data science, and analytics projects.
        </p>
      </div>
      <ProjectFilter tags={allTags} initialProjects={projects} />
    </section>
  );
}
