import Link from 'next/link';
import FeaturedProject from './featured-project';
import { getFeaturedProjects } from '../projects/project-data';

export default function Hero() {
  return (
    <div className="mb-16 flex flex-col items-center">
      <div className="w-[70%]">
        <h2 className="text-2xl font-medium tracking-tight mb-4 text-neutral-800 dark:text-neutral-200">
          Software Developer
        </h2>
        <p className="text-neutral-800 dark:text-neutral-200 mb-12">
          Passionate about leveraging technology to solve complex problems in
          sports analytics. With expertise in full-stack development and data
          science, I specialize in transforming complex data into actionable
          insights. Whether it&apos;s building intuitive dashboards or
          developing predictive models, I&apos;m committed to creating solutions
          that make a real impact in the world of sports technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-[70%] mb-12">
        {getFeaturedProjects().map((project, index) => (
          <FeaturedProject
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl || ''}
            projectUrl={project.url}
          />
        ))}
      </div>

      <Link
        href="/projects"
        className="inline-block px-4 py-2 rounded-md bg-neutral-800 dark:bg-neutral-200 text-neutral-200 dark:text-neutral-800 font-medium hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-colors"
      >
        View All Projects
      </Link>
    </div>
  );
}
