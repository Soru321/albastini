"use client";

import { motion as m } from 'framer-motion';
import Image from 'next/image';

import giraffe2Image from '@/../public/images/giraffe-2.webp';
import Container from '@/components/ui/other/container';

export default function GiraffeImage() {
  return (
    <Container className="absolute bottom-0 left-1/2 z-10 flex h-fit -translate-x-1/2 justify-end">
      <m.div
        initial={{
          opacity: 0,
          x: 50,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "tween" }}
        viewport={{ amount: "some", once: true }}
        className="w-fit"
      >
        <Image
          src={giraffe2Image}
          alt=""
          width={96}
          height={175}
          unoptimized
          className="object-contain"
        />
      </m.div>
    </Container>
  );
}
