import Image from "next/image";
import styles from "./styles.module.css";
export default function HistroyLanding() {
  return (
    <>
      <div className={styles.historyLanding}>
        <Image
          src={"/history-landing.png"}
          alt="history-landing-img"
          fill
          className={styles.historyImg}
        />
        <div className={styles.historyLandingContent}>
          <p className={styles.historyLandingMasterText}>
            welcome to the
            <span className={styles.historyLandingSpanText}>
              {" "}
              egyptian league{" "}
            </span>
            history
          </p>
          <p className={styles.historyLandingSubMasterText}>
            Where history meets dominance
          </p>
        </div>
      </div>
      <div className={'hestory-section-header'}>
        Centuries of legacy.
        <span className={styles.historyLandingSpanText}>
          {" "}
          Decades of football.{" "}
        </span>
        One powerful league.
      </div>
    </>
  );
}
