import React from "react";
import EventOnMatch from "../EventOnMatch/EventOnMatch";
import styles from './styles.module.css'
export default function EventSection({
  isTeamAway = false,
  events,
}: {
  isTeamAway?: boolean;
  events: number[];
}) {
  return (
    <div className={`${isTeamAway ? styles.eventAwaySection : ''} ${styles.eventSection}`}>
      {events.map((_, i) => (
        <EventOnMatch
          key={i}
          awayEvent={isTeamAway}
          namePlayer="a.afsha"
          subInfo={'a.maaloul (assist)'}
          typeOfEvent="goal"
          eventTime="38"
        />
      ))}
    </div>
  );
}
