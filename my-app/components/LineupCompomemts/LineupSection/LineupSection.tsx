import React from "react";
import PlayerCardLineup from "../PlayerCardLineup/PlayerCardLineup";
import styles from "./styles.module.css";

const players = {
  gk: [{ id: 1, name: "Alisson Becker", number: 1 }],
  defenders: [
    { id: 26, name: "Robertson", number: 26 },
    { id: 4, name: "Van Dijk", number: 4 },
    { id: 5, name: "Konaté", number: 5 },
    { id: 66, name: "Alexander-Arnold", number: 66 },
  ],
  midfielders: [
    { id: 8, name: "Szoboszlai", number: 8 },
    { id: 10, name: "Mac Allister", number: 10 },
    { id: 17, name: "Jones", number: 17 },
  ],
  forwards: [
    { id: 7, name: "Luis Díaz", number: 7 },
    { id: 9, name: "Darwin Núñez", number: 9 },
    { id: 11, name: "Mohamed Salah", number: 11 },
  ],
};

export default function LineupSection({
  isAway = false,
  teamId,
}: {
  isAway?: boolean;
  teamId: number;
}) {
  return (
    <div
      className={`${styles.lineUpSection} ${
        isAway ? styles.lineUpSectionAway : styles.lineUpSectionHome
      } t${teamId}`}
    >
      {Object.entries(players).map(([rowName, rowPlayers]) => (
        <div key={rowName} className={styles.lineUpRow}>
          {rowPlayers.map((p) => (
            <PlayerCardLineup key={p.id}  />
          ))}
        </div>
      ))}
    </div>
  );
}
