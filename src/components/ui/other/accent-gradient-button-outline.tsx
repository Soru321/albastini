import { VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { Button, buttonVariants } from '../button';

interface AccentGradientButtonOutlineProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  className?: string;
}

export default function AccentGradientButtonOutline({
  children,
  className,
  ...props
}: AccentGradientButtonOutlineProps) {
  return (
    <Button
      type="button"
      variant="outline"
      className={cn(
        "h-12 rounded-full px-6 text-primary transition-none hover:border-none hover:text-light hover:bg-accent-gradient",
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
