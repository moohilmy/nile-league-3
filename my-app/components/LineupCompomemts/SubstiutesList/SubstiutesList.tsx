import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import SubPlayerCardLineup from "../SubPlayerCardLineup/SubPlayerCardLineup";

export default function SubstiutesList({
  logoURL,
  teamName,
  teamId,
}: {
  logoURL: string;
  teamName: string;
  teamId: number;
}) {
  return (
    <div className={styles.substitutes}>
      <header className={styles.substitutesHeader}>
        <div className={styles.teamSubstitutesLogo}>
          <Image src={logoURL} alt={`${teamName} Logo`} fill />
        </div>
        <h2 className={styles.substitutesTitle}>Substitutes</h2>
      </header>
      <ul className={`t${teamId} ${styles.substitutesList}`}>
        {Array.from({ length: 7 }).map((_, index) => (
          <li key={index} className={styles.substituteItem}>
            <SubPlayerCardLineup />
          </li>
        ))}
      </ul>
      <div className={styles.substitutesManager}>Manager / Coach</div>
      <div className={styles.substitutesCoachCard}>
        <Image
          src="/nile-player-card.png"
          alt="Nile League Logo"
          width={60}
          height={20}
        />
        <div className={styles.substitutesCoachInfo}>
          <b>Coach Name</b>
          <span className={styles.substitutesCoachNationality}>EG</span>
        </div>
      </div>
    </div>
  );
}
