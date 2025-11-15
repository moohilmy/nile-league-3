import NewsComponent from "@/components/NewsComponent/NewsComponent";
import NileLeagueLanding from "@/components/NileLeagueLanding/NileLeagueLanding";
import { INews, newsData } from ".";
import styles from './style.module.css'
const page = async () => {
  return (
    <>
      <NileLeagueLanding title="news" />
      <section className={styles.newsPageSection}>
        <div className="nile-league-wrapper">
          <div className={styles.newsContainer}>
            {newsData.map((post: INews) => (
              <NewsComponent key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
