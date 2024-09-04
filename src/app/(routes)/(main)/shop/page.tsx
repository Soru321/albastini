import { Suspense } from 'react';

import DownloadSection from '@/components/sections/download-section';
import PageHeaderSection from '@/components/sections/page-header-section';
import Container from '@/components/ui/other/container';

import Products from './_components/products';

export default function ShopPage() {
  return (
    <>
      <PageHeaderSection>
        Shop from our <br />
        extensive <span className="text-accent-gradient">collection</span>
      </PageHeaderSection>

      <section className="py-20 sm:py-36">
        <Container>
          <Suspense>
            <Products />
          </Suspense>
        </Container>
      </section>

      <DownloadSection />
    </>
  );
}
