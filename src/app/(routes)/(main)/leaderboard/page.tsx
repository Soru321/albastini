import DownloadSection from '@/components/sections/download-section';
import PageHeaderSection from '@/components/sections/page-header-section';
import Container from '@/components/ui/other/container';

import LeaderboardTable from './_components/leaderboard-table';

export default function LeaderboardPage() {
  return (
    <>
      <PageHeaderSection>Leaderboard</PageHeaderSection>

      <section className="py-36">
        <Container>
          <LeaderboardTable />
        </Container>
      </section>

      <DownloadSection />
    </>
  );
}
