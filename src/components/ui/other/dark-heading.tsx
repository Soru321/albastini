import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface DarkHeadingProps {
  children: ReactNode;
  className?: string;
}

export default function DarkHeading({ children, className }: DarkHeadingProps) {
  return (
    <h1
      className={cn("text-4xl font-bold text-primary sm:text-5xl", className)}
    >
      {children}
    </h1>
  );
}
