'use client';

import { useState } from 'react';
import ProjectCard from './project-card';
import type { Project } from '../project-data';

interface ProjectFilterProps {
  tags: string[];
  initialProjects: Project[];
}

export function ProjectFilter({
  tags,
  initialProjects,
  showProjectCards = true,
}: ProjectFilterProps & { showProjectCards?: boolean }) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const filteredProjects = selectedTag
    ? initialProjects.filter((project) => project.tags.includes(selectedTag))
    : initialProjects;

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setSelectedTag(null)}
          className={`px-3 py-1 text-sm font-medium rounded-full transition-colors
            ${
              !selectedTag
                ? 'bg-gray-800 text-white'
                : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
            }`}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 text-sm font-medium rounded-full transition-colors
              ${
                tag === selectedTag
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
              }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {showProjectCards && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </>
  );
}
