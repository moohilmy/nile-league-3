import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";

type Tstatus = {
  statusName: string;
  statusNumber: number;
};
const PlayerSection = ({
  title,
  playerName,
  status,
  teamID,
}: {
  title: string;
  playerName: string;
  status: Tstatus[];
  teamID: string | number;
}) => {
  return (
    <div className={`t${teamID} ${styles.playerStatsSection}`}>
      <div className={styles.playerStatsInfo}>
        <div className={styles.playerStatsImg}>
          <Image
            src={"/nile-player-card.png"}
            alt=""
            width={300}
            height={400}
          />
        </div>
        <div className={styles.playerNameSection}>{playerName}</div>
      </div>
      <div className={styles.playerStatsContent}>
        <h3 className={styles.playerTitle}>{title}</h3>
        <ul className={styles.playerStatsInfoList}>
          {status.map((s, index) => (
            <li key={index} className={styles.playrerStatsInfoItem}>
              <div className={styles.statsName}>{s.statusName}:</div>
              <div className={styles.statsNumber}>{s.statusNumber}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlayerSection;
