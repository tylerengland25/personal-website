'use client';

import Image from 'next/image';
import { skills } from '../config';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Skills() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Get the current theme, accounting for system preference
  const currentTheme = mounted
    ? theme === 'system'
      ? systemTheme
      : theme
    : 'light';

  if (!mounted) {
    return null; // or a loading skeleton
  }

  return (
    <div className="mb-16 flex flex-col items-center">
      <div className="w-[70%] flex flex-col">
        <h2 className="text-2xl font-medium tracking-tight mb-4 text-neutral-800 dark:text-neutral-200">
          Technical Skills
        </h2>
        <p className="text-neutral-800 dark:text-neutral-200 mb-8">
          With over 5 years of experience in software development and data
          science, I&apos;ve built a diverse skill set focused on creating
          impactful solutions. My expertise spans from developing full-stack
          applications to implementing complex machine learning models and
          running large-scale simulations. I specialize in sports analytics and
          predictive modeling, using modern tools and frameworks to transform
          raw data into actionable insights.
        </p>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center group">
              <div className="relative">
                <Image
                  src={
                    skill.iconDark && currentTheme === 'dark'
                      ? skill.iconDark
                      : skill.icon
                  }
                  alt={`${skill.name} icon`}
                  width={40}
                  height={40}
                  className="mb-2 transition-transform duration-200 group-hover:scale-110"
                  style={{
                    filter: `drop-shadow(0 0 8px ${skill.color}40)`,
                  }}
                />
              </div>
              <span className="text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors duration-200">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
