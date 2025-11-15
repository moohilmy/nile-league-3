import React from "react";
import styles from "./styles.module.css";
import OnSport from "@/public/ONSport.svg";
import Image from "next/image";
export default function EventSubInfo() {
  return (
    <div className={styles.EventSubInfo}>
      <div className={styles.TvIcon}>
        <Image fill alt="live on" src={OnSport} />
      </div>
      <div>Full time</div>
    </div>
  );
}
