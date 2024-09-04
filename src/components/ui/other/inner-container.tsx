import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface InnerContainerProps {
  children: ReactNode;
  className?: string;
}

export default function InnerContainer({
  children,
  className,
}: InnerContainerProps) {
  return (
    <div className={cn("space-y-6 sm:space-y-12", className)}>{children}</div>
  );
}
