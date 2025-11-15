import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
const StatsCardPlayer = ({statName} : {statName : string}) => {
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
                  <div className={styles.topFirstName}>first</div>
                  <div className={styles.topLastName}>last</div>
                  <div className={styles.topClub}>
                    <Image
                      src={"/team-logo/alahly.svg"}
                      alt="club name"
                      width={20}
                      height={20}
                    />
                    <span className={styles.topClubName}>al ahly</span>
                  </div>
                </div>
                <div className={styles.topStatRecord}>10</div>
              </div>
              <div className={styles.topimgContainer}>
                <div className={styles.topPlayerImg}>
                  <Image
                    src={"/nile-player-card.png"}
                    alt=""
                    height={180}
                    width={180}
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
                <div className={styles.statRowPlayerInfo}>
                  <h2 className={styles.statRowName}>ahmed zizo</h2>
                  <span className={styles.statRowClubName}>zamalek</span>
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
              href={`/nile-league/stats/players/${statName.replace(/\s+/g, '-')}`}
              className="nile-league-link"
            />
            view full stats
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCardPlayer;
