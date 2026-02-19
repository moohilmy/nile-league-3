'use client'

import Image from "next/image";
import { useCallback, useState } from "react";
import styles from './style.module.css';
import imgLoading from "@/public/loading.png";

const PLACEHOLDER_SRC = `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=`;

export default function ComponentLoading({
  imgSrc,
  inView,
  title,
  isInList = false,
}: {
  imgSrc: string;
  inView: boolean;
  title: string;
  isInList?: boolean;
}) {
  const [hasLoaded, setHasLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    if (inView) setHasLoaded(true);
  }, [inView]);

  return (
    <>
      {!hasLoaded && (
        <Image
          src={imgLoading}
          fill
          alt="loading"
          placeholder="blur"
          className={styles.loader}
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      )}

      <Image
        src={inView ? imgSrc : PLACEHOLDER_SRC}
        alt={title}
        fill
        sizes="(max-width: 768px) 50vw, 33vw"
        onLoad={handleLoad}
        className={isInList ? styles.imgAnimation : ''}
        style={{
          objectFit: "cover",
          opacity: hasLoaded ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
        }}
      />
    </>
  );
}
