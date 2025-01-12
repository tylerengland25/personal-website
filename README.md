# Tyler England's Portfolio

A modern, performant personal website showcasing my work in sports analytics and software development. Built with Next.js, Tailwind CSS, and deployed on Vercel.

## Overview

This portfolio site features my professional experience in sports analytics, data science projects, and technical blog posts. With a focus on performance and clean design, it demonstrates my expertise in both frontend development and data science.

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Typography**: [Vercel Geist Font](https://vercel.com/font)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Deployment**: [Vercel](https://vercel.com/)

## Key Features

- **Dynamic Blog Platform**: MDX-powered blog posts with code syntax highlighting and math expressions support
- **Project Showcase**: Interactive project cards with filtering capabilities
- **Contact Form**: Integrated contact form using SendGrid
- **Performance Optimized**: Responsive images and optimized asset loading
- **Dark Mode Support**: Seamless theme switching for better readability
- **SEO Optimized**: Dynamic meta tags, sitemap generation, and JSON-LD schema
- **Analytics Integration**: Built-in performance tracking and visitor analytics

## Local Development

1. Clone the repository:

```bash
git clone https://github.com/tyler-england/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

The site will be available at [http://localhost:3000](http://localhost:3000)

## Project Structure

- `/app`: Main application code
  - `/(home)`: Homepage components and layouts
  - `/blog`: Blog posts and MDX components
  - `/projects`: Project showcase components
  - `/contact`: Contact form implementation
- `/public`: Static assets and images
- `/content`: Blog posts and project content

## Configuration

The site can be customized by modifying the following files:

- `app/projects/project-data.tsx`: Add or remove projects from the project showcase
- `app/blog/blog-data.tsx`: Add or remove blog posts from the blog section
- `app/contact/contact-data.tsx`: Update the contact form configuration
- `app/metadata.tsx`: Modify meta tags and SEO settings
- `app/footer.tsx`: Customize the footer content

For SEO and sitemap configuration:

- `app/metadata.tsx`: Modify meta tags and SEO settings
- `app/sitemap.tsx`: Customize the sitemap configuration


## License

This project is licensed under the MIT License - see the LICENSE file for details.
