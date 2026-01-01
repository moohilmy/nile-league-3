"use client";

import styles from "./styles.module.css";
import LandingPlayerStats from "../LandingPlayerStats/LandingPlayerStats";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ClassNames from "embla-carousel-class-names";
export default function LandingStatsSection() {
  return (
    <div>
      <header className="mb-3">
        <h2 className="nile-league-header">nile league stars</h2>
      </header>
      <Carousel
        opts={{
          align: "start",
          inViewThreshold: 0.6,
          slidesToScroll: 1,

          containScroll: "trimSnaps",
        }}
        plugins={[ClassNames({ inView: "is-active" })]}
        className={styles.carsouselContainer}
      >
        <CarouselContent className=" relative w-[100%] gap-3">
          {[0, 0, 0, 0].map((_, index) => (
            <CarouselItem key={index} className={styles.landingStatsSection}>
              <LandingPlayerStats />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
