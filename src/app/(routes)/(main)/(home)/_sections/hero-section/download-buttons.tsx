import { motion as m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import appStoreButtonOutlineImage from "@/../public/images/app-store-button-outline.webp";
import googlePlayButtonOutlineImage from "@/../public/images/google-play-button-outline.webp";

export default function DownloadButtons() {
  return (
    <div className="relative z-30 flex justify-center gap-4 sm:gap-8 lg:justify-start">
      <m.div
        style={{
          opacity: 0,
          x: -30,
        }}
        className="button-1"
      >
        <Link href="#" className="transition sm:hover:scale-105">
          <Image
            src={googlePlayButtonOutlineImage}
            alt="Google Play"
            width={299}
            height={89}
            unoptimized
          />
        </Link>
      </m.div>

      <m.div
        style={{
          opacity: 0,
          x: -30,
        }}
        className="button-2"
      >
        <Link href="#" className="transition sm:hover:scale-105">
          <Image
            src={appStoreButtonOutlineImage}
            alt="App Store"
            width={298}
            height={89}
            unoptimized
          />
        </Link>
      </m.div>
    </div>
  );
}
