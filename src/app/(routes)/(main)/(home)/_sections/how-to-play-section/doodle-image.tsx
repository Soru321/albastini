import Image from 'next/image';

import doodleImage from '@/../public/images/doodle.webp';

export default function DoodleImage() {
  return (
    <Image
      src={doodleImage}
      alt=""
      width={64}
      height={61}
      unoptimized
      className="absolute -right-2 -top-2 hidden w-20 -translate-y-1/2 translate-x-1/2 md:block"
    />
  );
}
