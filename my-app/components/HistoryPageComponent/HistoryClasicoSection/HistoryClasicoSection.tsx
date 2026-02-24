"use client";

import styles from "./styles.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { StatsBar } from "@/components/StatsComponents";
import { TeamBackGround } from "@/components/MatchComponents";

gsap.registerPlugin(ScrollTrigger);

export default function HistoryClasicoSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  /* ================= PIN ================= */
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${window.innerHeight * 1.2}`,
      pin: true,
      scrub: true,
    });
  }, []);

  /* ================= Motion Scroll ================= */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 20,
  });


const heroScale = useTransform(progress, [0.45, 0.9], [1, 2.4]);
const heroZ = useTransform(progress, [0.50, 0.9], [0, 1000]);
const heroOpacity = useTransform(progress, [0.60, 0.9], [1, 0]);




  const alahlyX = useTransform(progress, [0.2, 0.6], [-180, 0]);
  const alahlyRotate = useTransform(progress, [0.2, 0.6], [-12, 0]);

  const zamalekX = useTransform(progress, [0.2, 0.6], [180, 0]);
  const zamalekRotate = useTransform(progress, [0.2, 0.6], [12, 0]);


  const statsOpacity = useTransform(progress, [0.4, 0.65], [0, 1]);
  const nameOpacity = useTransform(progress, [0.6, 0.8], [0, 1]);

  return (
    <section
      className={styles.clasicoHero}
      ref={containerRef}
      
    >

      <div
        style={{
          position: "relative",
          height: "100vh",
          perspective: "1200px",
          overflow: "hidden",
        }}
      >
      
        <div className={styles.heroImageBackground}>
          <Image
            src={"/history/hero-landing.png"}
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>

       
        <motion.div
          className={styles.heroImg}
          style={{
            scale: heroScale,
            z: heroZ,
            opacity: heroOpacity,
            
            transformStyle: "preserve-3d",
          }}
        >
          <Image
            src={"/history/clasico-hero.png"}
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </motion.div>

        <div className={styles.historyStats}>
          {/* Al Ahly */}
          <motion.div
            className={`${styles.alahlyTeam} ${styles.clasicoTeamStats}`}
            style={{
              x: alahlyX,
              rotate: alahlyRotate,
            }}
          >
            <div className={styles.teamLogoContainer}>
              <Image src={"/team-logo/alahly.svg"} alt="Al Ahly Logo" fill />
            </div>
            <motion.h3
              className={styles.teamName}
              style={{ opacity: nameOpacity }}
            >
              Al Ahly
            </motion.h3>
          </motion.div>

          {/* Stats */}
          <motion.div
            className={styles.headToHeadStats}
            style={{ opacity: statsOpacity }}
          >
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
          </motion.div>

          {/* Zamalek */}
          <motion.div
            className={`${styles.zamalekTeam} ${styles.clasicoTeamStats}`}
            style={{
              x: zamalekX,
              rotate: zamalekRotate,
            }}
          >
            <div className={styles.teamLogoContainer}>
              <Image src={"/team-logo/zamalek.svg"} alt="Zamalek Logo" fill />
            </div>
            <motion.h3
              className={styles.teamName}
              style={{ opacity: nameOpacity }}
            >
              Zamalek
            </motion.h3>
          </motion.div>

          {/* Background */}
          <motion.div style={{ opacity: statsOpacity }}>
            <TeamBackGround clubID={1} />
            <TeamBackGround clubID={2} isTeamAway />
          </motion.div>
        </div>
      </div>
    </section>
  );
}