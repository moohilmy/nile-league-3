import React from "react";
import styles from "./styles.module.css";
export default function BoardSection({
  homeResult,
  awayResult,
  isTimeKickoff = false,
  timeForHour,
  timeForMin,
}: {
  homeResult?: string | number;
  awayResult?: string | number;
  timeForHour?: string | number;
  timeForMin?: string | number;
  isTimeKickoff?: boolean;
}) {
  return (
    <div className={styles.boardSection}>
      {isTimeKickoff ? (
        <>
          <div className={styles.timeBox}>{timeForHour}</div>
          <span>:</span>
          <div className={styles.timeBox}>{timeForMin}</div>
        </>
      ) : (
        <>
          <div className={styles.resultBox}>{homeResult}</div>
          <div className={styles.resultBox}>{awayResult}</div>
        </>
      )}
    </div>
  );
}
