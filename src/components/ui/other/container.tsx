import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto h-full w-full max-w-screen-xl px-4 xl:px-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
