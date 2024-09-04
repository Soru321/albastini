import Image from 'next/image';

import fishImage from '@/../public/images/fish.webp';

export default function FishImage() {
  return (
    <Image
      src={fishImage}
      alt=""
      width={161}
      height={129}
      unoptimized
      className="absolute -top-4 right-2 w-14 -translate-y-1/4 rotate-180 object-contain sm:top-2 sm:w-20 md:top-0 md:w-40 2xl:right-0 2xl:translate-x-2/4"
    />
  );
}
