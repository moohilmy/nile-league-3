import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
export default function TeamLineup({
  isAway = false,
  teamName,
  formation,
  logoURL ,
}: {
  isAway?: boolean;
  logoURL: string;
  teamName: string;
  formation: string;
}) {
  return (
    <div
      className={`${styles.teamLineup} ${
        isAway ? styles.teamLineupAway : styles.teamLineupHome
      }`}
    >
      <header className={`${styles.teamLineupHeader} ${
        isAway ? styles.teamLineupHeaderAway : styles.teamLineupHeaderHome
      }`}>
        <Image src={logoURL} alt="home-team" width={35} height={35} />

        <div>{teamName}</div>
      </header>
      <div className={styles.teamLineupFormation}>{formation}</div>
    </div>
  );
}
