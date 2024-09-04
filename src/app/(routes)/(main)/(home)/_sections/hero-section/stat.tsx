"use client";

import { motion as m, MotionProps } from 'framer-motion';
import Image from 'next/image';

import coinImage from '@/../public/images/coin.webp';
import { Stat as StatType } from '@/data/get-stats';

interface Statprops extends StatType, MotionProps {}

export default function Stat({ title, stat, ...motionProps }: Statprops) {
  return (
    <m.div {...motionProps} className="stat space-y-4">
      <div className="relative mx-auto grid aspect-square size-20 items-center justify-center sm:size-36">
        <p className="relative z-10 font-bold text-primary sm:text-4xl">
          {stat}
        </p>
        <Image src={coinImage} alt="" fill unoptimized />
      </div>
      <p className="text-center text-light-3">{title}</p>
    </m.div>
  );
}
