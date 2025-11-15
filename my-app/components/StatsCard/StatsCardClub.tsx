import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
export default function StatsCardClub({statName} : {statName : string}) {
  return (
    <section className={styles.statSection}>
      <header>
        <h1 className={styles.statCardHeader}>{statName}</h1>
      </header>
      <div className={`${styles.statCard} t1`}>
        <ul>
          <li className={styles.topStat}>
            <div className={styles.topContent}>
              <div className={styles.topStatInfo}>
                <div className={styles.topInfo}>
                  <div className={styles.topPos}>1</div>
                  <div className={styles.topClubHeroName}>al ahly</div>
                </div>
                <div className={styles.topStatRecord}>10</div>
              </div>
              <div className={styles.topimgContainer}>
                <div className={styles.topClubImg}>
                  <Image
                    src={"/team-logo/alahly.svg"}
                    alt=""
                    height={120}
                    width={100}
                  />
                </div>
              </div>
            </div>
          </li>
          {Array.from({ length: 4 }).map((_, index ) => (
            <li key={index} className={styles.statRow}>
              <div className={styles.statRowContent}>
                <div className={styles.statRowPos}>{index + 2}</div>
                <div>
                  <Image
                    src={"/team-logo/zamalek.svg"}
                    alt=""
                    height={20}
                    width={20}
                  />
                </div>
                <div className={styles.statRowInfo}>
                  <h2 className={styles.statRowClubName}>zamalek</h2>
                </div>
              </div>
              <div className={styles.statRowRecord}>
                <span>8</span>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.statButtonContainer}>
          <div className={styles.statButton}>
            <Link
              href={`/nile-league/stats/clubs/${statName.replace(/\s+/g, '-')}`}
              className="nile-league-link"
            />
            view full stats
          </div>
        </div>
      </div>
    </section>
  )
}
