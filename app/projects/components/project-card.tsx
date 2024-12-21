'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { Project } from '../project-data';

export default function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/projects/${project.id}`}
      className="relative group block bg-gray-900/80 rounded-lg p-4
        hover:bg-gray-900/95 transition-all duration-300
        hover:transform hover:scale-[1.03] hover:shadow-2xl
        shadow-xl shadow-black/50 backdrop-blur-md
        border border-gray-800/50 hover:border-gray-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-wrap items-center justify-center gap-2 p-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/20 rounded-full text-white text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-white">{project.title}</h3>
      <p className="mt-2 text-gray-200">{project.shortDescription}</p>
    </Link>
  );
}
