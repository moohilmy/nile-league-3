import React from "react";
import styles from "./styles.module.css";
export default function MatchInfoBox({
  iconOfInfo,
  infoHeading,
  content,
}: {
  iconOfInfo: React.ReactNode;
  infoHeading?: string;
  content: string;
}) {
  return (
    <div className={styles.matchInfoBox}>
      <div className={styles.infoIcon}>{iconOfInfo}</div>
      <div className={styles.infoContent}>
        {
          infoHeading && <div>{infoHeading}</div>
        }
        <div>{content}</div>
      </div>
    </div>
  );
}
