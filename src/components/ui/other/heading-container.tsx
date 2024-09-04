import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface HeadingContainerProps {
  children: ReactNode;
  className?: string;
}

export default function HeadingContainer({
  children,
  className,
}: HeadingContainerProps) {
  return <div className={cn("space-y-4", className)}>{children}</div>;
}
