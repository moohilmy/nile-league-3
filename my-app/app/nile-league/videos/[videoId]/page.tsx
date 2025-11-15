import NavNews from "@/components/NavNews/NavNews";
import NileLeagueLanding from "@/components/NileLeagueLanding/NileLeagueLanding";
import styles from "./style.module.css";
import { CopyUrlButton, TagAndDate } from "@/elements";
import React from "react";
import { ConpanantLoading } from "@/loading";
import { fetchVideoData } from "@/lib/getVideo";

const VideoDetails = async ({ params }: {  params: Promise<{ videoId: string }> }) => {
  const { videoId } = await params;
  const video = await fetchVideoData(videoId);
  if (!video) return <div>Video not found.</div>;
  const { thumbnail, title, publishedAt } = video;
  return (
    <main>
      <NileLeagueLanding
        title={title}
        stylePlus={{
          direction: "rtl",
        }}
        isInpage={true}
      >
        <div className="flex justify-between  mt-auto text-lg">
          <TagAndDate tag="video" publishedDate={publishedAt} />
          <CopyUrlButton />
        </div>
      </NileLeagueLanding>
      <section className={styles.sectionContainer}>
        <div className='landing-image-page'>
          <ConpanantLoading imgSrc={thumbnail} title={title} inView={true} />
        </div>
        <div className={styles.videoContentContainer}>
          <div className={styles.videoContent}>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              loading="lazy"
              style={{
                width: "100%",
                aspectRatio: '16/9'
              }}
            ></iframe>
          </div>
          <div className={styles.videoRelatedContent}>
            <div>
            <NavNews />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VideoDetails;
