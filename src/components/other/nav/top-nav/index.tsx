"use client";

import { motion as m, stagger, useAnimate } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

import logoImage from '@/../public/images/logo.webp';
import { homeRoute } from '@/constants/routes';

import AuthLinks from './auth-links';
import CartButton from './cart-button';
import NavLinks from './nav-links';
import LightSearchInput from './search-input';

export function TopNav() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const controls = animate([
      [".logo", { opacity: 1 }, { delay: 1 }],
      [".navbar", { opacity: 1 }, { at: "<", delay: 1 }],
      [".nav-link", { opacity: 1, x: 0 }, { delay: stagger(0.1) }],
      [".nav-item", { opacity: 1 }, { delay: stagger(0.1) }],
    ]);

    return () => {
      controls.stop();
    };
  }, [animate]);

  return (
    <nav
      ref={scope}
      className="absolute left-1/2 top-6 z-40 mx-auto flex w-full max-w-screen-xl -translate-x-1/2 items-center gap-14 px-4 xl:px-0"
    >
      <Logo />

      <m.div
        style={{ opacity: 0 }}
        className="navbar flex h-16 flex-grow items-center justify-between rounded-full px-8 text-sm bg-light-gradient"
      >
        <NavLinks />

        <div className="flex items-center gap-2">
          <LightSearchInput />
          <CartButton />
          <AuthLinks />
        </div>
      </m.div>
    </nav>
  );
}

function Logo() {
  return (
    <m.div style={{ opacity: 0 }} className="logo">
      <Link href={homeRoute}>
        <Image
          src={logoImage}
          alt={process.env.NEXT_PUBLIC_APP_NAME}
          width={497}
          height={401}
          className="w-36"
        />
      </Link>
    </m.div>
  );
}
