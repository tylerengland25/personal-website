import Image from 'next/image';
import Link from 'next/link';

interface FeaturedProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

export default function FeaturedProject({
  title,
  description,
  imageUrl,
  projectUrl,
}: FeaturedProjectProps) {
  return (
    <Link
      href={projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="transform transition-all duration-300 hover:scale-[1.02] block"
    >
      <div className="rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800">
        <div className="relative h-40 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <h3 className="font-medium text-lg mb-2 text-neutral-800 dark:text-neutral-200">
            {title}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
