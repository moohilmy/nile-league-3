import { PlayerType } from "@/types";
import PlayerCard from "../../PlayerCard/PlayerCard";
import styles from './style.module.css'
const SquadLayout = ({
  playersList,
  positionHeader,
}: {
  playersList: PlayerType[];
  positionHeader: string;
}) => {
  return (
    <section className="nile-league-wrapper">
      <h1 className={styles.positionHeading}>{positionHeader}</h1>
      <div className={styles.positionList}>
        {playersList.map((player, index) => (
          <PlayerCard key={index} player={player} />
        ))}
      </div>
    </section>
  );
};

export default SquadLayout;
