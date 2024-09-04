import { VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { Button, buttonVariants } from '../button';

interface AccentGradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  className?: string;
}

export default function AccentGradientButton({
  children,
  className,
  ...props
}: AccentGradientButtonProps) {
  return (
    <Button
      type="button"
      className={cn(
        "h-12 rounded-full px-6 transition bg-accent-gradient hover:scale-105",
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
