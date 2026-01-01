import React from "react";
import styles from "./styels.module.css";
function StatsBox({
  statsTitle,
  statsValue,
  bounsStyle,
  widthBox,
}: {
  statsTitle: string;
  statsValue: number;
  bounsStyle?: string;
  widthBox?: string;
}) {
  return (
    <div
      className={`${styles.statsBox} ${bounsStyle ?? bounsStyle}`}
      style={{
        width: widthBox ? widthBox : "auto",
      }}
    >
      <div className={styles.statsTitle}>{statsTitle} :</div>
      <div className={styles.statsValue}>{statsValue}</div>
    </div>
  );
}
export default function LandingGeneralStats() {
  return (
    <section>
      <div className="mb-3">
        <h1 className="nile-league-header">nile league General Stats</h1>
      </div>
      <ul className={styles.generalStatsList}>
        <li className={styles.generalStatsItem}>
          <StatsBox
            statsTitle="Matches played"
            statsValue={117}
            widthBox={((117 / 322) * 100).toFixed(2) + "%"}
          />
          <StatsBox
            statsTitle="to play"
            statsValue={205}
            widthBox={((205 / 322) * 100).toFixed(2) + "%"}
          />
        </li>
        <li className={styles.generalStatsItem}>
          <StatsBox
            statsTitle="goals"
            statsValue={216}
            widthBox={"100%"}
            bounsStyle={styles.totalGoals}
          />
          <StatsBox
            statsTitle="First half"
            statsValue={79}
            widthBox={((79 / 216) * 80).toFixed(2) + "%"}
          />
          <StatsBox
            statsTitle="second half"
            statsValue={122}
            widthBox={((122 / 216) * 80).toFixed(2) + "%"}
          />
          <StatsBox statsTitle="90+" statsValue={15} widthBox={"25%"} />
        </li>
        <li className={styles.generalStatsItem}>
          <StatsBox
            statsTitle="red cards"
            statsValue={41}
            widthBox={(100 / 3).toFixed(2) + "%"}
          />
          <StatsBox
            statsTitle="yellow cards"
            statsValue={565}
            widthBox={(100 / 3).toFixed(2) + "%"}
          />
          <StatsBox
            statsTitle="penalty"
            statsValue={35}
            widthBox={(100 / 3).toFixed(2) + "%"}
          />
        </li>
      </ul>
    </section>
  );
}
