import Image from 'next/image';

import darkGrassImage from '@/../public/images/dark-grass.webp';
import doodleImage from '@/../public/images/doodle.webp';
import lightArrowImage from '@/../public/images/light-arrow.webp';
import Container from '@/components/ui/other/container';

import Content from './content';
import DownloadButtons from './download-buttons';
import StarsImages from './stars-images';
import ZebrasImages from './zebras-images';

export default function DownloadSection() {
  return (
    <section className="relative w-full overflow-x-clip pb-20 sm:pb-36">
      <Container>
        <div className="relative mx-auto space-y-8 rounded-4xl px-4 py-16 bg-accent-gradient sm:px-10 md:w-5/6 md:py-24 lg:px-28">
          <Content />

          <div className="relative mx-auto flex w-fit gap-8">
            <DownloadButtons />
            <ArrowImage />
          </div>

          <DoodleImage />
          <StarsImages />
        </div>
      </Container>

      <ZebrasImages />
      <GrassImage />
    </section>
  );
}

function DoodleImage() {
  return (
    <Image
      src={doodleImage}
      alt=""
      width={64}
      height={61}
      className="absolute -left-2 -top-2 -translate-x-1/2 -translate-y-full -rotate-90"
    />
  );
}

function ArrowImage() {
  return (
    <Image
      src={lightArrowImage}
      alt=""
      width={172}
      height={168}
      className="absolute -right-10 top-0 w-20 -translate-y-4 translate-x-full sm:-right-16 sm:w-32"
    />
  );
}

function GrassImage() {
  return (
    <div
      style={{
        backgroundImage: `url(${darkGrassImage.src})`,
      }}
      className="absolute bottom-0 left-0 z-10 h-8 w-full translate-y-1/4 bg-contain"
    />
  );
}
