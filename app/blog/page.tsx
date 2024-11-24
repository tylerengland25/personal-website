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
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Blogs</h1>
      <TagFilter tags={allTags} initialBlogs={allBlogs} />
    </section>
  );
}
