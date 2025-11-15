import React from "react";
import { PlayersList } from "..";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getContryFlag } from "@/lib/getCountryFlag";
import styles from "./style.module.css";
import "./variables.css";
const page = async ({ params }: { params: Promise<{ playerId: string }> }) => {
  const { playerId } = await params;
  const player = PlayersList.find((e) => e.id === Number(playerId));
  if (player === undefined) {
    notFound();
  }
  const {
    name,
    position,
    image,
    stats,
    club,
    contryCode,
    preferredFoot,
    kitNumber,
    age,
  } = player;
  const fullname = name.split(" ");
  const contryData = await getContryFlag(contryCode);
  return (
    <section className={`${styles.playerSection} t${club.teamId}`}>
      <div className={styles.playerInfoSection}>
        <div className={styles.playerTeamInfo}>
          <div>
            <div className={styles.playerName}>
              <span className={styles.playerNamberKit}>{kitNumber}</span>
              <div className={styles.playerFirstName}>{fullname[0]}</div>
            </div>
            <div className={styles.playerLastName}>{fullname[1]}</div>
          </div>
          <div className={styles.playerTeamLogo}>
            <Image src={club.teamLogo} alt={club.teamName} fill />
          </div>
        </div>
        <div className={styles.playerInfo}>
          <ul className={styles.playerInfoList}>
            <li className={styles.playerInfoItem}>
              <div className={styles.playerInfoHeading}>Nationality</div>
              <div className={styles.playerInfoContent}>
                <Image
                  src={contryData.rectangle_image_url}
                  height={25}
                  width={25}
                  alt={contryData.country}
                />
                <span>name</span>
              </div>
            </li>
            <li className={styles.playerInfoItem}>
              <div className={styles.playerInfoHeading}>position</div>
              <div className={styles.playerInfoContent}>{position}</div>
            </li>
            <li className={styles.playerInfoItem}>
              <div className={styles.playerInfoHeading}>age</div>
              <div className={styles.playerInfoContent}>{age}</div>
            </li>
            <li className={styles.playerInfoItem}>
              <div className={styles.playerInfoHeading}>height</div>
              <div className={styles.playerInfoContent}>180 cm</div>
            </li>
            <li className={styles.playerInfoItem}>
              <div className={styles.playerInfoHeading}>preferred foot</div>
              <div className={styles.playerInfoContent}>{preferredFoot}</div>
            </li>
          </ul>
        </div>
        <div className={styles.playerStats}>
          {stats.map((stat, i) => (
            <ul className={styles.playerStatsList} key={i}>
              {Object.entries(stat).map(([key, value]) => (
                <li className={styles.playerStatsItem} key={key}>
                  <div className={styles.playerStatHeading}>{key}</div>
                  <div className={styles.playerstatContent}>{value}</div>
                </li>
              ))}
              <li className={styles.playerStatsItem}>
                <div className={styles.playerStatHeading}>red card</div>
                <div className={styles.playerstatContent}>0</div>
              </li>
              <li className={styles.playerStatsItem}>
                <div className={styles.playerStatHeading}>yellow card</div>
                <div className={styles.playerstatContent}>5</div>
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className={styles.playerImgSection}>
        <div className={styles.playerImgContent}>
          <Image
            sizes="(max-width: 768px):  80vw"
            src={image}
            alt={name}
            height={400}
            width={600}
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </section>
    //**
    // in future
    // news about player */
  );
};

export default page;
