"use client";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import HeaderIcon from "@/public/nile.svg";
import TeamSection from "../TeamsSection/TeamSection";
import useIsMobile from "@/hooks/IsMobile";

const links: { name: string; path: string }[] = [
  { name: "fixtures", path: "/nile-league/fixtures" },
  { name: "Standings", path: "/nile-league/standings" },
  { name: "Stats", path: "/nile-league/stats" },
  { name: "News", path: "/nile-league/news" },
  { name: "Videos", path: "/nile-league/videos" },
  { name: "Clubs", path: "/nile-league/clubs" },
  { name: "History", path: "/nile-league/history" },
];
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen, isMobile]);
  return (
    <>
      <TeamSection />
      <header
        className={`${styles.header} ${
          isMenuOpen ? styles.menuOpened : ""
        }`}
      >
        <div className={styles.headerContent}>
          <Link
            href="/"
            className="w-20 flex-shrink-0 relative"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src={HeaderIcon}
              alt="nile-league-logo"
              priority
              className=" relative"
            />
          </Link>

          <div className={`${styles.headerContainer} `}>
            <nav className={styles.headerNav}>
              <ul className={styles.headerNavList}>
                {links.map(({ name, path }, index) => (
                  <li
                    key={index}
                    className={`${styles.headerNavListItem} `}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link
                      href={`${path}`}
                      className="px-2 py-4 capitalize max-md:tracking-wider md:uppercase max-md:w-full"
                    >
                      <span className="text-lg font-semibold ">{name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <button
            className="md:hidden "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="menu-button"
          >
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
