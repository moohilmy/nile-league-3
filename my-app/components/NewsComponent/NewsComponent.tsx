import Link from "next/link";
import styles from "./style.module.css";
import { INews } from "@/app/nile-league/news";
const PLACEHOLDER_SRC = `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`;

import { TagAndDate } from "@/elements";
import Image from "next/image";

const NewsComponent = ({ post }: { post: INews }) => {
  const { id, img, title, date } = post;
  return (
    <article className={`${styles.newsArticle}`}>
      <Link className={`${styles.container} nile-league-article`} href={`/nile-league/news/${id}`}>
        <div
          className={`${styles.imgContainer}`}
        >
          <div className="img-header">
          <div className={`imgBackground`}></div>
          <Image src={`/News/${img}`} alt={title} fill={true}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  placeholder={PLACEHOLDER_SRC} loading="lazy" className="nile-league-mediaImage" />
          </div>
        </div>
        <div className={styles.newsContent}>
          <h2 className='mediaContentHeading'>{title}</h2>
          <TagAndDate tag='news' publishedDate={date} inList={true}/>
        </div>
      </Link>
    </article>
  );
};

export default NewsComponent;
