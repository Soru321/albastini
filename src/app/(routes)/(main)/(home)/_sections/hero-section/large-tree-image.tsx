"use client";

import { motion as m } from 'framer-motion';
import Image from 'next/image';

import largeTreeImage from '@/../public/images/large-tree.webp';
import Container from '@/components/ui/other/container';

export default function LargeTreeImage() {
  return (
    <m.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ type: "tween" }}
      viewport={{ amount: "some", once: true }}
      className="absolute bottom-0 right-0 h-fit translate-x-1/2"
    >
      <Image
        src={largeTreeImage}
        alt=""
        width={1287 * 0.9}
        height={1000 * 0.9}
        unoptimized
        className="object-contain"
      />
    </m.div>
  );
}
