import { BlogCard } from './components/blog-card';
import { getBlogPosts } from 'app/lib/posts';

export const metadata = {
  title: 'Blog',
};

export default function BlogPosts() {
  const allBlogs = getBlogPosts();

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Blogs</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {allBlogs
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
                post.metadata.thumbnail ||
                post.metadata.image ||
                '/images/blog-placeholder.jpg'
              }
              tag={
                post.metadata.tag ||
                post.metadata.tags?.split(',')[0] ||
                'General'
              }
            />
          ))}
      </div>
    </section>
  );
}
