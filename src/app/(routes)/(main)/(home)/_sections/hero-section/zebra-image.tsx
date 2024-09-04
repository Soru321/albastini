"use client";

import { motion as m } from 'framer-motion';
import Image from 'next/image';

import zebraImage from '@/../public/images/zebra.webp';
import Container from '@/components/ui/other/container';

export default function ZebraImage() {
  return (
    <Container className="absolute bottom-0 left-1/2 flex h-fit -translate-x-1/2 justify-center">
      <m.div
        initial={{
          opacity: 0,
          x: "calc(100% - 50px)",
        }}
        whileInView={{ opacity: 1, x: "100%" }}
        transition={{ type: "tween" }}
        viewport={{ amount: "some", once: true }}
        className="w-fit"
      >
        <Image
          src={zebraImage}
          alt=""
          width={374 * 0.5}
          height={279 * 0.5}
          unoptimized
          className="object-contain"
        />
      </m.div>
    </Container>
  );
}
