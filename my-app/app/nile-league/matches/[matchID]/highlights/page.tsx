import { fetchVideoData } from "@/lib/getVideo";
import React from "react";
import styles from "./styles.module.css";
export default async function page() {
  const video = await fetchVideoData("R7tEPosFVYc");
  if (!video) return <div>Video not found.</div>;
  const { title, publishedAt, id } = video;
  const date = new Date(publishedAt).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return (
    <div className={styles.highlightsPage}>
      <div className={styles.highlightsContainer}>
        <div className={styles.videoContainer}>
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </div>
        <div className={styles.videoInfo}>
          <h3 className={styles.videoTitle}>{title}</h3>
          <div className={styles.videoDate}>{date}</div>
        </div>
      </div>
    </div>
  );
}
