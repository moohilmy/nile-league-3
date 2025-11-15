import styles from "./styles.module.css";
import React from "react";

export default function TeamBackGround({isTeamAway = false, clubID}: {isTeamAway?: boolean, clubID : number | string}) {
  return (
    <div
      className={`${styles.teamBackground} ${isTeamAway ? styles.teamAwayBackground :  styles.teamHomeBackground } t${clubID}`}
    />
  );
}
