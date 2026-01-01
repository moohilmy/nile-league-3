import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
const championshios = [
  {
    name: "egyptian league",
    img: "/league.png",
    count: 45,
  },
  {
    name: "egyptian cup",
    img: "/cup.png",
    count: 35,
  },
  {
    name: "league cup",
    img: "/league-cup.png",
    count: 0,
  },
  {
    name: "super cup",
    img: "/super.png",
    count: 16,
  },
];
const page = async ({ params }: { params: Promise<{ clubId: string }> }) => {
  const { clubId } = await params;
  console.log(clubId);

  return (
    <div className={`t${clubId}  nile-league-wrapper page-content-space`}>
      <div className={styles.clubInfo}>
        <div className={styles.clubInfoContent}>
          <h1 className={styles.summaryTitle}>About of Al Alahly</h1>

          <ul className={styles.clubInfoList}>
            <li className={styles.clubInfoItem}>
              <div className={styles.clubInfoTitle}>founded:</div>
              <div className={styles.clubItemInfo}>1907</div>
            </li>
            <li className={styles.clubInfoItem}>
              <div className={styles.clubInfoTitle}>nickname:</div>
              <div className={styles.clubItemInfo}>red devils</div>
            </li>
            <li className={styles.clubInfoItem}>
              <div className={styles.clubInfoTitle}>city:</div>
              <div className={styles.clubItemInfo}>cairo</div>
            </li>
            <li className={styles.clubInfoItem}>
              <div className={styles.clubInfoTitle}>stadium:</div>
              <div className={styles.clubItemInfo}>cairo stadium</div>
            </li>
            <li className={styles.clubInfoItem}>
              <div className={styles.clubInfoTitle}>website:</div>
              <div className={styles.clubItemInfo}>
                <Link
                  className={styles.clubLink}
                  href={"https://www.alahlyegypt.com"}
                >
                  alahly website
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.clubInfoImg}>
          <div>
            <span className={` ${styles.imgHover}`} />
            <Image
              src={"/club-about.jpg"}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
      <div className={styles.summary}>
        <div className={styles.summaryImg}>
          <span className={` ${styles.imgHover}`} />

          <Image
            src={"/club-about-1.jpg"}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className={styles.summaryCountent}>
          <h1 className={styles.summaryTitle}>summary of Al Alahly</h1>
          <p className={styles.summaryParagraph}>
            Al Ahly Sporting Club, founded in 1907, is one of Africa’s most
            successful and prestigious football institutions. Widely recognized
            as the “Club of the Century,” Al Ahly has built a legacy defined by
            excellence, professionalism, and an unwavering winning mentality.
            With a record number of domestic league titles, national cups, and
            CAF Champions League trophies, the club stands as a dominant force
            in regional and international competitions. Al Ahly also boasts a
            strong youth academy, a rich history of producing elite talent, and
            one of the largest and most passionate fan bases in the Arab world
            and Africa. Committed to continuous growth and sporting achievement,
            Al Ahly remains a symbol of ambition, leadership, and pride in
            global football.
          </p>
        </div>
      </div>
      <div className={styles.achievementWall}>
        <h3 className={styles.achievementWallTitle}>achievements wall</h3>
        <div className={styles.achievementWallContent}>
          <ul className={styles.achievementWallList}>
            {championshios.map((championship, index) => (
              <li key={index} className={styles.achievementItem}>
                <div className={styles.cupImagContainer}>
                  <Image
                    src={championship.img}
                    alt={championship.name}
                    className={`${styles.clubImg} ${
                      championship.count > 0 ? styles.clubImgActive : ""
                    }`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <span className={styles.countOfCup}>
                    {championship.count}
                  </span>
                </div>
                <div className={styles.championName}>{championship.name}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
