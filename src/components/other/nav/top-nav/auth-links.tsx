"use client";

import { motion as m } from 'framer-motion';
import Link from 'next/link';

import { signInRoute } from '@/constants/routes';

export default function AuthLinks() {
  return (
    <m.div style={{ opacity: 0 }} className="nav-item flex items-center gap-1">
      <Link
        href={signInRoute}
        className="whitespace-nowrap text-light-2 hover:text-accent"
      >
        Sign In
      </Link>
      <span className="text-light-2">/</span>
      <Link
        href="#"
        className="whitespace-nowrap text-light-2 hover:text-accent"
      >
        Register
      </Link>
    </m.div>
  );
}
