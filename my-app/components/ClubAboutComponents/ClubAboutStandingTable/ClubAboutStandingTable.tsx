import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

export type TTeam = {
  id: number;
  teamName: string;
  teamShortName:string;
  teamImg: string;
  pos: number;
  played: number;
  won: number;
  drow: number;
  lose: number;
  gf: number;
  ga: number;
  gd: number;
  pts: number;
};
export default function ClubAboutStandingTable({
  teams,
  teamId,
}: {
  teams: TTeam[];
  teamId: number | string;
}) {
  return (
    <div className={styles.shortTable}>
      <header className={styles.shortTableHeader}>
        <h2 className={'nile-league-headerLink'}>nile legue</h2>
      </header>
      <table className={styles.table}>
        <thead>
          <tr className={styles.TableHeader}>
            <th className={`${styles.tableHeading}`} scope="col">
              pos
            </th>
            <th
              scope="col"
              className={`${styles.tableHeading} ${styles.tableClubHeading}`}
            >
              club
            </th>
            <th className={`${styles.tableHeading} `} scope="col">
              p
            </th>
            <th className={`${styles.tableHeading} `} scope="col">
              w
            </th>
            <th className={`${styles.tableHeading} `} scope="col">
              d
            </th>
            <th className={` ${styles.tableHeading}`} scope="col">
              l
            </th>
            <th className={`${styles.tableHeading}  ${styles.hideInSmallScreen}`} scope="col">
              gf
            </th>
            <th className={` ${styles.tableHeading} ${styles.hideInSmallScreen} `} scope="col">
              ga
            </th>
            <th className={`${styles.tableHeading} `} scope="col">
              gd
            </th>
            <th className={`${styles.tableHeading} `} scope="col">
              pts
            </th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr
              key={index}
              className={`${styles.tableBodyRow} ${
                team.id == teamId ? `${styles.TeamSelected} t${teamId}` : ""
              }`}
            >
              <td className={`${styles.tableBody} ${styles.tablePOSBody}`}>
                <span>{team.pos}</span>
              </td>
              <td className={`${styles.tableBody} ${styles.tableClubBody}`}>
                <div className={`${styles.standingsTeamInfo}`}>
                  <Image
                    src={team.teamImg}
                    alt={`${team.teamName}`}
                    width={32}
                    height={32}

                    className=" size-8"
                  />
                  <span className={styles.teamLongName}>{team.teamName}</span>
                  <span className={styles.teamShortName}>{team.teamShortName}</span>
                </div>
              </td>
              <td className={`${styles.tableBody} ${styles.tablePlayedBody}`}>
                <span>{team.played}</span>
              </td>
              <td className={styles.tableBody}>
                <span>{team.won}</span>
              </td>
              <td className={styles.tableBody}>
                <span>{team.drow}</span>
              </td>
              <td className={styles.tableBody}>
                <span>{team.lose}</span>
              </td>
              <td className={`${styles.tableBody} ${styles.hideInSmallScreen}`}>
                <span>{team.gf}</span>
              </td>
              <td className={`${styles.tableBody} ${styles.hideInSmallScreen}`}>
                <span>{team.ga}</span>
              </td>
              <td className={`${styles.tableBody}`}>
                <span>{team.gd}</span>
              </td>
              <td className={`${styles.tableBody} ${styles.tablePTSBody}`}>
                <span>{team.pts}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
