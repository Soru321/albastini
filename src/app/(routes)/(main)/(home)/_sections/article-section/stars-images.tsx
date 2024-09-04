import Image from 'next/image';

import lightStarImage from '@/../public/images/light-star.webp';
import Container from '@/components/ui/other/container';

export default function StarsImages() {
  return (
    <Container className="absolute left-1/2 top-0 -z-10 h-0 -translate-x-1/2">
      <Image
        src={lightStarImage}
        alt=""
        width={24}
        height={24}
        unoptimized
        className="absolute left-6 top-32 md:top-48 2xl:-left-16"
      />
      <Image
        src={lightStarImage}
        alt=""
        width={16}
        height={16}
        unoptimized
        className="absolute right-16 top-72 hidden md:block 2xl:right-0"
      />
    </Container>
  );
}
