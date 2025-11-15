import { StatsCardPlayer } from "@/components/StatsCard";
import styles from "./styles.module.css";
const statsNames: string[] = ["goals", "assist", "yellow card", "red card"];

export default function StatsPlayersLayout() {
  return (
    <section className={`nile-league-wrapper ${styles.statsLayoutSection}`}>
      <header>
        <h1 className={styles.statsLayoutHeader}>2024/25 Player Stats</h1>
      </header>
      <div className={`${styles.statsLayoutContent}`}>
        {statsNames.map((name, index) => (
          <StatsCardPlayer statName={name} key={index} />
        ))}
      </div>
    </section>
  );
}
