"use client";

import { stagger, useAnimate } from 'framer-motion';
import { useEffect, useState } from 'react';

import Container from '@/components/ui/other/container';
import { useDevice } from '@/lib/hooks/use-device';

import Content from './content';
import DownloadButtons from './download-buttons';
import GiraffeImage from './giraffe-image';
import LargeTreeImage from './large-tree-image';
import LgMainImage from './lg-main-image';
import LightGrassImage from './light-grass-image';
import LionImage from './lion-image';
import SmMainImage from './sm-main-image';
import Stats from './stats';
import ZebraImage from './zebra-image';

export default function HeroSection() {
  const [scope, animate] = useAnimate();
  const [isAnimationCompleted, setIsAnimationCompleted] = useState(false);
  const { isXsDevice, isLargeDevice } = useDevice();

  useEffect(() => {
    const xsDeviceAnimation = () => {
      const controls = animate([
        [".mobile-image", { opacity: 1, scale: 1 }, { delay: 0.05 }],
        [".mobile-image", { x: 0 }, { at: "+0.05" }],
        [".card-1-image", { opacity: 1, rotateZ: -5 }],
        [".card-2-image", { opacity: 1, rotateZ: -12 }, { at: "-0.2" }],
        [".card-3-image", { opacity: 1, rotateZ: -24 }, { at: "-0.2" }],
        [".card-4-image", { opacity: 1, rotateZ: -35 }, { at: "-0.2" }],
        [".button-1", { opacity: 1, x: 0 }],
        [".button-2", { opacity: 1, x: 0 }, { at: "-0.15" }],
        [".heading", { opacity: 1, scale: 1, y: 0 }, { at: "+0.2" }],
        [".text-1", { opacity: 1, y: 0 }],
        [".text-2", { opacity: 1, y: 0 }, { at: "-0.2" }],
      ]);

      controls.then(() => {
        setIsAnimationCompleted(true);
      });

      return controls;
    };

    const smDeviceAnimation = () => {
      const controls = animate([
        [".mobile-image", { opacity: 1, scale: 1 }, { delay: 0.05 }],
        [".mobile-image", { x: 0 }, { at: "+0.05" }],
        [".card-1-image", { opacity: 1, rotateZ: -10 }],
        [".card-2-image", { opacity: 1, rotateZ: -20 }, { at: "-0.2" }],
        [".card-3-image", { opacity: 1, rotateZ: -30 }, { at: "-0.2" }],
        [".card-4-image", { opacity: 1, rotateZ: -45 }, { at: "-0.2" }],
        [".heading", { opacity: 1, scale: 1, y: 0 }, { at: 0.3 }],
        [".text-1", { opacity: 1, y: 0 }],
        [".text-2", { opacity: 1, y: 0 }, { at: "-0.2" }],
        [".button-1", { opacity: 1, x: 0 }],
        [".button-2", { opacity: 1, x: 0 }, { at: "-0.15" }],
        [".stat", { opacity: 1, scale: 1 }, { delay: stagger(0.2) }],
      ]);

      controls.then(() => {
        setIsAnimationCompleted(true);
      });

      return controls;
    };

    const controls = isXsDevice ? xsDeviceAnimation() : smDeviceAnimation();

    return () => {
      controls.stop();
    };
  }, [animate, isXsDevice]);

  return (
    <section
      ref={scope}
      className="relative grid min-h-svh place-items-center pb-36 pt-24 bg-dark-gradient lg:pb-36 lg:pt-48"
    >
      <Container className="relative z-10 flex items-center gap-10">
        <div className="relative my-auto space-y-7 lg:w-1/2">
          <SmMainImage />
          {isXsDevice && <DownloadButtons />}
          <Content />
          {!isXsDevice && <DownloadButtons />}
          <Stats />
        </div>

        <div className="hidden lg:block lg:w-1/2">
          <LgMainImage />
        </div>
      </Container>

      {isAnimationCompleted && (
        <>
          <LionImage />

          {isLargeDevice && (
            <>
              <ZebraImage />
              <GiraffeImage />
              <LargeTreeImage />
            </>
          )}
        </>
      )}
      <LightGrassImage />
    </section>
  );
}
