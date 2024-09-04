import Image from 'next/image';

import howToPlayImage from '@/../public/images/other/how-to-play.webp';

export default function HowToPlayVideo() {
  return (
    <div className="relative aspect-video overflow-hidden rounded-4xl border-8 border-gray-800">
      <Image src={howToPlayImage} alt="" fill className="object-cover" />
    </div>
  );
}
