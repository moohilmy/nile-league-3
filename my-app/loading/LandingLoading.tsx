import React from "react";
import loadingImg from "@/public/loading.png";
import Image from "next/image";
export default function LandingLoading() {
  return (
    <div
      style={{
        width: "100%",
        height: "65vh",
        overflow: "hidden",
      }}
    >
      <Image
        src={loadingImg}
        alt="loadingImg"
        priority
        fetchPriority="high"
        loading="eager"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}
