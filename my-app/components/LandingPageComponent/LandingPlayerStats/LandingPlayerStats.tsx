import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
export default function LandingPlayerStats() {
  return (
    <ul className={`${styles.statsList} t1`}>
      <li className={styles.topPlayerItem}>
        <div className={styles.topPlayerInfo}>
          <div className={styles.statRecord}>5</div>
          <div className={styles.statName}>goals</div>
          <div className={styles.statRank}>1</div>
          <h2 className={styles.statPlayerName}>salah mohsen</h2>
          <div className={styles.statTeamInfo}>
            <Image
              src={"/team-logo/alahly.svg"}
              alt=""
              height={32}
              width={32}
              className="size-8"
            />
            <div>al ahly</div>
          </div>
        </div>

        <Image src={"/nile-player-card.png"} alt="" width={260} height={260} />
      </li>
      {[1, 2, 3, 4].map((item) => (
        <li key={item} className={styles.playerStatItem}>
          <div className={styles.statPlayerDetailsList}>
            <div className={styles.statRankList}>{item + 1}</div>
            <Image
              src={"/team-logo/almasry.svg"}
              alt=""
              height={24}
              width={24}
              className="size-6"
            />
            <h3 className={styles.statPlayerNameList}>salah mohsen</h3>
          </div>
          <div className={styles.statRecordList}>4</div>
        </li>
      ))}
    </ul>
  );
}
