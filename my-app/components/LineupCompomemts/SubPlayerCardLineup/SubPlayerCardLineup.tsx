import React from "react";
import styles from "./styles.module.css";
import { FootBall, RedCard, Shirt, Substitution } from "@/app/SVG";
export default function SubPlayerCardLineup() {
  return (
    <div className={`${styles.subPlayerCardLineup} `}>
      <header className={styles.subPlayerCardLineupHeader}>
        <div className={styles.subPlayerCardLineupShirt}>
          <Shirt />
          <span className={styles.subPlayerCardLineupNumber}>1</span>
        </div>
      </header>
      <div className={styles.subPlayerCardLineupBody}>
        <div>
          <span className={styles.subPlayerCardLineupName}>Player Name</span>
          <div className={styles.subPlayerCardLineupEvent}>
            <div className={styles.subPlayerCardLineupEventItem}>
              <FootBall />
            </div>
            <div className={styles.subPlayerCardLineupEventItem}>
              <RedCard />
            </div>
          </div>
        </div>
        <div>
          <span>
            <b>65&apos;</b>
          </span>
          <div className={styles.subItem}>
            <Substitution />
          </div>
        </div>
      </div>
    </div>
  );
}
