import DownloadSection from '@/components/sections/download-section';

import ArticleSection from './_sections/article-section';
import HeroSection from './_sections/hero-section';
import HowToPlaySection from './_sections/how-to-play-section';
import ShopSection from './_sections/shop-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ShopSection />
      <HowToPlaySection />
      <ArticleSection />
      <DownloadSection />
    </>
  );
}
