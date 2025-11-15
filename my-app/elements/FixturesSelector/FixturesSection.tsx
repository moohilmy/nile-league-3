"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles.module.css";

export default function FixturesSection({
  title,
  children,
  filterName,
}: {
  title: string;
  filterName?: string;
  children: React.ReactNode;
}) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showContent ? "hidden" : "auto";
  }, [showContent]);

  const filterVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterName} onClick={() => setShowContent((prev) => !prev)}>
        <h2
          className={styles.title}
          
        >
          {title}
        </h2>
      </div>

      <AnimatePresence>
        {showContent && (
          <>
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setShowContent(false)}
            />

            <motion.div
              className={styles.panel}
              variants={filterVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div>
                <h2 className={styles.filterHeader}>{filterName}</h2>
              </div>
              {children}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
