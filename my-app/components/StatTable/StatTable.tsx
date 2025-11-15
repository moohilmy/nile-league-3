import Image from 'next/image'
import React from 'react'
import styles from './style.module.css' 
import Link from 'next/link';
export default function StatTable({ statName , isClubTable = false}: { statName: string; isClubTable?: boolean }) {
    const tableHeader = statName.replace(/-/g, " ")
  return (
    <section>
         <h1 className={styles.titleofStat}>{tableHeader}</h1>
      <table className={styles.tableContainer}>
        <thead className={styles.tableHeader}>
          <tr>
            <th className={styles.TableHeaderRank}>rank</th>
            {!isClubTable && <th>player</th>}
            <th>club</th>
            {!isClubTable && <th className={styles.tableHide}>Nationality</th>}
            <th className={styles.TableHeaderTotal}>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.TableBodyRank}>1</td>
            {!isClubTable && <td>
              <div>Mohamed Salah</div>
              <Link href={'/nile-league/players/1'} className='nile-league-link'/>
            </td>}
            <td>
              <div className="flex items-center gap-2">
                <Image
                  height={25}
                  width={25}
                  src={"/team-logo/alahly.svg"}
                  alt="alahly"
                />
                <span>Al ahly</span>
              <Link href={'/nile-league/clubs/1'} className='nile-league-link'/>
              </div>
            </td>
            {!isClubTable &&<td className={`${styles.tableHide} ${styles.nationalTD}`}>
              <Image
                src={"/egypt-flag.png"}
                height={20}
                width={20}
                alt="Nationality"
              />
              egypt
            </td>}
            <td className={styles.TableBodyTotal}>12</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
