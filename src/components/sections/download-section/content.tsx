import HeadingContainer from '@/components/ui/other/heading-container';
import LightHeading from '@/components/ui/other/light-heading';

export default function Content() {
  return (
    <HeadingContainer className="flex flex-col items-center">
      <LightHeading className="text-center sm:text-4xl md:text-5xl">
        Download Albastini
      </LightHeading>
      <p className="text-center text-light-3">
        Albastini! is a game about It is a long established fact that a reader
        will be distracted by the readable content of a page when looking at its
        layout. The point of using distribution of letters.
      </p>
    </HeadingContainer>
  );
}
