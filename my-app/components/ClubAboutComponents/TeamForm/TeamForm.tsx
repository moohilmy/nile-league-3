
import React from "react";
import styles from "./styles.module.css";
import TeamFormItem from "./TeamFormItem";
const teamFormData = [
  {
    team: { teamName: "Pyramids", teamImg: "/team-logo/pyramids.svg" },
    score: { teamHome: 3, teamAway: 3 },
    status: "draw",
  },
  {
    team: { teamName: "Smouha", teamImg: "/team-logo/smouha.svg" },
    score: { teamHome: 2, teamAway: 3 },
    status: "lose",
  },
  {
    team: { teamName: "Ghazl", teamImg: "/team-logo/ghazl.svg" },
    score: { teamHome: 1, teamAway: 1 },
    status: "draw",
  },
  {
    team: { teamName: "Modern Future", teamImg: "/team-logo/modren.svg" },
    score: { teamHome: 0, teamAway: 3 },
    status: "win",
  },
  {
    team: { teamName: "Zamalek", teamImg: "/team-logo/zamalek.svg" },
    score: { teamHome: 1, teamAway: 3 },
    status: "win",
  },
];

export default function TeamForm() {
  return (
    <div className="nile-league-box">
      <header className="nile-league-subHeader">
        <h1 className="nile-league-heading">team form</h1>
      </header>

      <ul className={styles.teamFormList}>
        {teamFormData.map((item, index) => (
          <TeamFormItem
            key={index}
            team={item.team}
            score={item.score}
            status={item.status}
          />
        ))}
      </ul>
    </div>
  );
}
