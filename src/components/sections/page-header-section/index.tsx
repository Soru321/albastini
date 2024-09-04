import Image from 'next/image';
import { ReactNode } from 'react';

import giraffe2Image from '@/../public/images/giraffe-2.webp';
import lion2Image from '@/../public/images/lion-2.webp';
import mountainImage from '@/../public/images/mountain.webp';
import tree2Image from '@/../public/images/tree-2.webp';
import treeImage from '@/../public/images/tree.webp';
import zebrasImage from '@/../public/images/zebras.webp';
import LightGrassImage from '@/components/other/light-grass-image';
import Container from '@/components/ui/other/container';
import LightHeading from '@/components/ui/other/light-heading';

interface PageHeaderSectionProps {
  children: ReactNode;
}

export default function PageHeaderSection({
  children,
}: PageHeaderSectionProps) {
  return (
    <section className="relative flex h-80 w-full items-center overflow-x-clip bg-dark-gradient sm:h-[500px]">
      <Container className="relative z-10 h-fit">
        <LightHeading>{children}</LightHeading>
      </Container>

      <GiraffeImage />
      <ZebrasImage />
      <Lion2Image />
      <TreesImages />
      <MountainImage />
      <LightGrassImage />
    </section>
  );
}

function GiraffeImage() {
  return (
    <Image
      src={giraffe2Image}
      alt=""
      width={96}
      height={175}
      className="absolute bottom-0 left-72 hidden w-24 md:block"
    />
  );
}

function ZebrasImage() {
  return (
    <Image
      src={zebrasImage}
      alt=""
      width={359}
      height={141}
      className="absolute bottom-0 left-0 hidden w-48 min-[370px]:block md:left-[500px] lg:hidden 2xl:block"
    />
  );
}

function Lion2Image() {
  return (
    <Image
      src={lion2Image}
      alt=""
      width={131}
      height={52}
      className="absolute bottom-0 right-12 sm:right-24 md:right-[650px] md:hidden xl:block"
    />
  );
}

function TreesImages() {
  return (
    <>
      {/* Tree */}
      <Image
        src={treeImage}
        alt=""
        width={290}
        height={225}
        className="absolute -right-10 bottom-0 w-48 sm:w-[290px] md:left-0"
      />

      {/* Tree 2 */}
      <Image
        src={tree2Image}
        alt=""
        width={190}
        height={187}
        className="absolute bottom-0 hidden md:right-0 md:block lg:hidden xl:right-[550px] xl:block"
      />
    </>
  );
}

function MountainImage() {
  return (
    <Image
      src={mountainImage}
      alt=""
      width={807}
      height={650}
      className="absolute bottom-0 right-0 hidden w-[650px] lg:block"
    />
  );
}
