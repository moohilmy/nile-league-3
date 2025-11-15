import styles from "./style.module.css";
const TagAndDate = ({ publishedDate, tag, }: { tag: string; publishedDate: string; inList?: boolean}) => {
  const formattedDate = new Date(publishedDate).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div className={`${styles.videoContentData}  mt-auto`}>
      <span className={styles.tag}>{tag}</span>
      <div className={styles.videoPublishedTime}>{formattedDate}</div>
    </div>
  );
};

export default TagAndDate;
