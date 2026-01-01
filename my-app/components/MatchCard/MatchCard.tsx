import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
type typeTeam = {
  teamName: string;
  score: number;
  teamImg: string;
};
export default function MatchCard({
  date,
  teamHome,
  header,
  linkContent,

  teamAway,
}: {
  date: string;
  linkContent: string;
  header: string;
  teamHome: typeTeam;

  teamAway: typeTeam;
}) {
  return (
    <div className="nile-league-box">
      <div className={styles.matchCard}>
        <header className={"nile-league-subHeader"}>
          <h1 className={"nile-league-heading"}>{header}</h1>
          <span className={styles.matchCardDate}>{date}</span>
        </header>
        <div className={styles.matchCardContent}>
          <div className={styles.matchCardClub}>
            <div className={styles.matchCardClubImg}>
              <Image
                src={teamHome.teamImg}
                alt={`${teamHome.teamName} logo `}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <div>
              <p className={styles.matchCardClubName}>{teamHome.teamName}</p>
            </div>
          </div>

          <div className={styles.matchCardScoreBoard}>
            <div className={styles.scoreBoard}>{teamHome.score}</div>
            <div className={styles.scoreBoard}>{teamAway.score}</div>
          </div>

          <div className={styles.matchCardClub}>
            <div className={styles.matchCardClubImg}>
              <Image
                src={teamAway.teamImg}
                alt={`${teamAway.teamName} logo `}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <div>
              <p className={styles.matchCardClubName}>{teamAway.teamName}</p>
            </div>
          </div>
        </div>

        <div className={styles.matchCardFooter}>
          <Link href={"/nile-league/matches/1"} className=" nile-league-btn">
            {linkContent}
          </Link>
        </div>
      </div>
    </div>
  );
}
