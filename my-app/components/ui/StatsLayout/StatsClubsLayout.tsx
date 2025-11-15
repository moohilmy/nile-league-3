import React from 'react'
import styles from './styles.module.css'
import { StatsCardClub } from '@/components/StatsCard'
const statsNames : string[] = ['goals', 'tackles', 'wins', 'losses']
export default function StatsClubsLayout() {
  return (
    <section className={`nile-league-wrapper`}>
      <header>
        <h1 className={styles.statsLayoutHeader}>Nile league Club Stats</h1>
      </header>
      <div className={`${styles.statsLayoutContent}`}>
        {statsNames.map((name, index) => (
          <StatsCardClub statName={name} key={index} />
        ))}
      </div>
    </section>
  )
}
