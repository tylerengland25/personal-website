import Hero from './components/hero';
import FeaturedProjects from './components/featured-projects';
export default function Page() {
  return (
    <section className="max-w-full">
      <Hero />
      <FeaturedProjects />
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I&apos;m a data scientist with a passion for solving complex problems
          and transforming data into actionable insights. With experience
          spanning both startups and consulting, I specialize in applying data
          modeling, machine learning, and distributed computing to drive
          performance, strategy, and predictions.
        </p>
        {/* Rest of your existing content */}
      </div>
    </section>
  );
}
