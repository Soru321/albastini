import DarkHeading from '@/components/ui/other/dark-heading';
import HeadingContainer from '@/components/ui/other/heading-container';

export default function Content() {
  return (
    <HeadingContainer className="flex flex-col items-center">
      <DarkHeading className="text-center">
        How to <span className="text-accent-gradient">Play</span>
      </DarkHeading>
      <p className="text-center text-dark md:w-3/5">
        Video will guide you through the essentials, from character creation to
        mastering your first quests. Learn the basics to get started on your
        epic adventure.
      </p>
    </HeadingContainer>
  );
}
