import Hero from './components/hero';
import Skills from './components/skills';
import FeaturedProjects from './components/featured-projects';
import About from './components/about';

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
