import Image from 'next/image';
import Link from 'next/link';

import appStoreButtonImage from '@/../public/images/app-store-button.webp';
import googlePlayButtonImage from '@/../public/images/google-play-button.webp';

export default function DownloadButtons() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <Link href="#" className="transition hover:scale-105">
        <Image
          src={googlePlayButtonImage}
          alt="Google Play"
          width={254}
          height={88}
          className="w-48 object-contain sm:w-36 md:w-48"
        />
      </Link>
      <Link href="#" className="transition hover:scale-105">
        <Image
          src={appStoreButtonImage}
          alt="App Store"
          width={253}
          height={88}
          className="w-48 object-contain sm:w-36 md:w-48"
        />
      </Link>
    </div>
  );
}
