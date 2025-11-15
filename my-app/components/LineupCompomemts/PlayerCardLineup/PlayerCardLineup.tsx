import React from "react";
import styles from "./styles.module.css";
import { FootBall, RedCard, Shirt, Substitution } from "@/app/SVG";
export default function PlayerCardLineup() {
  return (
    <div className={`${styles.playerCardLineup} `}>
      <header className={styles.playerCardLineupHeader}>
        <div className={styles.playerCardLineupShirt}>
          <Shirt />
          <span className={styles.playerCardLineupNumber}>1</span>
        </div>
      </header>
      <div className={styles.playerCardLineupBody}>
        <h2 className={styles.playerCardLineupName}>Player Name</h2>
        <div className={styles.playerCardLineupEvent}>
          <div className={styles.playerCardLineupEventItem}>
            <Substitution/>
          </div>
          <div className={styles.playerCardLineupEventItem}>
            <FootBall/>
          </div>
          <div className={styles.playerCardLineupEventItem}>
            <RedCard/>
          </div>
        </div>
      </div>
    </div>
  );
}
