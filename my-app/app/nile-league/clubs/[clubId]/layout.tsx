import React from "react";
import Image from "next/image";
import styles from "./style.module.css";
import ClubNav from "@/components/ClubNav/ClubNav";
import { clubsList } from "..";
import { notFound } from "next/navigation";

const layout = async ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ clubId: string }>;
}>) => {
  const { clubId } = await params;
  const club = clubsList.find(e => e.id === Number(clubId))
  if (club === undefined){
    return notFound()
  }
  const  {name, image} = club
  return (
    <section>
      <div className={`${styles.ClubLandingPage} t${clubId}`}>
        <div className={styles.ClubLandingBg} />
        <div className={`${styles.ClubInfo} nile-league-wrapper`}>
          <div className={styles.ClubLogo}>
            <Image src={image} fill alt={name} />
          </div>
          <div>
            <h1 className={styles.ClubName}>{name}</h1>
            <ul className={styles.ClubDetailsList}>
              <li className={styles.ClubDetailsListItem}>
                <span>es:</span>1907
              </li>
              <li className={styles.ClubDetailsListItem}>
                <span>stadium:</span>cairo Stadium, cairo
              </li>
              <li className={styles.ClubDetailsListItem}>
                <span>capacity:</span>75,000
              </li>
            </ul>
          </div>
        </div>
        <div className="nile-league-wrapper">
          <ClubNav />
        </div>
      </div>
      {children}
    </section>
  );
};

export default layout;
