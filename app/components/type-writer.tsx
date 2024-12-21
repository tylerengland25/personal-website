'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface TypeWriterProps {
  text: string;
  delay?: number;
  className?: string;
  onComplete?: () => void;
  showCursor?: boolean;
}

interface TextSegment {
  text: string;
  type: 'text' | 'link';
  href?: string;
}

export default function TypeWriter({
  text,
  delay = 50,
  className = '',
  onComplete,
  showCursor = false,
}: TypeWriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [segments, setSegments] = useState<TextSegment[]>([]);

  useEffect(() => {
    // Parse the text for markdown-style links [text](url)
    const parseText = (input: string): TextSegment[] => {
      const segments: TextSegment[] = [];
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      let lastIndex = 0;
      let match;

      while ((match = linkRegex.exec(input)) !== null) {
        // Add text before the link if there is any
        if (match.index > lastIndex) {
          segments.push({
            text: input.slice(lastIndex, match.index),
            type: 'text',
          });
        }

        // Add the link
        segments.push({
          text: match[1],
          type: 'link',
          href: match[2],
        });

        lastIndex = match.index + match[0].length;
      }

      // Add remaining text after last link if there is any
      if (lastIndex < input.length) {
        segments.push({
          text: input.slice(lastIndex),
          type: 'text',
        });
      }

      return segments;
    };

    setSegments(parseText(text));
  }, [text]);

  useEffect(() => {
    const fullLength = segments.reduce(
      (acc, segment) => acc + segment.text.length,
      0
    );

    if (currentIndex < fullLength) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, delay, onComplete, segments]);

  const renderContent = () => {
    let displayedChars = currentIndex;

    return segments.map((segment, index) => {
      const segmentLength = segment.text.length;

      if (displayedChars <= 0) {
        return null;
      }

      const charsToShow = Math.min(displayedChars, segmentLength);
      const textToShow = segment.text.slice(0, charsToShow);
      displayedChars -= segmentLength;

      if (segment.type === 'link' && segment.href) {
        return (
          <Link
            key={index}
            href={segment.href}
            className="text-lime-400 hover:text-lime-300 transition-colors"
          >
            {textToShow}
          </Link>
        );
      }
      return <span key={index}>{textToShow}</span>;
    });
  };

  return (
    <span className={className}>
      {renderContent()}
      {showCursor &&
        currentIndex <
          segments.reduce((acc, segment) => acc + segment.text.length, 0) && (
          <span className="animate-pulse">▋</span>
        )}
    </span>
  );
}
