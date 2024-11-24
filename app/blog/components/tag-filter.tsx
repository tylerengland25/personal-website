'use client';

import { useState } from 'react';
import { BlogCard } from './blog-card';

interface BlogPostMetadata {
  title: string;
  publishedAt: string;
  summary: string;
  tag: string;
  thumbnail?: string;
}

interface FilterableBlog {
  slug: string;
  metadata: BlogPostMetadata;
}

interface TagFilterProps {
  tags: string[];
  initialBlogs: FilterableBlog[];
}

export function TagFilter({ tags, initialBlogs }: TagFilterProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const filteredBlogs = selectedTag
    ? initialBlogs.filter((post) => post.metadata.tag === selectedTag)
    : initialBlogs;

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setSelectedTag(null)}
          className={`px-3 py-1 text-sm font-medium rounded-full transition-colors
            ${
              !selectedTag
                ? 'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'
            }`}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 text-sm font-medium rounded-full transition-colors
              ${
                tag === selectedTag
                  ? 'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'
              }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.metadata.title}
              publishedAt={post.metadata.publishedAt}
              summary={post.metadata.summary}
              thumbnail={
                post.metadata.thumbnail || '/images/blog-placeholder.jpg'
              }
              tag={post.metadata.tag}
            />
          ))}
      </div>
    </>
  );
}
