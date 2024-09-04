import Image from 'next/image';

import zebra2Image from '@/../public/images/zebra-2.webp';
import zebraImage from '@/../public/images/zebra.webp';
import Container from '@/components/ui/other/container';

export default function ZebrasImages() {
  return (
    <Container className="absolute bottom-0 left-1/2 h-0 -translate-x-1/2 translate-y-2.5">
      <Image
        src={zebraImage}
        alt=""
        width={374}
        height={279}
        className="absolute bottom-0 left-0 w-48 -translate-x-1/2 md:w-[374px]"
      />
      <Image
        src={zebra2Image}
        alt=""
        width={179}
        height={314}
        className="absolute bottom-0 right-0 w-24 translate-x-1/4 md:w-[179px]"
      />
    </Container>
  );
}
