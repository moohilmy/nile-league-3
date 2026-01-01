import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

export default function TeamFormItem({
  team,
  score,
  status,
}: {
  team: { teamName: string; teamImg: string };
  score: { teamHome: number; teamAway: number };
  status: string;
}) {
  return (
    <li className={styles.teamFormItem}>
      <header className={styles.teamFormImg}>
        <Image src={team.teamImg} alt={team.teamName} fill   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
      </header>
      <div className={styles.teamFormBoard}>
        <div className={`${styles.teamFormScoreBoard} ${status}`}>
          {score.teamHome}
        </div>
        <div className={`${styles.teamFormScoreBoard} ${status}`}>
          {score.teamAway}
        </div>
      </div>
      <Link href={"/nile-league/matches/1"} className="nile-league-link" />
    </li>
  );
}
