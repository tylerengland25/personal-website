import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface BlogCardProps {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  thumbnail: string;
  tags: string[];
}

export function BlogCard({
  slug,
  title,
  publishedAt,
  summary,
  thumbnail,
  tags = [],
}: BlogCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/blog/${slug}`}
      className="relative group block bg-gray-900/80 rounded-lg p-4
        hover:bg-gray-900/95 transition-all duration-300
        hover:transform hover:scale-[1.03] hover:shadow-2xl
        shadow-xl shadow-black/50 backdrop-blur-md
        border border-gray-800/50 hover:border-gray-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-wrap items-center justify-center gap-2 p-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/20 rounded-full text-white text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <h2 className="mt-4 text-xl font-semibold text-white">{title}</h2>
      <p className="mt-2 text-gray-200 line-clamp-2">{summary}</p>
      <time className="mt-2 block text-sm text-gray-400">{publishedAt}</time>
    </Link>
  );
}
