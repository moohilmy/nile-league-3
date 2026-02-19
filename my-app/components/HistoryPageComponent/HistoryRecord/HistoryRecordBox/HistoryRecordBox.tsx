import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
const HistoryRecordBox = ({
  name,
  count,
  img,
  teamID,
}: {
  name: string;
  count: number;
  img: string;
  teamID: number | number[];
}) => {
  const percent = (count: number, max: number) => {
    if (max === 0) return 50; 

    const normalized = count / max; 
    const scaled = 20 + normalized * 30; 

    return Math.min(30, Math.max(20, scaled));
  };

  return (
    <div className={styles.historyRecordBox}>
      <div className={styles.historyRecordBoxContent}>
        <div
          className={`t${teamID} ${styles.barPercent}`}
          style={{
            width: `${percent(count, 50)}%`,
          }}
        >
          <h3 className={styles.historyRecordBoxContentText}>{count}</h3>
          <span className={styles.teamSlogan}/>
        </div>

        <div>
          <Image src={img} alt={name} width={35} height={35} />
        </div>
       
          <h3 className={styles.historyRecordBoxName}>{name}</h3>

      </div>
    </div>
  );
};

export default HistoryRecordBox;
