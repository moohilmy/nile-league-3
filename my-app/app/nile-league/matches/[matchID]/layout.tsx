import React from "react";
// lineup - stats - highlights
import styles from "./styles.module.css";
import {
  BoardSection,
  EventSection,
  MatchInfo,
  EventSubInfo,
  TeamBackGround,
  TeamSectioin,
  MatchNav,
} from "@/components/MatchComponents";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <div className={styles.scoreBoard}>
        <MatchInfo />
        <div className={styles.matchContent}>
          <div className={styles.matchContentHeading}>
            <TeamSectioin teamName="al ahly" imgSrc="/team-logo/alahly.svg" />
            <BoardSection homeResult={1} awayResult={1} />
            <TeamSectioin
              teamName="zamalek"
              imgSrc="/team-logo/zamalek.svg"
              isTeamAway={true}
            />
          </div>
          <div className={styles.matchContentBottom}>
            <EventSection events={[1, 12, 1]} />
            <EventSubInfo />
            <EventSection events={[1, 2, 1]} isTeamAway />
          </div>
        </div>
        <TeamBackGround clubID={1} />
        <TeamBackGround clubID={2} isTeamAway={true} />
        <div className="nile-league-wrapper order-12">
          <MatchNav />
        </div>
      </div>
      <div className={''}>{children}</div>
    </section>
  );
}
