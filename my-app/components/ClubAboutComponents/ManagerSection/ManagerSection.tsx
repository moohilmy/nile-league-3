import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
export default function ManagerSection() {
  return (
    <div className={styles.managerSection}>
        <header className={styles.managerHeader}>
            <h2 className="nile-league-heading">Manager information</h2>
        </header>
      <div className={styles.managerContent}>
        <ul className={styles.managerInfoList}>
          <li className={styles.infoItem}>
            <div className={styles.infoHeader}>name:</div>
            <div>jess thorup</div>
          </li>
          <li className={styles.infoItem}>
            <div className={styles.infoHeader}>age:</div>
            <div>55</div>
          </li>
          <li className={styles.infoItem}>
            <div className={styles.infoHeader}>nationality:</div>
            <div>DK</div>
          </li>
        </ul>
        <div className={styles.managerImg}>
          <Image
            src={"/nile-player-card.png"}
            alt=""
            width={400}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
