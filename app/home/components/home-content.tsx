'use client';
import { useState } from 'react';
import TypeWriter from '../../components/type-writer';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  weight: ['700'],
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export default function HomeContent() {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="absolute inset-0 flex items-start justify-center pt-20">
      <div className="max-w-4xl px-0 -mt-[75px]">
        <div className="w-[1000px] text-center">
          <p className="text-lg md:text-2xl font-mono text-white -ml-20 text-left">
            <TypeWriter
              text="Developer specialized in AI. Over five years of experience providing data-driven solutions for businesses. Explore his [projects](/projects), read his [blog](/blog), or [get in touch](/contact)."
              delay={75}
              showCursor={true}
              onComplete={() => setShowDescription(true)}
            />
          </p>
        </div>
      </div>
    </div>
  );
}
