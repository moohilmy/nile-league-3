import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
export default function SubNav({
  navLinks,
  id,
  pathName,
  mainLink
}: {
  navLinks: { name: string; path: string }[];
  id: string | number;
  pathName: string;
  mainLink: string
}) {
  
  return (
    <nav className={styles.Navigation}>
      <ul className={styles.NavigationList}>
        {navLinks.map(({ name, path }, index) => (
          <li
            key={index}
            className={`${styles.NavigationListItem} ${
              pathName === `${mainLink}/${id}/${path}` ||
              (path === "" && pathName === `${mainLink}/${id}`)
                ? styles.NavigationListItemActive
                : ""
            }`}
          >
            <Link
              className="w-full h-full inset-0 absolute"
              href={`${mainLink}/${id}/${path}`}
              aria-label={name}
            />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
