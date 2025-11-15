import React from "react";
import LineupSection from "../LineupSection/LineupSection";
import styles from "./styles.module.css";
import LineupImage from "./LineupImage";
export default function LineupBackground() {
  return (
    <div className={styles.lineupBackground}>
      <LineupImage />
      <LineupSection teamId={1} />
      <LineupSection isAway={true} teamId={2} />
    </div>
  );
}
