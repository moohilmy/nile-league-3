import React from "react";
import styles from "./styles.module.css";
import OnSport from "@/public/ONSport.svg";
import Image from "next/image";
export default function EventSubInfo() {
  return (
    <div className={styles.EventSubInfo}>
      <div className={styles.TvIcon}>
        <Image fill alt="live on" src={OnSport}   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
      </div>
      <div>Full time</div>
    </div>
  );
}
