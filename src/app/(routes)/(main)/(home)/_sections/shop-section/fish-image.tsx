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
      className="absolute -bottom-2 left-2 w-14 translate-y-full sm:w-20 md:w-28 2xl:left-0 2xl:-translate-x-3/4"
    />
  );
}
