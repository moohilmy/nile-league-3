"use client";

import ReactLenis from "lenis/dist/lenis-react";

import { useEffect, useRef } from "react";

const HistroyLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const lastScrollY = useRef(0);

  useEffect(() => {
    const header = document.querySelector(".header-Animation") as HTMLElement;


    header.style.transition = "opacity 0.3s ease";

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {

        header.style.opacity = "0";
      } else {

        header.style.opacity = "1";
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <ReactLenis root>{children}</ReactLenis>;
};

export default HistroyLayout;
