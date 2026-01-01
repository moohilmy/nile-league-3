"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./styles.module.css";
import Image from "next/image";
import { Navigation, Pagination,Autoplay } from "swiper/modules";

export default function LandingSwiperNews() {
  return (
    <Swiper
      spaceBetween={50}
      className={styles.swiperContainer}
      slidesPerView={1}
      navigation={true}
      autoplay={{
        delay: 2500,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination,Autoplay]}

    >
      {["png", "jpg", "jpg", "jpeg"].map((s, index) => (
        <SwiperSlide key={index}>
          <div className={styles.SwiperSlice}>
            <div className={styles.sildeImg}>
              <Image
                src={`/News/news${index + 1}.${s}`}
                fill
                loading="lazy"
                fetchPriority="high"
                alt="news"
                style={{
                  objectFit: "cover",
                }}
              />
              <div className={styles.imgBackground} />
            </div>

            <div className={styles.slideInfo}>
              <h3 className={styles.slideTitle}>
                عقوبات الجولة الحادية عشر من دوري nile
              </h3>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
