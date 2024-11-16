import Link from 'next/link';
import { ThemeSwitch } from './theme-switch';
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
    { path: '/about', name: 'ABOUT' },
    { path: '/contact', name: 'CONTACT' },
  ],
};

export function Navbar() {
  return (
    <header className="w-full max-w-7xl mx-auto px-4">
      <nav className="flex items-center justify-center py-12">
        {/* Left Navigation Items */}
        <div className="flex-1 flex items-center justify-end space-x-24">
          {navItems.left.map(({ path, name }) => (
            <Link
              key={path}
              href={path}
              className="font-mono text-lg text-[#F2F2F2] hover:text-white transition-colors duration-200 tracking-wide"
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Centered Name */}
        <Link
          href="/"
          className={`flex flex-col items-center text-center mx-24 ${spaceGrotesk.className}`}
        >
          <span className="text-5xl font-bold tracking-tight uppercase hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors">
            Tyler
          </span>
          <span className="text-5xl font-bold tracking-tight uppercase hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors">
            England
          </span>
        </Link>

        {/* Right Navigation Items */}
        <div className="flex-1 flex items-center justify-start space-x-24">
          {navItems.right.map(({ path, name }) => (
            <Link
              key={path}
              href={path}
              className="font-mono text-lg text-[#F2F2F2] hover:text-white transition-colors duration-200 tracking-wide"
            >
              {name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  );
}
