import React from "react";
import styles from "./styles.module.css";
import TeamMatchCard from "./TeamMatchCard";
import Image from "next/image";
import Link from "next/link";
export default function LandingMatchBox() {
  return (
    <div className={styles.matchCard}>
      <header className={styles.matchCardHeader}>
        <div>cairo Stadium, cairo</div>
      </header>
      <div className={styles.matchCardContent}>
        <TeamMatchCard teamImg="/team-logo/alahly.svg" teamName="al ahly" teamId={1} />

        <div className={styles.vsIcon}>vs</div>
        <TeamMatchCard
        teamId={5}
          teamImg="/team-logo/Ghazl.svg"
          teamName="ghazl el mahallah"
          isAway={true}
        />

   
      <footer className={styles.matchCardFooter}>
        <div>
          <Image src={'/nile-league-icon.png'} alt="" height={64} width={64} className="size-16 object-contain"/>
        </div>
        <div className={styles.matchCardDate}>
          12 nov - 7:30pm
        </div>
      </footer>
      <Link className="nile-league-link" href={'/nile-league/matches/1'} />
      </div>
    </div>
  );
}
