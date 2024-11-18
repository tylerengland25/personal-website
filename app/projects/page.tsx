'use client';

import { useState } from 'react';
import { projects, projectTags } from './project-data';
import ProjectCard from './components/project-card';

export default function Projects() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredProjects =
    selectedTags.length > 0
      ? projects.filter((project) =>
          project.tags.some((tag) => selectedTags.includes(tag))
        )
      : projects;

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          From web applications and data visualization to machine learning
          models and APIs. Explore my portfolio showcasing full-stack
          development, data science, and analytics projects.
        </p>

        <div className="flex flex-wrap gap-2">
          {projectTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-4 py-2 rounded-full text-sm ${
                selectedTags.includes(tag)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              } hover:opacity-80 transition-opacity`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
