'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  weight: ['700'],
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-4">
      <nav className="flex items-center justify-center py-8">
        {/* Left Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute left-4 text-white p-2 z-50"
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Centered Name */}
        <Link
          href="/"
          className={`flex flex-col items-center text-center ${spaceGrotesk.className}`}
        >
          <span className="text-4xl font-bold tracking-tight uppercase text-white">
            Tyler
          </span>
          <span className="text-4xl font-bold tracking-tight uppercase text-white">
            England
          </span>
        </Link>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-gray-900/95 backdrop-blur-md z-40">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <Link
                href="/projects"
                className="font-mono text-2xl text-white hover:text-gray-200 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                PROJECTS
              </Link>
              <Link
                href="/blog"
                className="font-mono text-2xl text-white hover:text-gray-200 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                BLOG
              </Link>
              <Link
                href="/about"
                className="font-mono text-2xl text-white hover:text-gray-200 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                href="/contact"
                className="font-mono text-2xl text-white hover:text-gray-200 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
