"use client";
import styles from "./styles.module.css";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ClassNames from "embla-carousel-class-names";
import LandingMatchBox from "./LandingMatchBox";
export default function LandingNextMatches() {
  return (
    <div className="w-[100%] mx-auto overflow-hidden my-10">
      <header className="w-[85%] mx-auto mb-4">
        <h2 className="nile-league-heading">matchweek 1</h2>
      </header>
      <Carousel
        opts={{
          align: "start",
          inViewThreshold: 0.4,
          slidesToScroll: 1,
          containScroll: "trimSnaps",
          
        }}
        
        plugins={[ClassNames({ inView: "is-active" })]}
        className="w-[85%] mx-auto relative "
      >
        <div className="absolute w-full z-10 top-[50%] flex justify-center">
        <CarouselPrevious className="-left-6 text-2xl w-14 h-14 border-0 bg-SecondColor hover:text-warmGray" />
        <CarouselNext className="-right-6 text-2xl w-14 h-14 border-0 bg-SecondColor hover:text-warmGray" />
      </div>
        <CarouselContent className=" relative w-[100%] gap-3">
          {[0, 0, 0, 0, 0, 0, 0, 0].map((_, index) => (
            <CarouselItem key={index} className={styles.matchCardContainer}>
              <LandingMatchBox />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
