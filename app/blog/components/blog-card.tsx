import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from 'app/lib/posts';

interface BlogCardProps {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  thumbnail: string;
  tag: string;
}

export function BlogCard({
  slug,
  title,
  publishedAt,
  summary,
  thumbnail,
  tag,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group block w-full transition-all hover:no-underline"
    >
      <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all hover:scale-[1.02] duration-300">
        <div className="relative h-48 w-full">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="inline-block px-3 py-1 text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full">
              {tag}
            </span>
          </div>
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">
            {summary}
          </p>
          <time className="text-sm text-gray-500 dark:text-gray-500">
            {formatDate(publishedAt, false)}
          </time>
        </div>
      </div>
    </Link>
  );
}
