import Hero from './home/components/hero';
import Skills from './home/components/skills';
import FeaturedProjects from './home/components/featured-projects';
import About from './home/components/about';

export default function Page() {
  return (
    <section className="max-w-full">
      <Hero />
      <FeaturedProjects />
      <About />
      <Skills />
    </section>
  );
}
