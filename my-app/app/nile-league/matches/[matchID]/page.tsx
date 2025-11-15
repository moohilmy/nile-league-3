import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import { SideStats, StatsBar } from "@/components/StatsComponents";
import StandingsTable from "@/components/StandingsTable/StandingsTable";

export default async function MatcheID({
  params,
}: {
  params: Promise<{ matchID: string }>;
}) {
  const { matchID } = await params;
  console.log(matchID);

  return (
    <div className={styles.matchTemplate}>
      <div className={styles.main}>
        <div className={styles.statsMatch}>
          <header className={styles.statsInfo}>
            <div className={styles.StatsTeamLogo}>
              <Image
                src={"/team-logo/alahly.svg"}
                height={50}
                width={50}
                alt=""
              />
            </div>
            <div className={styles.overView}>
              <h2 className={styles.matchStatsHeading}>match stats</h2>
              <div className={styles.matchStatsTeamsNames}>
                <span>alahly</span>
                vs
                <span>zamalek</span>
              </div>
            </div>
            <div className={styles.StatsTeamLogo}>
              <Image
                src={"/team-logo/zamalek.svg"}
                height={50}
                width={50}
                alt=""
              />
            </div>
          </header>
          <div className={styles.statsContainer}>
            <div className={`${styles.sideBarStats} homeStats`}>
              <SideStats
                teamID={1}
                percent={48.5}
                sideStatsTitle="shot accuracy"
              />
              <SideStats
                teamID={1}
                percent={74.5}
                sideStatsTitle="pass accuracy"
              />
            </div>
            <div className={styles.statsMainContainer}>
              <StatsBar
                statsName="possession %"
                awayTeamValue={50}
                homeTeamValue={50}
                awayTeamID={2}
                homeTeamID={1}
              />
              <StatsBar
                statsName="Shots"
                awayTeamValue={11}
                homeTeamValue={5}
                awayTeamID={2}
                homeTeamID={1}
              />
              <StatsBar
                statsName="Shots on Target"
                awayTeamValue={4}
                homeTeamValue={2}
                awayTeamID={2}
                homeTeamID={1}
              />
              <StatsBar
                statsName="Passes"
                awayTeamValue={572}
                homeTeamValue={315}
                awayTeamID={2}
                homeTeamID={1}
              />
              <StatsBar
                statsName="Corners"
                awayTeamValue={1}
                homeTeamValue={3}
                awayTeamID={2}
                homeTeamID={1}
              />
              <StatsBar
                statsName="Offsides"
                awayTeamValue={7}
                homeTeamValue={1}
                awayTeamID={2}
                homeTeamID={1}
              />
              <StatsBar
                statsName="Saves"
                awayTeamValue={4}
                homeTeamValue={4}
                awayTeamID={2}
                homeTeamID={1}
              />
              <StatsBar
                statsName="Fouls"
                awayTeamValue={10}
                homeTeamValue={8}
                awayTeamID={2}
                homeTeamID={1}
              />
              <StatsBar
                statsName="Yellow Cards"
                awayTeamValue={1}
                homeTeamValue={3}
                awayTeamID={2}
                homeTeamID={1}
              />
              <StatsBar
                statsName="red Cards"
                awayTeamValue={0}
                homeTeamValue={0}
                awayTeamID={2}
                homeTeamID={1}
              />
            </div>
            <div className={`${styles.sideBarStats} awayStats`}>
              <SideStats
                teamID={2}
                percent={30.5}
                sideStatsTitle="shot accuracy"
              />
              <SideStats
                teamID={2}
                percent={80.5}
                sideStatsTitle="pass accuracy"
              />
            </div>
          </div>
        </div>
      </div>
      <nav className={styles.sideBar}>
        <div className="standings-sideBar">
          <div className="flex gap-1.5 items-center mb-2">
            <Image src={"/nile.png"} alt="logo" height={50} width={50} />
            <div className="font-extrabold capitalize text-2xl ">
              Nile league
            </div>
          </div>
          <StandingsTable isInNav={true} />
        </div>
      </nav>
    </div>
  );
}
