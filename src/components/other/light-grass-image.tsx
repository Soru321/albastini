import lightGrassImage from '@/../public/images/light-grass.webp';
import { cn } from '@/lib/utils';

interface LightGrassImageProps {
  className?: string;
}

export default function LightGrassImage({ className }: LightGrassImageProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${lightGrassImage.src})`,
      }}
      className={cn(
        "absolute bottom-0 left-0 z-10 h-8 w-full translate-y-1 bg-contain",
        className,
      )}
    />
  );
}
