'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function Background() {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 -z-10">
      <div className="relative w-full h-screen">
        <Image
          src="/backgrounds/desk-setup-light.webp" // Replace with your image path
          alt="Background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{
            objectFit: 'cover',
            objectPosition: '50% 50%',
          }}
          quality={100}
        />
      </div>
    </div>
  );
}
