import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Function to get all blog tags from MDX files
export function getAllBlogTags() {
  const blogsDirectory = path.join(process.cwd(), 'app/blog/blogs');
  const fileNames = fs.readdirSync(blogsDirectory);

  const allTags = new Set<string>();

  fileNames.forEach((fileName) => {
    if (!fileName.endsWith('.mdx')) return;

    const fullPath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    if (data.tag) {
      allTags.add(data.tag);
    }
  });

  return Array.from(allTags).sort();
}

export type BlogTag = ReturnType<typeof getAllBlogTags>[number];
