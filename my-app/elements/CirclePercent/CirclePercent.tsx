"use client";

import React, { useMemo } from "react";
import styles from "./styles.module.css";

interface CircularProgressProps {
  percentage: number;
  className?: string;
}

export default function CircularProgress({
  percentage = 0,
  className = "",
}: CircularProgressProps) {
  const pct = Math.min(100, Math.max(0, Number(percentage) || 0));

  const radius = 45; // ثابت كنسبة من الحجم
  const circumference = 2 * Math.PI * radius;
  const dash = (pct / 100) * circumference;

  const dashArray = useMemo(
    () => `${dash} ${circumference - dash}`,
    [dash, circumference]
  );

  return (
    <div className={`${styles.circularProgress} ${className}`} data-percentage={pct}>
      <svg viewBox="0 0 100 100" className={styles.svg}>
        <circle
          className={styles.track}
          cx="50"
          cy="50"
          r={radius}
        />
        <circle
          className={styles.bar}
          cx="50"
          cy="50"
          r={radius}
          strokeDasharray={dashArray}
          transform="rotate(-90 50 50)"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className={styles.text}
        >
          {pct}%
        </text>
      </svg>
    </div>
  );
}
