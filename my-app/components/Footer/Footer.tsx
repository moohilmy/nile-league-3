import Sponsores from "./Sponsores";
import Image from "next/image";
import Link from "next/link";
import footerIcone from "@/public/nile.svg";
import Links from "./Links";
import styles from "./styles.module.css";
import { Facebook, Instagram, TikTok, X } from "@/app/SVG/Social-madia";
import React from "react";

const links: { name: string; path: string }[] = [
  { name: "fixtures", path: "/nile-league/fixtures" },
  { name: "Standings", path: "/nile-league/standings" },
  { name: "Stats", path: "/nile-league/stats" },
  { name: "News", path: "/nile-league/news" },
  { name: "Videos", path: "/nile-league/videos" },
  { name: "Clubs", path: "/nile-league/clubs" },
  { name: "History", path: "/nile-league/history" },
];

const socialMadia: { name: string; url: string; icon: React.ReactNode }[] = [
  {
    name: "facebook",
    url: "https://www.facebook.com/epl.eg1",
    icon: <Facebook />,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/epl.eg",
    icon: <Instagram />,
  },
  {
    name: "tiktok",
    url: "https://www.tiktok.com/@epl.eg",
    icon: <TikTok />,
  },
  {
    name: "twitter",
    url: "https://x.com/epl_eg",
    icon: <X />,
  },
];
const derbyMatches: { name: string; path: string }[] = [
  { name: "clasico", path: "/nile-league/matches/1" },
  { name: "Alexandria Derby", path: "/nile-league/matches/1" },
  { name: "Port Said Derby", path: "/nile-league/matches/1" },
  { name: "Mediterranean  clasico", path: "/nile-league/matches/1" },
]
const Footer = () => {
  return (
    <>
      <Sponsores />
      <footer className={styles.footer}>
        <div className={` ${styles.footerWrapper}`}>
          <Link href={"/"} className={styles.footericon}>
            <Image
              alt="epl"
              src={footerIcone}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
          <div className={styles.footerContent}>
            <div className={styles.footerinfo}>
              <p className={styles.footerName}>egyptian premier league</p>
              <p className={styles.footerDetails}>
                The Egyptian Professional Clubs Association is the entity
                responsible for managing the Egyptian Premier League competition
                and the Egyptian Professional Clubs Cup competition.
              </p>
            </div>

            <div className={styles.footerLinksContainer}>
              <Links arrLinks={links} />
              <Links arrLinks={derbyMatches} />
            </div>
          </div>
        </div>
        <div className={` ${styles.copyRightContent}`}>
          <div className={styles.copyRightTextContainer}>
            &copy;
            <span className={styles.copyRightText}>
              all rights reserved 2025
            </span>
          </div>
          <ul className={styles.socialMediaIcons}>
            {socialMadia.map((item, index) => (
              <li className={styles.socialMediaIcon} key={index}>
                <Link
                  href={item.url}
                  target="_blank"
                  className="nile-league-link"
                />
                {item.icon}
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
