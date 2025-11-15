"use client";

import { useWeek } from "@/context/WeekProvider";
import { Suspense } from "react";
import styles from "./styles.module.css";
import FixturesSection from "./FixturesSection";
export default function FixturesSelector() {
  const { currentWeek } = useWeek();
  return (
    <Suspense fallback={<div>isLoading</div>}>
      <div className={styles.selectorContainer}>
        <FixturesSection title="Nile League" filterName="Competitions">
          <ul>
            <li>Fixture 1</li>
            <li>Fixture 2</li>
            <li>Fixture 3</li>
          </ul>
        </FixturesSection>
        <FixturesSection title="25/26" filterName="seasons">
          <ul>
            <li>Fixture 1</li>
            <li>Fixture 2</li>
            <li>Fixture 3</li>
          </ul>
        </FixturesSection>
        <FixturesSection title={`MW${currentWeek}`} filterName="matchweeks">
          <ul>
            <li>Fixture 1</li>
            <li>Fixture 2</li>
            <li>Fixture 3</li>
          </ul>
        </FixturesSection>
        <div className={styles.filterName}>
          <h2 className={styles.title}>reset</h2>
        </div>
      </div>
    </Suspense>
  );
}
