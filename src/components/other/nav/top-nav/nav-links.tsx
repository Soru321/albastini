"use client";

import { motion as m } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { getNavLinks } from '@/data/get-nav-links';
import { cn } from '@/lib/utils';

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex gap-8">
      {getNavLinks.map((link) => (
        <m.div
          key={`nav-link-${link.id}`}
          style={{ opacity: 0, x: -10 }}
          className="nav-link"
        >
          <Link
            href={link.href}
            className={cn(
              "whitespace-nowrap hover:text-accent",
              pathname === link.href ? "text-accent" : "text-light-2",
            )}
          >
            {link.text}
          </Link>
        </m.div>
      ))}
    </div>
  );
}
