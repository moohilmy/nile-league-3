import { Footprints } from "lucide-react";
import Image from "next/image";
import styles from "./style.module.css";
import React from "react";
import { PlayerType } from "@/types";
import Link from "next/link";
import { getContryFlag } from "@/lib/getCountryFlag";

const PlayerCard = async({
  player,
  isPlayer = true,
}: {
  player: PlayerType;
  isPlayer?: boolean;
}) => {
  const {
    preferredFoot,
    name,
    age,
    id,
    image,
    contryCode,
    kitNumber,
    club,
  } = player;
  const data = await getContryFlag(contryCode)
  
  return (
    <div className={`${styles.playerCard} t${club.teamId}`}>
      <Link
        href={`/nile-league/players/${id}`}
        className={"nile-league-link"}
      />
      <div className={styles.playerNamberKit}>
        <div className={styles.playerNamber}>{kitNumber}</div>
      </div>

      <div className={styles.playerImage}>
        <Image
          src={image}
          alt={name}
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </div>

      <div className={styles.playerDetails}>
        <div className={styles.playerName}>{name}</div>

        <div className={styles.playerStats}>
          <ul className={styles.playerSubInfoitems}>
            {isPlayer && (
              <li className={styles.playerSubInfo}>
                <div>
                  <Footprints />
                </div>
                <span>{preferredFoot.slice(0, 1)}</span>
              </li>
            )}
            <li className={styles.playerSubInfo}>
              <div>age</div>
              <span>{age}</span>
            </li>
          </ul>
        </div>


        <ul className={styles.playerInfo}>
          <li>
            <Image src={data.rectangle_image_url} height={30} width={30} alt={data.country} />
          </li>
          <li>
            <Image src={"/nile.svg"} height={40} width={40} alt="dfad" />
          </li>
          <li>
            <Image src={club.teamLogo} height={20} width={20} alt="ggg" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PlayerCard;
