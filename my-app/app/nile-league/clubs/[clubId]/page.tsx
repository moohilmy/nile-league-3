import styles from "./style.module.css";
import { Suspense } from "react";

import { BoxLoading } from "@/loading";
import {
  AllStarsSection,
  ClubAboutStandingTable,
  ManagerSection,
  TeamForm,
} from "@/components/ClubAboutComponents";
import FixtureSideBar from "@/components/FixtureSideBar/FixtureSideBar";
import { teamList } from "./teamList";
import MatchCard from "@/components/MatchCard/MatchCard";
const page = async ({ params }: { params: Promise<{ clubId: string }> }) => {
  const { clubId } = await params;
  return (
    <div className="nile-league-wrapper page-content-space flex flex-col gap-5">
      <div className={styles.status}>
        <div className={styles.topSection}>
          <div className={styles.topStatusForClub}>
            <Suspense fallback={<BoxLoading />}>
                <MatchCard
                  date="12 nov 2025, 7:30pm"
                  header={'last Match'}
                  linkContent='match recap'
                  teamAway={{
                    teamName: "al alahly",
                    teamImg: "/team-logo/alahly.svg",
                    score: 3,
                  }}
                  teamHome={{
                    teamName: "zamalek",
                    teamImg: "/team-logo/zamalek.svg",
                    score: 1,
                  }}
                />
            </Suspense>
            <Suspense fallback={<BoxLoading />}>
              <TeamForm />
            </Suspense>
          </div>

          <div className={styles.leagueSection}>
            <ClubAboutStandingTable teams={teamList} teamId={clubId} />
          </div>
        </div>

        <nav className={`${styles.topSectionNav} club-nav`}>
          <Suspense fallback={<>loading</>}>
            <FixtureSideBar
              title="upcoming matches"
              matches={[1, 1, 1, 1, 1]}
            />
          </Suspense>
        </nav>
      </div>
      <ManagerSection />
      <AllStarsSection teamID={clubId} teamName={"al ahly"} />
    </div>
  );
};

export default page;
