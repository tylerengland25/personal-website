'use client';

import Image from 'next/image';

interface BackgroundProps {
  imagePath?: string;
}

export default function Background({
  imagePath = '/your-default-image.webp',
}: BackgroundProps) {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="relative w-full h-screen">
        <Image
          src={imagePath}
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
