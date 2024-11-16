import Link from 'next/link';

export default function Hero() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-medium tracking-tight mb-4 text-neutral-800 dark:text-neutral-200">
        Data Scientist & Sports Analytics Specialist
      </h2>
      <p className="text-neutral-800 dark:text-neutral-200 mb-6">
        Transforming complex data into actionable insights for sports analytics
        and performance optimization.
      </p>
      <Link
        href="/projects"
        className="inline-block px-4 py-2 rounded-md bg-neutral-800 dark:bg-neutral-200 text-neutral-200 dark:text-neutral-800 font-medium hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-colors"
      >
        View My Projects
      </Link>
    </div>
  );
}
