import Image from 'next/image';

import lightStarImage from '@/../public/images/light-star.webp';

export default function StarsImages() {
  return (
    <>
      <Image
        src={lightStarImage}
        alt=""
        width={64}
        height={61}
        className="absolute bottom-6 left-28 w-6 sm:bottom-12 lg:bottom-20"
      />
      <Image
        src={lightStarImage}
        alt=""
        width={64}
        height={61}
        className="absolute right-8 top-1 w-4 sm:top-3 sm:w-8 lg:right-20 lg:top-16"
      />
    </>
  );
}
