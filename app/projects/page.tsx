'use client';

import { projects } from './project-data';
import { ProjectFilter } from './components/tag-filter';
import ProjectCard from './components/project-card';
import Background from '../(home)/components/background';
import { Navbar } from '../(home)/components/nav';
import Footer from '../(home)/components/footer';

export default function Projects() {
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  ).sort();

  return (
    <div className="h-screen overflow-hidden relative flex flex-col">
      <Background imagePath="/backgrounds/desk-setup-dark.webp" />
      <div className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <Navbar />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="fixed top-[200px] left-0 right-0 z-40">
          <div className="max-w-6xl mx-auto px-4 relative">
            <div className="mb-6">
              <h1 className="text-4xl font-bold mb-4 text-white">Projects</h1>
            </div>
            <div className="mb-6">
              <ProjectFilter
                tags={allTags}
                initialProjects={projects}
                showProjectCards={false}
              />
            </div>
          </div>
        </div>
        <div className="fixed top-[320px] bottom-16 left-0 right-0 overflow-hidden">
          <section className="h-full overflow-y-auto">
            <div className="max-w-6xl mx-auto px-4 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0">
        <Footer />
      </div>
    </div>
  );
}
