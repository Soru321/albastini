import { motion as m } from 'framer-motion';

import LightHeading from '@/components/ui/other/light-heading';

export default function Content() {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <LightHeading
        style={{
          opacity: 0,
          scale: 1.5,
          y: 50,
        }}
        className="heading text-center text-5xl sm:text-7xl lg:text-start"
      >
        Welcome to <span className="text-accent-gradient">Albastini!</span>
      </LightHeading>
      <m.h4
        style={{
          opacity: 0,
          y: 50,
        }}
        className="text-1 mt-3 text-center text-lg text-light-3 sm:text-3xl lg:text-start"
      >
        Dive into the Adventure
      </m.h4>
      <m.p
        style={{
          opacity: 0,
          y: 50,
        }}
        className="text-2 mt-5 text-center text-sm text-light-2 sm:text-base lg:text-start"
      >
        Join thousands of players worldwide in the epic journey of Albastini.
        Immerse yourself in captivating quests, formidable challenges, and an
        ever-expanding world. Download now and start your unforgettable
        adventure today!
      </m.p>
    </div>
  );
}
