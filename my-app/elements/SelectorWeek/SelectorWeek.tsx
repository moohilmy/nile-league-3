"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useWeek } from "@/context/WeekProvider";

import { useState, useEffect } from "react";

const matchweeks = Array.from({ length: 30 }, (_, i) => i + 1);

export default function SelectorWeek() {
  const { currentWeek, setCurrentWeek } = useWeek();
  const [api, setApi] = useState<CarouselApi | null>(null);
  useEffect(() => {
    if (api) api.scrollTo(currentWeek - 1);
  }, [api, currentWeek]);

  const handleNext = (): void =>
    setCurrentWeek((prev: number) => (prev < matchweeks.length ? prev + 1 : prev));
  const handlePrev = (): void =>
    setCurrentWeek((prev: number) => (prev > 1 ? prev - 1 : prev));
  const handleSelectWeek = (week: number): void => {
    setCurrentWeek(week);
  };
  return (
    <nav className="relative flex items-center justify-center nile-league-wrapper flex-col ">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          inViewThreshold: 0.9, // يظهر العنصر بالكامل
          slidesToScroll: 1,

          containScroll: "keepSnaps",
        }}
        className="relative w-full max-w-md overflow-hidden py-4 flex items-center justify-center gap-1.5"
      >
        {/* أزرار التنقل */}

        <CarouselContent>
          {matchweeks.map((week) => (
            <CarouselItem
              key={week}
              className="basis-full flex justify-center items-center"
            >
              <button
                onClick={() => handleSelectWeek(week)}
              >{`Matchweek ${week}`}</button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          onClick={handlePrev}
          className="absolute left-0  text-2xl w-10 h-10 border-0 bg-SecondColor hover:text-warmGray rounded-full shadow-md"
        />
        <CarouselNext
          onClick={handleNext}
          className="absolute right-0  text-2xl w-10 h-10 border-0 bg-SecondColor hover:text-warmGray rounded-full shadow-md"
        />
      </Carousel>
    </nav>
  );
}
