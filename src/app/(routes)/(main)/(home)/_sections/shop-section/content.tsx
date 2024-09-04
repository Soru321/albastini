import DarkHeading from '@/components/ui/other/dark-heading';
import HeadingContainer from '@/components/ui/other/heading-container';

export default function Content() {
  return (
    <HeadingContainer>
      <DarkHeading>
        Shop the Albastini{" "}
        <span className="text-accent-gradient">Collection</span>
      </DarkHeading>
      <p className="text-dark lg:w-3/5">
        Enhance your gameplay experience with exclusive in-game items,
        merchandise, and more! Visit our Shop Page to explore the collection.
      </p>
    </HeadingContainer>
  );
}
