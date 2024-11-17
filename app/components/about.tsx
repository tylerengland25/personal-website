export default function About() {
  return (
    <section
      id="about"
      className="mb-16 flex flex-col items-center scroll-mt-24"
    >
      <div className="w-[70%]">
        <h2 className="text-2xl font-medium tracking-tight mb-4 text-neutral-800 dark:text-neutral-200">
          About
        </h2>
        <div className="prose prose-neutral dark:prose-invert">
          <p>
            Tyler is a data scientist and software developer specializing in
            sports analytics and predictive modeling. With over 5 years of
            experience spanning both startups and consulting, he has developed a
            comprehensive skill set in transforming complex data into actionable
            insights.
          </p>
          <p>
            His expertise lies at the intersection of sports technology and data
            science, where he leverages advanced machine learning techniques and
            distributed computing to develop innovative solutions. Tyler has
            successfully implemented various projects ranging from real-time
            analytics dashboards to sophisticated prediction models that have
            helped organizations make data-driven decisions.
          </p>
          <p>
            Beyond his technical capabilities, Tyler is passionate about making
            complex data accessible and meaningful. He combines his deep
            understanding of sports analytics with modern software development
            practices to create intuitive solutions that bridge the gap between
            raw data and actionable strategy.
          </p>
        </div>
      </div>
    </section>
  );
}
