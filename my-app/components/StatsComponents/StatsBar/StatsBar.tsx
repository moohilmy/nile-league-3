import React from "react";
import styles from "./styles.module.css";
export default function StatsBar({
  homeTeamValue,
  awayTeamValue,
  statsName,
  homeTeamID,
  awayTeamID,
}: {
  homeTeamValue: number;
  awayTeamValue: number;
  statsName: string;
  homeTeamID: string | number;
  awayTeamID: string | number;
}) {
  const isPercentage =
    homeTeamValue + awayTeamValue > 99 && homeTeamValue + awayTeamValue < 101
      ? true
      : false;
  const total = homeTeamValue + awayTeamValue;
  const homePercent = isPercentage
    ? homeTeamValue
    : (homeTeamValue / total) * 100;
  const awayPercent = isPercentage
    ? awayTeamValue
    : (awayTeamValue / total) * 100;
  return (
    <div className={styles.stats}>
      <div className={styles.statsheader}>
        <div className={`${styles.percent} `}>{homeTeamValue}</div>
        <h3 className={styles.statsName}>{`${statsName}`}</h3>
        <div className={`${styles.percent}`}>{awayTeamValue}</div>
      </div>
      <div className={styles.statsBar}>
        <span
          className={`${styles.statspercent} ${styles.statsHomeTeam} t${homeTeamID}`}
          style={{
            width: `${homePercent}%`,
          }}
        ></span>
        <span
          className={`${styles.statspercent} ${styles.statsAwayTeam} t${awayTeamID}`}
          style={{
            width: `${awayPercent}%`,
          }}
        ></span>
      </div>
    </div>
  );
}
