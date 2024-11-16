import Hero from './components/hero';

export default function Page() {
  return (
    <section>
      <Hero />
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
