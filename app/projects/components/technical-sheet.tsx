interface TechnicalSheetProps {
  technologies: string[];
}

export default function TechnicalSheet({ technologies }: TechnicalSheetProps) {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Technical Sheet</h2>
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {technologies.map((tech, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-gray-700 dark:text-gray-300">{tech}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
