import Image from "next/image";
import styles from "./styles.module.css";
import { ClubsType } from "@/types";
import Link from "next/link";

const ClubItemList = ({ club }: { club: ClubsType }) => {
    const {id , image, name, sloganName} = club
  return (
    <div className={`${styles.clubItemCard}`}>
      <Link
        href={`/nile-league/clubs/${id}`}
        className="nile-league-link"
        aria-label={name}
      />
      <header>
        <div className={`${styles.clubItemHeadng} t${id}`}>
          <div className={`${styles.clubItemImg}  aspect-square relative"`}>
            <Image
              src={image}
              alt={name}
              fill
              sizes="100wv"
              className=" z-10"
            />
          </div>
        </div>
      </header>
      <div className={styles.teamInfoCard}>
        <h1 className="font-extrabold uppercase sm:text-xl text-base text-warmGray tracking-wide mb-2 ">
          {name}
        </h1>

        <p className="text-sm capitalize">{sloganName}</p>
      </div>
    </div>
  );
};

export default ClubItemList;
