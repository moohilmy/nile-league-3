import { TagAndDate } from "@/elements";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
const LandingContentSection = ({
  header,
  mediaList,
  tagName,
}: {
  header: string;
  mediaList: number[];
  tagName: string;
}) => {
  return (
    <section>
      <header className="mb-3">
        <h1 className="nile-league-header">{header}</h1>
      </header>
      <div className={styles.landingContentSection}>
        <ul className={styles.landingContentList}>
          {mediaList.map((_, index) => (
            <li key={index} className={styles.landingContentListItem}>
              <Link
                href={"/nile-league/news/1"}
                className={"nile-league-link"}
              />
              <div className={`${styles.ContentListItem} nile-league-article`}>
                <div className={`${styles.landingContentImage} img-header`}>
                  <Image
                    alt="description"
                    src="/News/news1.png"
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className={"nile-league-mediaImage"}
                  />
                  <span className={"imgBackground"} />
                </div>
                <div className={styles.landingContentMedia}>
                  <h2
                    className={`mediaContentHeading ${styles.landingContentTitle}`}
                  >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti dolores eius rerum.
                  </h2>
                  <TagAndDate
                    tag={tagName}
                    publishedDate="2025-03-07T13:30:11Z"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LandingContentSection;
