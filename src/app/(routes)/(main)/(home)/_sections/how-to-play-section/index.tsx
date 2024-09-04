import Container from '@/components/ui/other/container';
import InnerContainer from '@/components/ui/other/inner-container';

import Content from './content';
import DoodleImage from './doodle-image';
import FishImage from './fish-image';
import HowToPlayVideo from './how-to-play-video';

export default function HowToPlaySection() {
  return (
    <section className="relative z-20">
      <Container className="relative">
        <InnerContainer>
          <Content />

          <div className="relative mx-auto md:w-3/4">
            <DoodleImage />
            <HowToPlayVideo />
          </div>
        </InnerContainer>

        <FishImage />
      </Container>
    </section>
  );
}
