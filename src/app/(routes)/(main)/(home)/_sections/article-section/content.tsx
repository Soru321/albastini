import Container from '@/components/ui/other/container';
import HeadingContainer from '@/components/ui/other/heading-container';
import InnerContainer from '@/components/ui/other/inner-container';
import LightHeading from '@/components/ui/other/light-heading';
import { getArticles } from '@/data/get-articles';

import Articles from './articles';

export default function Content() {
  return (
    <Container>
      <InnerContainer>
        <HeadingContainer className="flex flex-col items-center">
          <LightHeading className="text-center">
            Latest <span className="text-accent-gradient">News</span> and{" "}
            <span className="text-accent-gradient">Alerts</span>
          </LightHeading>
          <p className="text-center text-light-2 md:w-3/5">
            Stay up-to-date with the latest updates, events, and important
            announcements. Check out our newsfeed below:
          </p>
        </HeadingContainer>

        <Articles articles={getArticles} />
      </InnerContainer>
    </Container>
  );
}
