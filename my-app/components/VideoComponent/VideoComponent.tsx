import { VideoType } from "@/types";
import styles from "./style.module.css";

import Link from "next/link";
import { ConpanantLoading } from "@/loading";
import { TagAndDate } from "../../elements";

const VideoComponent = ({
  video,
  inView,
  isInList = false,
}: {
  video: VideoType;
  inView: boolean;
  isInList?: boolean;
}) => {
  const { title, thumbnail, id, publishedAt } = video;

  return (
    <article className={"w-full h-full flex"}>
      <Link href={`/nile-league/videos/${id}`} aria-label={title}>
        <div className="flex w-full h-full flex-col">
          <header className={styles.videoHeader}>
            <div className="img-header">
              <div className={`imgBackground`}></div>
              <ConpanantLoading
                isInList={isInList}
                imgSrc={thumbnail}
                title={title}
                inView={inView}
              />
            </div>
          </header>
          <div className={styles.videoContent}>
            <h3 className='mediaContentHeading'>{title}</h3>
            <TagAndDate tag="video" publishedDate={publishedAt} inList={isInList} />
          </div>
        </div>
      </Link>
    </article>
  );
};

export default VideoComponent;
