"use client";

import { motion as m } from 'framer-motion';
import Image from 'next/image';

import lionImage from '@/../public/images/lion.webp';
import Container from '@/components/ui/other/container';

export default function LionImage() {
  return (
    <Container className="absolute bottom-0 left-1/2 h-fit -translate-x-1/2">
      <m.div
        initial={{
          opacity: 0,
          x: -50,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "tween" }}
        viewport={{ amount: "some", once: true }}
      >
        <Image
          src={lionImage}
          alt=""
          width={383}
          height={151}
          unoptimized
          className="-translate-x-1/2"
        />
      </m.div>
    </Container>
  );
}
