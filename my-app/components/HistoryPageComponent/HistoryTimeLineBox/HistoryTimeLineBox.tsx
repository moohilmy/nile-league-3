import styles from "./styles.module.css";
import Image from "next/image";

export default function HistoryTimeLineBox({
  record,
  content,
  img,
}: {
  record: string;
  content: string;
  img: string;
  index: number;
}) {
  return (
    <div className={`${styles.historyTimeLineBox} card`}>
      <div className={`${styles.cardContainer}  card-inner`}>
        <div className={`${styles.historyTimeLineTextArea} card-text-box`}>
          <h1 className={styles.historyTimeLineSpot}>{record}</h1>

            <p className={styles.historyTimeLineText}>{content}</p>
        </div>
        <div className={styles.historyTimeLineImage}>
          <span className={styles.historyImgBackground} />
          <Image src={img} fill alt="fonder of egyption league" />
        </div>
      </div>
    </div>
  );
}
