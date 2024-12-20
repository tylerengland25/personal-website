'use client';
import { usePathname } from 'next/navigation';
import Footer from '../(home)/components/footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <>
      {children}
      {!isHomePage && <Footer />}
      <Analytics />
      <SpeedInsights />
    </>
  );
}
