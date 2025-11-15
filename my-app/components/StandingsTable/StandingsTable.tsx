import Image from "next/image";
import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
import "./StandingTable.css";
export default function StandingsTable({
  isInNav = false,
}: {
  isInNav?: boolean;
}) {
  return (
    <table
      className={`${styles.standingsTable}  ${
        isInNav ? "statnding-nav" : "statnding-page"
      }`}
    >
      <thead className={`standing-table-header`}>
        <tr className="standings-table-header-row">
          <th className={`table-header-cell table-heading-pos`} scope="col">
            pos
          </th>
          <th scope="col" className={`table-header-cell table-heading-club`}>
            club
          </th>
          <th className={`table-header-cell `} scope="col">
            p
          </th>
          <th className={`table-header-cell hide-in-nav`} scope="col">
            w
          </th>
          <th className={`table-header-cell hide-in-nav`} scope="col">
            d
          </th>
          <th className={`table-header-cell hide-in-nav`} scope="col">
            l
          </th>
          <th className={`table-header-cell  hide-in-nav`} scope="col">
            gf
          </th>
          <th className={`table-header-cell  hide-in-nav`} scope="col">
            ga
          </th>
          <th className={`table-header-cell hide-in-nav`} scope="col">
            gd
          </th>
          <th className={`table-header-cell `} scope="col">
            pts
          </th>
          <th
            className={`table-header-cell table-heading-form  hidden-In-mid-screen`}
            scope="col"
          >
            form
          </th>
          <th
            className={`table-header-cell hidden-In-small-screen hide-in-nav table-header-next`}
            scope="col"
          >
            next
          </th>
        </tr>
      </thead>
      <tbody className={`${styles.standingsTableBody}`}>
        {Array(18)
          .fill(0)
          .map((_, index) => (
            <tr key={index}>
              <td className="">
                <span>{index + 1}</span>
              </td>
              <td>
                <div className={`${styles.standingsTeamInfo}`}>
                  <Image
                    src="/team-logo/alahly.svg"
                    alt="team logo"
                    width={20}
                    height={20}
                  />
                  <span className={"team-long-name"}>Al Ahly</span>
                  <span className={"team-short-name"}>aly</span>
                  <Link
                    href={"/nile-league/clubs/1"}
                    className="nile-league-link"
                  />
                </div>
              </td>
              <td>
                <span>3</span>
              </td>
              <td className="hide-in-nav">
                <span>4</span>
              </td>
              <td className="hide-in-nav">
                <span>5</span>
              </td>
              <td className="hide-in-nav">
                <span>6</span>
              </td>
              <td className={`hide-in-nav`}>
                <span>9</span>
              </td>
              <td className={`hide-in-nav`}>
                <span>10</span>
              </td>
              <td className="hide-in-nav">
                <span>7</span>
              </td>
              <td className={`table-body-pts`}>
                <span>8</span>
              </td>
              <td className={`hidden-In-mid-screen `}>
                <ul className={`${styles.standingsFormList} `}>
                  <li className={`${styles.standingsFormItem} win`}>w</li>
                  <li className={`${styles.standingsFormItem} draw`}>d</li>
                  <li className={`${styles.standingsFormItem} draw`}>d</li>
                  <li className={`${styles.standingsFormItem} lose`}>l</li>
                  <li className={`${styles.standingsFormItem} win`}>w</li>
                </ul>
              </td>
              <td className={`hidden-In-small-screen hide-in-nav table-body-next`}>
                <div className="table-body-next">
                  <Image
                    src={"/team-logo/zamalek.svg"}
                    height={20}
                    width={20}
                    alt="next-team for alahly"
                  />
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
