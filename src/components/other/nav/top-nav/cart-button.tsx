"use client";

import { motion as m } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa';

import { Button } from '@/components/ui/button';

export default function CartButton() {
  return (
    <m.div style={{ opacity: 0 }} className="nav-item">
      <Button
        variant="outline"
        className="group size-10 border-light-2 p-0 bg-light-gradient-2"
      >
        <FaShoppingCart className="size-3.5 text-light-2 group-hover:text-light" />
      </Button>
    </m.div>
  );
}
