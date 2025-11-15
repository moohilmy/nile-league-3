import React from "react";
import Hero from "@/public/nileSponsore.png";
import Image from "next/image";
import Link from "next/link";
import styles from './styles.module.css'
const Sponsores = () => {
  return (
    <section className={styles.sponsoresSection}>
      <div className={`nile-league-wrapper ${styles.sponsores}`}>
        <h2 className=" uppercase font-bold">Sponsored by</h2>
        <ul className={styles.sponsoresList}>
          <li>
            <Link href="https://nile-developments.com/en/">
              <Image src={Hero} alt="Nile" sizes="35vw" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sponsores;
