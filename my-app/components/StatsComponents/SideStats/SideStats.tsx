import React from "react";
import { CircularProgress } from "@/elements";
import styles from './styles.module.css'
export default function SideStats({
  sideStatsTitle,
  teamID,
  percent,
}: {
  sideStatsTitle: string;
  teamID: string | number;
  percent: number;
}) {
  return (
    <div className={`${styles.sideStats}`}>
      <h5 className={styles.sideStatsTitle}>
        {sideStatsTitle}
      </h5>
      <CircularProgress className={`t${teamID}`}  percentage={percent} />
    </div>
  );
}
