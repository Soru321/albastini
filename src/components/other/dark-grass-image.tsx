import darkGrassImage from '@/../public/images/dark-grass.webp';
import { cn } from '@/lib/utils';

interface DarkGrassImageProps {
  className?: string;
}

export default function DarkGrassImage({ className }: DarkGrassImageProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${darkGrassImage.src})`,
      }}
      className={cn(
        "absolute left-0 top-0 z-10 h-8 w-full -translate-y-3/4 bg-contain",
        className,
      )}
    />
  );
}
