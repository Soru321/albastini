import { ReactNode } from 'react';

import Footer from '@/components/other/footer';
import { Nav } from '@/components/other/nav';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Nav />

      <main className="min-h-screen">{children}</main>

      <Footer />
    </>
  );
}
