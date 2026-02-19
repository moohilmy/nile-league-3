import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
const Links = ({
  arrLinks,
}: {
  arrLinks: { name: string; path: string }[];
}) => {
  return (
    <ul className={styles.footerLinks}>
      {arrLinks.map((link, index) => (
        <li
          className={`${styles.footerLinkItem}`}
          key={index}
        >
          <Link href={link.path}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Links;
