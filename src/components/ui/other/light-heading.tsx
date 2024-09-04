"use client";

import { motion as m, MotionStyle } from 'framer-motion';
import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface LightHeadingProps {
  children: ReactNode;
  className?: string;
  style?: MotionStyle;
}

export default function LightHeading({
  children,
  className,
  style,
}: LightHeadingProps) {
  return (
    <m.h1
      style={style}
      className={cn("text-4xl font-bold text-light sm:text-5xl", className)}
    >
      {children}
    </m.h1>
  );
}
