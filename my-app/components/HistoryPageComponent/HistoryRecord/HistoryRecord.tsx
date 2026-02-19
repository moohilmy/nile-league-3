import Image from "next/image";
import { champions } from ".";
import HistoryRecordBox from "./HistoryRecordBox/HistoryRecordBox";
import styles from "./styles.module.css";

export default function HistoryRecord() {
  return (
    <section className={styles.historyRecordSection}>
      <div className={styles.historyRecordSectionImgBox}>
        <div className={styles.historyRecordSectionImg}>
          <Image
            fill
            src={"/history/history-record2.png"}
            alt="history record"
            style={{
              objectFit: 'cover'
            }}
          />
        </div>
      </div>
      <div className={styles.historyRecordSectionContent}>
        {champions.map((champion, index) => (
          <HistoryRecordBox
            teamID={champion.teamID}
            key={index}
            name={champion.name}
            count={champion.count}
            img={champion.img}
          />
        ))}
      </div>
    </section>
  );
}
