import {
  LandingNextMatches,
  LandingContentSection,
  LandingGeneralStats,
  LandingStatsSection,
} from "@/components/LandingPageComponent";
import StandingsTable from "@/components/StandingsTable/StandingsTable";
import { LandingLoading } from "@/loading";
import dynamic from "next/dynamic";
import Link from "next/link";
const LandingSwiperNews = dynamic(
  () =>
    import(
      "../components/LandingPageComponent/LandingSwiperNews/LandingSwiperNews"
    ),
  {
    loading: () => <LandingLoading />,
  }
);
export default function Home() {
  return (
    <section>
      <div>
        <LandingSwiperNews />
        <LandingNextMatches />
      </div>
      <div className="nile-league-wrapper  nile-league-landing-page page-content-space">
        <div className="landing-page-content">
          <LandingContentSection
            header="news"
            mediaList={[1, 1, 1, 1, 1]}
            tagName="news"
          />
          <LandingGeneralStats />
          <LandingContentSection
            header="video"
            mediaList={[1, 1, 1, 1, 1]}
            tagName="videos"
          />
        </div>
        <nav className="side-nav home-nav">
          <div className="nile-league-fixed-box">
            <header className="mb-3">
              <h1 className="nile-league-headerLink">
                nile league Standings
                <Link
                  href={"/nile-league/standings"}
                  className="nile-league-link"
                />
              </h1>
            </header>
            <StandingsTable isInNav={true} />
          </div>
          <LandingStatsSection />
        </nav>
      </div>
    </section>
  );
}
