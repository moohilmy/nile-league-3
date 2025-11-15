import MatchItems from "./MatchItems";
import styles from "./styles.module.css";

export default function MatchesList({ matchesList }: { matchesList: number[] }) {
  return (

      <ul className={styles.matchweekList}>
        {matchesList.map((_,index) => (
          <MatchItems key={index + 1} />
        ))}
      </ul>
  );
}
