import lightGrassImage from '@/../public/images/light-grass.webp';

export default function LightGrassImage() {
  return (
    <div
      style={{
        backgroundImage: `url(${lightGrassImage.src})`,
      }}
      className="absolute -bottom-1 left-0 z-10 h-8 w-full bg-contain"
    />
  );
}
