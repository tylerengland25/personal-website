import { getBlogPosts, getAllUniqueTags } from 'app/lib/posts';
import { TagFilter } from './components/tag-filter';

export const metadata = {
  title: 'Blog',
};

export default function BlogPosts() {
  const allBlogs = getBlogPosts().map(({ slug, metadata }) => ({
    slug,
    metadata: {
      title: metadata.title,
      publishedAt: metadata.publishedAt,
      summary: metadata.summary,
      tags: metadata.tags,
      thumbnail: metadata.thumbnail,
    },
  }));
  const allTags = getAllUniqueTags();

  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Blogs</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Exploring technology, software development, and personal insights.
          Here you&apos;ll find articles about web development, programming best
          practices, and lessons learned from building real-world applications.
        </p>
      </div>
      <TagFilter tags={allTags} initialBlogs={allBlogs} />
    </section>
  );
}
