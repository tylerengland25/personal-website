'use client';

import { usePathname } from 'next/navigation';
import { Navbar } from './nav';

export function NavWrapper() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  if (isHomePage) {
    return null;
  }

  return <Navbar />;
}
