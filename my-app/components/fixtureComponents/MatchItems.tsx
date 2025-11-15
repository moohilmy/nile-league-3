import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export default function MatchItems() {
  return (
    <li className={styles.matchweekItem}>
      <div className={styles.matchStatus}>
        <p className={styles.matchStatusContent}>FT</p>
      </div>
      <div className={styles.matchContiner}>
        <div className={`${styles.teamInfo} ${styles.teamHome}`}>
          <div className={styles.teamTitles}>
            <h3 className={styles.teamName}>team 1</h3>
            <h3 className={styles.teamShortName}>ASC</h3>
          </div>
          <div className={`${styles.teamLogo} ${styles.teamLogoHome} t1`}>
            <Image
              src={"/team-logo/alahly.svg"}
              width={25}
              height={25}
              loading="lazy"
              alt="team-home"
            />
          </div>
        </div>
        <div className={styles.scoreContainer}>
          <span>1</span>-<span>1</span>
        </div>
        <div className={`${styles.teamInfo} ${styles.teamAway}`}>
          <div className={`${styles.teamLogo} ${styles.teamLogoAway} t2`}>
            <Image
              src={"/team-logo/zamalek.svg"}
              width={25}
              height={25}
              loading="lazy"
              alt="team-away"
            />
          </div>
          <div className={styles.teamTitles}>
            <h3 className={styles.teamName}>team 2</h3>
            <h3 className={styles.teamShortName}>zfC</h3>
          </div>
        </div>
      </div>
      <Link href={"/nile-league/matches/1"} className="nile-league-link" />
    </li>
  );
}
