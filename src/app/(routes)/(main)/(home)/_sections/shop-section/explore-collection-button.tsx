import Image from 'next/image';
import Link from 'next/link';

import arrowImage from '@/../public/images/arrow.webp';
import AccentGradientButton from '@/components/ui/other/accent-gradient-button';

export default function ExploreCollectionButton() {
  return (
    <div className="relative mt-auto">
      <Image
        src={arrowImage}
        alt=""
        width={167}
        height={199}
        unoptimized
        className="absolute -top-6 left-0 hidden w-36 -translate-x-full -translate-y-full lg:block"
      />

      <Link href="#">
        <AccentGradientButton>Explore the collection</AccentGradientButton>
      </Link>
    </div>
  );
}
