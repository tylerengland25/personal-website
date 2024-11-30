import Link from 'next/link';

export default function HomeContent() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Building Solutions Through
          <Link
            href="/projects"
            className="text-blue-400 hover:text-blue-300 transition-colors mx-2"
          >
            Code
          </Link>
          and
          <Link
            href="/blog"
            className="text-green-400 hover:text-green-300 transition-colors mx-2"
          >
            Analytics
          </Link>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
          Data Scientist and Software Developer specializing in sports analytics
          and predictive modeling.
        </p>
      </div>
    </div>
  );
}
