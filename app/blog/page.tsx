import Background from '../(home)/components/background';
import { getBlogPosts, getAllUniqueTags } from 'app/lib/posts';
import { TagFilter } from './components/tag-filter';
import { Navbar } from '../(home)/components/nav';
import Footer from '../(home)/components/footer';
import MobileNav from '../(home)/components/mobile-nav';

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
    <div className="h-screen overflow-hidden relative flex flex-col">
      <Background imagePath="/backgrounds/desk-setup-dark.webp" />

      <div className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="lg:block hidden">
          <Navbar />
        </div>
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="fixed top-[150px] lg:top-[200px] left-0 right-0 z-40">
          <div className="max-w-6xl mx-auto px-4 relative">
            <div className="mb-6">
              <h1 className="text-4xl font-bold mb-4 text-white">Blog</h1>
            </div>
            <div className="mb-6 overflow-x-auto">
              <TagFilter tags={allTags} initialBlogs={allBlogs} />
            </div>
          </div>
        </div>

        <div className="fixed top-[350px] lg:top-[320px] bottom-16 left-0 right-0 overflow-hidden">
          <section className="h-full overflow-y-auto">
            <div className="max-w-6xl mx-auto px-4 relative pb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
            </div>
          </section>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0">
        <Footer />
      </div>
    </div>
  );
}
