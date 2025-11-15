"use client";


import Link from "next/link";
import SelectorSection from "./SelectorSection";
import styles from "./style.module.css";
import { motion, AnimatePresence } from "motion/react";
import { useSelectorContext } from "@/context/SelectorStore";
import useSelector from "./useSelector";

const seasons: { season: string; id: number }[] = [
  { season: "2024/25", id: 25 },
  { season: "2023/24", id: 24 },
  { season: "2022/23", id: 23 },
  { season: "2021/22", id: 22 },
  { season: "2020/21", id: 21 },
  { season: "2019/20", id: 20 },
  { season: "2018/19", id: 19 },
  { season: "2017/18", id: 18 },
];

type Props = {
  statsToggle?: string[];
};

const SelectorSeasons = ({
  statsToggle = ["goals", "red card", "yellow card", "wins"],
}: Props) => {
  const {
    selectedSeason,
    setSelectedSeason,
    selectedStat,
    setSelectedStat,
    isLoading,
  } = useSelectorContext();
  const {
    pathname,
    setShowMobileFilters,
    showMobileFilters,
    isSeasonsOpened,
    toggleSeasons,
    setIsStatsOpened,
    isStatsOpened,
    toggleStats,
    parentPath,
    setIsSeasonsOpened,
  } = useSelector();

  
  return (
    <nav className={styles.selectorContainer}>
      <button
        className={styles.filterbtn}
        onClick={() => {setShowMobileFilters((prev) => !prev)}}
      >
        <span>filter</span>
      </button>

      <AnimatePresence>
        <motion.div
          animate={
            !showMobileFilters
              ? {
                  opacity: 0,
                  minHeight: 0
                }
              : {
                  opacity: 1,
                  minHeight: '145px'
                }
          }
          exit={showMobileFilters ? {height: 0} : {height: 0}}
          className={
            showMobileFilters ? styles.selectorListOpen : styles.selectorList
          }
        >
          <SelectorSection
            selectorHeader="filter by season"
            isOpened={isSeasonsOpened}
            onClickFn={toggleSeasons}
            selectorSeleced={
              isLoading
                ? "please select"
                : seasons.find((s) => s.id === Number(selectedSeason))
                    ?.season || "please select"
            }
          >
            {seasons.map((season) => (
              <li key={season.id} className={styles.filterListItem}>
                <Link
                  href={`${pathname}?season=${season.id}`}
                  onClick={() => {
                    setSelectedSeason(season.id);
                    setIsSeasonsOpened(false);
                  }}
                  className="nile-league-link"
                />
                {season.season}
              </li>
            ))}
          </SelectorSection>

          <SelectorSection
            selectorHeader="filter by stat type"
            isOpened={isStatsOpened}
            onClickFn={toggleStats}
            selectorSeleced={
              isLoading ? "please select" : selectedStat.replace(/-/g, " ")
            }
          >
            {statsToggle.map((stat) => (
              <li key={stat} className={styles.filterListItem}>
                <Link
                  href={`${parentPath()}/${stat.replace(
                    /\s+/g,
                    "-"
                  )}?season=${selectedSeason}`}
                  onClick={() => {
                    setSelectedStat(stat);
                    setIsStatsOpened(false);
                  }}
                  className="nile-league-link"
                />
                {stat}
              </li>
            ))}
          </SelectorSection>
        </motion.div>
      </AnimatePresence>
    </nav>
  );
};

export default SelectorSeasons;
