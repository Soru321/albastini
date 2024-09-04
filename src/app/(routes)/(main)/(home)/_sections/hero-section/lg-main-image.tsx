"use client";

import { motion as m } from 'framer-motion';
import Image from 'next/image';

import card1Image from '@/../public/images/card-1.webp';
import card2Image from '@/../public/images/card-2.webp';
import card3Image from '@/../public/images/card-3.webp';
import card4Image from '@/../public/images/card-4.webp';
import heroImage4 from '@/../public/images/hero-image-4.webp';
import { useDevice } from '@/lib/hooks/use-device';

export default function LgMainImage() {
  const { isLargeDevice, isXLargeDevice, isXXLargeDevice } = useDevice();
  return (
    <div style={{ height: 897 * 0.8, scale: 0.8 }} className="relative">
      <m.div
        style={{ opacity: 0, scale: 2, x: "-30%" }}
        className="mobile-image absolute bottom-0 right-0 z-10"
      >
        <Image
          src={heroImage4}
          alt=""
          width={490 * 0.8}
          height={897 * 0.8}
          className="object-contain"
        />
      </m.div>

      <m.div
        style={{ x: -(490 * 0.8 - 446 * 0.8) - 40, opacity: 0 }}
        className="card-1-image absolute bottom-0 right-0 z-[4]"
      >
        <Image
          src={card1Image}
          alt=""
          width={446 * 0.8}
          height={585 * 0.8}
          className="object-contain"
        />
      </m.div>

      <m.div
        style={{ x: -(490 * 0.8 - 446 * 0.8) - 80, opacity: 0 }}
        className="card-2-image absolute bottom-0 right-0 z-[3]"
      >
        <Image
          src={card2Image}
          alt=""
          width={446 * 0.8}
          height={585 * 0.8}
          className="object-contain"
        />
      </m.div>

      <m.div
        style={{ x: -(490 * 0.8 - 446 * 0.8) - 120, opacity: 0 }}
        className="card-3-image absolute bottom-0 right-0 z-[2]"
      >
        <Image
          src={card3Image}
          alt=""
          width={446 * 0.8}
          height={585 * 0.8}
          className="object-contain"
        />
      </m.div>

      <m.div
        style={{ x: -(490 * 0.8 - 446 * 0.8) - 150, opacity: 0 }}
        className="card-4-image absolute bottom-0 right-0 z-[1]"
      >
        <Image
          src={card4Image}
          alt=""
          width={446 * 0.8}
          height={585 * 0.8}
          className="object-contain"
        />
      </m.div>
    </div>
  );
}
