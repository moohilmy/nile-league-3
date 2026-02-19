"use client";
import styles from "./styles.module.css";
import HistoryTimeLineBox from "../HistoryTimeLineBox/HistoryTimeLineBox";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {  useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
export default function HistoryTimeLine({
  data,
}: {
  data: { record: string; content: string; img: string }[];
}) {
  const container = useRef<HTMLDivElement | null>(null);


  useGSAP(
    () => {
      const el = container.current;
      if (!el) return;
      const cards = el.querySelectorAll(".card");
      const cardsImg = el.querySelectorAll(".card img");
      const cardsText = el.querySelectorAll(".card .card-text-box");
      const cardslength = cards.length;

      gsap.set(cards[0], { y: "0%" });
      gsap.set(cardsImg[0], { opacity: 1 });
      gsap.set(cardsText[0], {  opacity: 1 });

      for (let i = 1; i < cardslength; i++) {
        gsap.set(cards[i], { y: "100%" });
        gsap.set(cardsText[i], {  opacity: 0 });
      }
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: `+=${window.innerHeight * cardslength}`,
          pin: true,
          scrub: 0.6,
        },
      });
      for (let i = 0; i < cardslength - 1; i++) {
        const currentCard = cards[i];
        const nextText = cardsText[i + 1];
        const nextCard = cards[i + 1];
        const position = i;
        tl.to(
          currentCard,
          {
            y: "100%",
            ease: "none",
            direction: 1,
          },
          position,
        );
        tl.to(
          nextCard,
          {
            y: "0",
            ease: "none",
            direction: 1,
          },
          position,
        );
        tl.to(
          nextText,
          {
            opacity: 1,
            duration: .4,
            ease: "power2.out",
          },
          position + 0.4,
        );
      }
    },
    { scope: container },
  );

  return (
    
      <section className="sticky-cards " ref={container}>
        <div className={`${styles.historyTimeLineContainer} card-container`}>
          {data.map((item, index) => (
            <HistoryTimeLineBox
              key={index}
              index={index + 1}
              record={item.record}
              content={item.content}
              img={item.img}
            />
          ))}
        </div>
      </section>
  );
}
