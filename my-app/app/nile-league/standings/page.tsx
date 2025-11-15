import React from "react";
import styles from "./style.module.css";
import StandingsTable from "@/components/StandingsTable/StandingsTable";
const page = () => {
  return (
    <section className={`${styles.standingsSection} nile-league-wrapper`}>
      <div className={styles.standingsHeader}>
        <div>
          <h1 className={styles.standingsHeading}>Nile League</h1>
          <p className={styles.standingsSubHeader}>
            Standings of the Nile League 24/25
          </p>
        </div>
      </div>
      <StandingsTable />
      <div className={styles.standingsFooter}>
        <h2 className={styles.standingsKeyHeader}>Nile League Key</h2>
        <div className={styles.standingsKeys}>
          <div className={`${styles.standingsKey} ${styles.champion}`}>champion</div>
          <div  className={`${styles.standingsKey} ${styles.CafChampions}`}>caf champions league</div>
          <div  className={`${styles.standingsKey} ${styles.CafConfederation}`}>caf confederation cup</div>
          <div  className={`${styles.standingsKey} ${styles.relegation}`}>relegation</div>
        </div>
      </div>
    </section>
  );
};

export default page;
