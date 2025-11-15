'use client'
import React, { useCallback, useState } from "react";
import imgLoading from "@/public/loadingImg.png";
import styles from './style.module.css'
import Image from "next/image";
const PLACEHOLDER_SRC = `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`;

const ConpanantLoading = ({
  imgSrc,
  inView,
  title,
  isInList = false ,
}: {
  imgSrc: string;
  inView: boolean;
  title: string;
  isInList?: boolean;
}) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const setLoaded = useCallback(() => {
    if (inView){  
      setHasLoaded(true)
    };
  }, [inView, setHasLoaded]);
  return (
    
    <>
    {!hasLoaded && <Image
    src={imgLoading}
    fill={true}
    rel="preload"
    placeholder="blur"
    blurDataURL={PLACEHOLDER_SRC}
    
    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
    className={styles.lazyLoadingImg}
    alt="loading"
    />
    
    }
    <Image
    src={inView ? imgSrc : PLACEHOLDER_SRC}
    alt={title}
    placeholder="blur"
    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
    fill={true}
    
    blurDataURL={PLACEHOLDER_SRC}
    loading="lazy"
    className={isInList ? "imgAnimation" : ''}
    style={
      {
        objectFit: "cover",
        opacity: hasLoaded? 1 : 0,
        transition: "all 0.3s ease-in-out",
      }
    }
    onLoad={setLoaded}
    data-inview={inView}
    />

    </>
  );
};

export default ConpanantLoading;
