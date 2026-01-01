import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

export default function FixtureSideBar({
  title,
  matches,
}: {
  title: string;
  matches: number[];
}) {
  return (
    <div className={styles.fixtureSideBar}>
      <header className="nile-league-subHeader">
        <h1 className={'nile-league-heading'}>{title}</h1>
      </header>
      <ul className={styles.fixtureList}>
        {matches.map((match, index) => (
          <li className={styles.fixtureItem} key={index}>
            <header>
              <h2 className={styles.fixtureDate}>12 nov - 7:30pm</h2>
            </header>
            <div className={styles.fixtureContent}>
              <div className={`${styles.fixtureTeamBox} ${styles.fixtureHomeTeamBox}`}>
                <div className={styles.fixtureTeamImg}>
                  <Image src={"/team-logo/alahly.svg"} alt="" fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                </div>
                <p className={styles.fixtureTeamName}>asc</p>
              </div>
              <div className={styles.vsBox}>vs</div>
              <div className={`${styles.fixtureTeamBox} ${styles.fixtureAwayTeamBox}`}>
                <div className={styles.fixtureTeamImg}>
                  <Image src={"/team-logo/zamalek.svg"} alt="" fill   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                </div>
                <p className={styles.fixtureTeamName}>zfc</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.fixtureBtn}>
        <Link href={'/nile-league/fixtures'} className={`nile-league-btn ${styles.fixtureLinkBtn}`}>see all matches</Link>
      </div>
    </div>
  );
}
