"use client";
import styles from "./styles.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { StatsBar } from "@/components/StatsComponents";
import { TeamBackGround } from "@/components/MatchComponents";

gsap.registerPlugin(ScrollTrigger);

export default function HistoryClasicoSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const alahlyRef = useRef<HTMLDivElement | null>(null);
  const zamalekRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const clasicoName = document.querySelectorAll(".clasico-name");
      gsap.set(alahlyRef.current, {
        x: -180,
        rotationZ: -12,
        transformOrigin: "50% 50%",
      });

      gsap.set(zamalekRef.current, {
        x: 180,
        rotationZ: 12,
        transformOrigin: "50% 50%",
      });
      gsap.set(statsRef.current, { opacity: 0 });
      gsap.set(backgroundRef.current, { opacity: 0 });
      gsap.set(clasicoName, { opacity: 0 });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${window.innerHeight * 2}`,
          scrub: true,
          pin: true,
        },
      });
      tl.to(heroRef.current, {
        z: 1200,
        y: 120,
        ease: "none",
        duration: 0.35,
      });
      tl.to(
        [statsRef.current, backgroundRef.current],
        {
          opacity: 1,
          ease: "none",
          duration: 0.25,
        },
        "<",
      );

      tl.to(
        alahlyRef.current,
        {
          x: 0,
          rotationZ: 0,
          ease: "power3.out",
          duration: 0.45,
        },
        "<",
      );

      tl.to(
        zamalekRef.current,
        {
          x: 0,
          rotationZ: 0,
          ease: "power3.out",
          duration: 0.45,
        },
        "<",
      );

      tl.to(clasicoName, { opacity: 1, duration: 0.2 }, "+=0.05");
      tl.to(
        heroRef.current,
        {
          opacity: 0,
          ease: "none",
          duration: 0.8,
        },
        "<",
      );
      tl.to({}, { duration: 0.6 });
    },
    {
      scope: containerRef.current,
      revertOnUpdate: true,
    },
  );
  return (
    <section className={styles.clasicoHero} ref={containerRef}>
      <div className={styles.heroImageBackground}>
        <Image
          src={"/history/hero-landing.png"}
          alt=""
          fill
          sizes=" 100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className={styles.heroImg} ref={heroRef}>
        <Image
          src={"/history/clasico-hero.png"}
          alt=""
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className={styles.historyStats}>
        <div
          className={`${styles.alahlyTeam} ${styles.clasicoTeamStats} `}
          ref={alahlyRef}
        >
          <div className={styles.teamLogoContainer}>
            <Image src={"/team-logo/alahly.svg"} alt="Al Ahly Logo" fill />
          </div>
          <h3 className={`${styles.teamName} clasico-name`}>Al Ahly</h3>
        </div>
        <div className={styles.headToHeadStats} ref={statsRef}>
          <h2 className={styles.headToHeadTitle}>Head to Head</h2>
          <StatsBar
            homeTeamID={1}
            statsName="matches"
            homeTeamValue={128}
            awayTeamID={2}
            awayTeamValue={128}
          />
          <StatsBar
            homeTeamID={1}
            statsName="wins"
            homeTeamValue={49}
            awayTeamID={2}
            awayTeamValue={28}
          />
          <StatsBar
            homeTeamID={1}
            statsName="draws"
            homeTeamValue={51}
            awayTeamID={2}
            awayTeamValue={51}
          />
          <StatsBar
            homeTeamID={1}
            statsName="goals"
            homeTeamValue={165}
            awayTeamID={2}
            awayTeamValue={116}
          />
        </div>
        <div
          className={`${styles.zamalekTeam} ${styles.clasicoTeamStats}`}
          ref={zamalekRef}
        >
          <div className={styles.teamLogoContainer}>
            <Image src={"/team-logo/zamalek.svg"} alt="Zamalek Logo" fill />
          </div>
          <h3 className={`${styles.teamName} clasico-name`}>zamalek</h3>
        </div>
<div ref={backgroundRef}>
          <TeamBackGround clubID={1} />
        <TeamBackGround clubID={2} isTeamAway={true}  />
</div>
      </div>
    </section>
  );
}
