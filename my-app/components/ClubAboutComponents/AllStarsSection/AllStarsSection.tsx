import React from "react";
import styles from "./styles.module.css";

import PlayerSection from "./PlayerSection";
const AllStarsSection = ({
  teamName,
  teamID,
}: {
  teamName: string;
  teamID: string | number;
}) => {
  return (
    <div>
      <header className="nile-league-subHeader">
        <h2 className="nile-league-heading">All stars of {teamName}</h2>
      </header>
      <div className={styles.AllStars}>
        <PlayerSection
          title="capitano"
          teamID={teamID}
          playerName="Mohamed El-Shenawy"
          status={[
            {
              statusName: "appearances",
              statusNumber: 20,
            },
            {
              statusName: "clean sheet",
              statusNumber: 10,
            },
            {
              statusName: "saves",
              statusNumber: 26,
            },
            {
              statusName: "yellow card",
              statusNumber: 2,
            },
            {
              statusName: "red card",
              statusNumber: 0,
            },
          ]}
        />
        <PlayerSection
          title="master assist"
          teamID={teamID}
          playerName="Ali Maaloul"
          status={[
            {
              statusName: "appearances",
              statusNumber: 20,
            },
            {
              statusName: "clean sheet",
              statusNumber: 10,
            },
            {
              statusName: "Assists",
              statusNumber: 8,
            },
            {
              statusName: 'goals',
              statusNumber: 5
            },
            {
              statusName: "yellow card",
              statusNumber: 2,
            },
            {
              statusName: "red card",
              statusNumber: 0,
            },
          ]}
        />
        <PlayerSection
          title="most score"
          teamID={teamID}
          playerName="wesam abo ali"
          status={[
            {
              statusName: "appearances",
              statusNumber: 20,
            },
            {
              statusName: "assists",
              statusNumber: 2,
            },
            {
              statusName: "goals",
              statusNumber: 8,
            },
            {
              statusName: "yellow card",
              statusNumber: 2,
            },
            {
              statusName: "red card",
              statusNumber: 0,
            },
          ]}
        />
        <PlayerSection
          title="most appearances"
          teamID={teamID}
          playerName="Mohamed El-Shenawy"
          status={[
            {
              statusName: "appearances",
              statusNumber: 20,
            },
            {
              statusName: "clean sheet",
              statusNumber: 10,
            },
            {
              statusName: "saves",
              statusNumber: 26,
            },
            {
              statusName: "yellow card",
              statusNumber: 2,
            },
            {
              statusName: "red card",
              statusNumber: 0,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default AllStarsSection;
