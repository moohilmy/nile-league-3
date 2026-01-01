import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

export default function TeamMatchCard({
  teamImg,
  teamName,
  isAway = false,
  teamId,
}: {
  teamName: string;
  teamImg: string;
  isAway?: boolean;
  teamId: number;
}) {
  return (
    <div
      className={`${
        isAway ? styles.awayMatchCard : styles.homeMatchCard
      } t${teamId}`}
    >
      <h1 className={styles.teamNameMatchCard}>{teamName}</h1>
      <div className={styles.teamImg}>
        <Image src={teamImg} alt="" fill style={{ objectFit: "contain" }} />
      </div>
    </div>
  );
}
