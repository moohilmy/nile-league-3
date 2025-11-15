import React from "react";
import styles from "./styles.module.css";
import NileLeagueLanding from "@/components/NileLeagueLanding/NileLeagueLanding";
import { clubsList } from ".";
import ClubItemList from "@/components/ClubItemList/ClubItemList";



const page = () => {

  
  return (
    <>
      <NileLeagueLanding title="clubs" isInpage={true} />
      <section className={`nile-league-wrapper ${styles.teamsSection}`}>
        <div className={styles.teamsList}>
          {clubsList.map((club, index) => (
              <ClubItemList club={club} key={index}/>
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
