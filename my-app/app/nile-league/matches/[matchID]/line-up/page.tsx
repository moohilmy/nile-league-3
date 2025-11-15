import {
  TeamLineup,
  LineupBackground,
  SubstiutesList,
} from "@/components/LineupCompomemts";
import styles from "./styles.module.css";
export default function page() {
  return (
    <div
      className={`${styles.lineUpPage} nile-league-wrapper page-content-space"`}
    >
      <div className={styles.teamLineupContainer}>
        <TeamLineup
          logoURL="/team-logo/alahly.svg"
          isAway={false}
          teamName="Al Ahly"
          formation="4-3-3"
        />
        <LineupBackground />
        <TeamLineup
          logoURL="/team-logo/zamalek.svg"
          isAway={true}
          teamName="Zamalek"
          formation="4-3-3"
        />
      </div>
      <div className={`${styles.substitutesContainer}`}>
        <SubstiutesList teamName="alahly" logoURL="/team-logo/alahly.svg" teamId={1}/>
        <SubstiutesList teamName="Zamalek" logoURL="/team-logo/zamalek.svg" teamId={2}/>
       
      </div>
    </div>
  );
}
