'use client';

import Link from 'next/link';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  weight: ['700'], // Bold weight
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const navItems = {
  left: [
    { path: '/projects', name: 'PROJECTS' },
    { path: '/blog', name: 'BLOG' },
  ],
  right: [
    { path: '/#about', name: 'ABOUT' },
    { path: '/contact', name: 'CONTACT' },
  ],
};

export function Navbar() {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Only handle hash links
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const elem = document.getElementById(targetId);

      if (elem) {
        elem.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        window.history.pushState({}, '', href);
      }
    }
  };

  return (
    <header className="w-full max-w-7xl mx-auto px-8">
      <nav className="flex items-center justify-center py-16">
        {/* Left Navigation Items */}
        <div className="flex-1 flex items-center justify-end space-x-32">
          {navItems.left.map(({ path, name }) => (
            <Link
              key={path}
              href={path}
              className="font-mono text-xl text-white hover:text-gray-200 transition-colors duration-200 tracking-wide"
              onClick={(e) => handleScroll(e, path)}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Centered Name */}
        <Link
          href="/"
          className={`flex flex-col items-center text-center mx-32 ${spaceGrotesk.className}`}
        >
          <span className="text-6xl font-bold tracking-tight uppercase text-white hover:text-gray-200 transition-colors">
            Tyler
          </span>
          <span className="text-6xl font-bold tracking-tight uppercase text-white hover:text-gray-200 transition-colors">
            England
          </span>
        </Link>

        {/* Right Navigation Items */}
        <div className="flex-1 flex items-center justify-start space-x-24">
          {navItems.right.map(({ path, name }) => (
            <Link
              key={path}
              href={path}
              className="font-mono text-lg text-white hover:text-gray-200 transition-colors duration-200 tracking-wide"
              onClick={(e) => handleScroll(e, path)}
            >
              {name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
