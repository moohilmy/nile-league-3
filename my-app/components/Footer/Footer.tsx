import Sponsores from "./Sponsores";
import Image from "next/image";
import Link from "next/link";
import footerIcone from "@/public/nile.svg";
import Links from "./Links";
import styles from "./styles.module.css";
const Footer = () => {
  return (
    <>
      <Sponsores />
      <footer className={styles.footer}>
        <div className={` ${styles.footerWrapper}`}>
          <Link href={"/"} className={styles.footericon}>
            <Image alt="epl" src={footerIcone} sizes="100wv" />
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
              <ul className={styles.footerLinks}>
                <Links linkname="standings" url="test" />
                <Links linkname="news" url="test" />
                <Links linkname="test" url="test" />
                <Links linkname="test" url="test" />
              </ul>
              <ul className={styles.footerLinks}>
                <Links linkname="standings" url="test" />
                <Links linkname="news" url="test" />
                <Links linkname="test" url="test" />
                <Links linkname="test" url="test" />
              </ul>
            </div>
          </div>
        </div>
        <div className={` ${styles.copyRightContent}`}>
          <div className={styles.copyRightTextContainer}>
            &copy;
            <span className={styles.copyRightText}>all rights reserved 2025</span>
          </div>
          <ul className="flex gap-2">
            <li className="w-4 h-2 bg-SecondColor"></li>
            <li className="w-4 h-2 bg-SecondColor"></li>
            <li className="w-4 h-2 bg-SecondColor"></li>
            <li className="w-4 h-2 bg-SecondColor"></li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
