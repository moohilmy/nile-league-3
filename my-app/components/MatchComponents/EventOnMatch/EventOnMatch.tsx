import React from "react";
import { FootBall, RedCard, YellowCard, SecondYellowCard } from "@/app/SVG";
import styles from "./style.module.css";
export default function EventOnMatch({
  namePlayer,
  eventTime,
  typeOfEvent,
  subInfo = null,
  awayEvent = false,
}: {
  namePlayer: string;
  eventTime: string;
  subInfo?: string | null;
  awayEvent?: boolean;
  typeOfEvent: string;
}) {
  return (
    <div
      className={`${awayEvent ? styles.AwayEvent : styles.homeEvent} ${
        styles.eventBox
      }`}
    >
      <div className={`${styles.eventContent} ${awayEvent ? styles.AwayContentEvent : ''}`}>
        <div className={styles.playerEventName}>{namePlayer}</div>
        <div
          className={`${styles.eventIcon} ${
            awayEvent ? styles.awayEventIcon : ""
          } `}
        >
          <div className={styles.eventIconImg}>
            {typeOfEvent === "goal" ? (
              <FootBall />
            ) : typeOfEvent === "red-card" ? (
              <RedCard />
            ) : typeOfEvent === "yellow-card" ? (
              <YellowCard />
            ) : typeOfEvent === "second-color" ? (
              <SecondYellowCard />
            ) : (
              ""
            )}
          </div>
          <div> &apos; {eventTime}</div>
        </div>
      </div>
      {subInfo !== null && <div className={styles.subInfo}>{subInfo}</div>}
    </div>
  );
}
