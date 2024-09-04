import Image from 'next/image';

import hunter2Image from '@/../public/images/hunter-2.webp';
import hunterImage from '@/../public/images/hunter.webp';
import Container from '@/components/ui/other/container';

export default function HuntersImages() {
  return (
    <Container className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2">
      <Image
        src={hunterImage}
        alt=""
        width={146}
        height={263}
        unoptimized
        className="absolute bottom-0 left-2 w-12 translate-y-1.5 sm:w-20 2xl:-left-4 2xl:w-[146px] 2xl:-translate-x-3/4"
      />
      <Image
        src={hunter2Image}
        alt=""
        width={191 * 0.7}
        height={243 * 0.7}
        unoptimized
        className="absolute bottom-0 right-2 w-12 translate-y-1.5 sm:w-20 2xl:right-0 2xl:w-[191px] 2xl:translate-x-3/4"
      />
    </Container>
  );
}
