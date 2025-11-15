import styles from "./styles.module.css";
import Image from "next/image";
export default function TeamSectioin({
  isTeamAway = false,
  teamName,
  imgSrc,
}: {
  isTeamAway?: boolean;
  teamName: string;
  imgSrc: string;
}) {
  return (
    <div
      className={`${styles.scoreBoardTeam}  ${
        isTeamAway ? styles.scoreBoardAway : styles.scoreBoardHome
      }`}
    >
      <h3 className={styles.scoreBoardteamName}>{teamName}</h3>
      <div className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px]">
        <Image
          src={imgSrc}
          height={95}
          width={100}
          style={{
            height: "100%",
            aspectRatio: '1'
          }}
          alt={`image for club ${teamName}`}
        />
      </div>
    </div>
  );
}
