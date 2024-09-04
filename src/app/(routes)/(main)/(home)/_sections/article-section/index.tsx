import DarkGrassImage from '@/components/other/dark-grass-image';
import LightGrassImage from '@/components/other/light-grass-image';

import AnimalsImages from './animals-images';
import Content from './content';
import HuntersImages from './hunters-images';
import StarsImages from './stars-images';

export default function ArticleSection() {
  return (
    <section className="relative -translate-y-[100px] pb-20 pt-48 bg-dark-gradient-2 sm:pb-36 sm:pt-[calc(100px_+_144px)] lg:-translate-y-[200px] lg:pt-[calc(200px_+_144px)]">
      {/* 144px is equivalent to pt-36 */}
      <Content />

      <AnimalsImages />
      <StarsImages />
      <HuntersImages />
      <DarkGrassImage />
      <LightGrassImage className="translate-y-1/4" />
    </section>
  );
}
