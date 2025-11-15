"use client";
import { useState, useEffect, useCallback } from "react";
import { EmblaCarouselType } from "embla-carousel";
import ClassNames from "embla-carousel-class-names";
import VideoComponent from "../../VideoComponent/VideoComponent";
import styles from "./style.module.css";
import { VideoType } from "@/types";
import useIsMobile from "@/hooks/IsMobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type VideoListLayoutProps = {
  videosList: VideoType[];
  titleOfSection: string;
};

const VideoListLayout: React.FC<VideoListLayoutProps> = ({
  videosList,
  titleOfSection,
}) => {
  const isMobile = useIsMobile();
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType>();
  const [slidesInView, setSlidesInView] = useState<number[]>([]);

  const updateSlidesInView = useCallback((api: EmblaCarouselType) => {
    const visibleSlides = api.slidesInView();

    const lastVisible = visibleSlides[visibleSlides.length - 1];

    const nextSlide =
      lastVisible + 1 < api.slideNodes().length ? lastVisible + 1 : null;

    const slidesToLoad =
      nextSlide !== null ? [...visibleSlides, nextSlide] : visibleSlides;

    setSlidesInView((prev) => {
      const updated = new Set(prev);
      slidesToLoad.forEach((i) => updated.add(i));
      return Array.from(updated);
    });
  }, []);
  useEffect(() => {
    if (!emblaApi) return;

    updateSlidesInView(emblaApi);

    emblaApi.on("slidesInView", updateSlidesInView);
    emblaApi.on("reInit", updateSlidesInView);

    return () => {
      emblaApi.off("slidesInView", updateSlidesInView);
      emblaApi.off("reInit", updateSlidesInView);
    };
  }, [emblaApi, updateSlidesInView]);
  return (
    <section className="overflow-hidden my-11">
      <div className="w-full relative">
        <div className={styles.sectionContainer}>
          <header>
            <h2 className="nile-league-header">{titleOfSection}</h2>
          </header>

          <Carousel
            setApi={setEmblaApi}
            opts={{
              align: "start",
              inViewThreshold: 0.4,
              slidesToScroll: isMobile ? 1 : 3,
              containScroll: "trimSnaps",
            }}
            plugins={[ClassNames({ inView: "is-active" })]}
            className="w-full relative"
          >
            {!isMobile && isMobile !== null && (
              <div className="absolute w-full z-10 top-[25%] flex justify-center">
                <CarouselPrevious className="-left-6 text-2xl w-14 h-14 border-0 bg-SecondColor hover:text-warmGray" />
                <CarouselNext className="-right-6 text-2xl w-14 h-14 border-0 bg-SecondColor hover:text-warmGray" />
              </div>
            )}
            <CarouselContent>
              {videosList.map((video, index) => (
                <CarouselItem
                  key={index}
                  className={`${styles.itemOnVideos} ${
                    isMobile === null && "card-lazy-background"
                  }`}
                >
                  <VideoComponent
                    video={video}
                    isInList={true}
                    inView={slidesInView.includes(index)}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default VideoListLayout;
