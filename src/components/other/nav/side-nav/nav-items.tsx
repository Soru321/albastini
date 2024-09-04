import { motion as m, stagger, useAnimate } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';

import { getNavLinks } from '@/data/get-nav-links';
import { NavLink } from '@/lib/types';

interface NavItemsProps {
  handleClose: () => void;
}

export default function NavItems({ handleClose }: NavItemsProps) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([
      [scope.current, { opacity: 1 }],
      [
        ".menu-item",
        { opacity: 1, y: 0 },
        { duration: 0.5, delay: stagger(0.2) },
      ],
    ]);
  }, [scope, animate]);

  return (
    <m.div
      ref={scope}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="min-h-500 fixed left-0 top-0 grid h-screen w-screen items-center justify-center bg-dark-gradient"
    >
      <div className="flex flex-col gap-4">
        {getNavLinks.map((item) => (
          <Item
            key={`sm-nav-link-${item.id}`}
            item={item}
            handleClose={handleClose}
          />
        ))}
      </div>
    </m.div>
  );
}

interface ItemProps {
  item: NavLink;
  handleClose: () => void;
}

function Item({ item, handleClose }: ItemProps) {
  return (
    <m.div initial={{ opacity: 0, y: 50 }} className="menu-item">
      <Link
        href={item.href}
        onClick={handleClose}
        className="text-3xl font-bold text-accent"
      >
        {item.text}
      </Link>
    </m.div>
  );
}
