import Container from '@/components/ui/other/container';
import InnerContainer from '@/components/ui/other/inner-container';
import { getCollections } from '@/data/get-collections';

import Collections from './collections';
import Content from './content';
import ExploreCollectionButton from './explore-collection-button';
import FishImage from './fish-image';

export default function ShopSection() {
  return (
    <section className="py-20 sm:py-36">
      <Container className="relative">
        <InnerContainer>
          <div className="flex flex-col gap-4 lg:flex-row">
            <Content />
            <ExploreCollectionButton />
          </div>

          <Collections collections={getCollections} />
        </InnerContainer>

        <FishImage />
      </Container>
    </section>
  );
}
